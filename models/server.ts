import express,{Application} from 'express';
import cors from 'cors'
import userRoutes from '../routes/usuario';
import authRoutes from '../routes/auth';
import db from '../db/connection';

import Persona from './persona';
import Usuario from './usuarios';
import Enfermedad from './enfermedad';
import Tratamiento from './tratamiento';
import Mascota from './mascota';
import { HistoriaClinica } from '.';


import {enfermedades,
    historiaClinicas,
    mascotas,
    personas,
    tratamientos,
    usuarios} from '../seeders/index'


class Server {
    private app:Application;
    private port:string; 
    private apiPaths ={
        usuarios:'/api/usuarios',
        auth:'/api/auth'
    };
   

        constructor() {
        this.app=express();

        this.port= process.env.PORT ||'8080';
        
        //Metodos iniciales
        this.dbconnection();
        this.entites();
        this.middlewares();
        this.routes();
        this.seeds();
    }
        

    async dbconnection(){
        try { 
            await db.authenticate();
            
        } catch (error:any ) {
            throw new Error(error);
        }
        
    }
     entites(){
     Persona.sync();
     Usuario.sync();
     Mascota.sync();
     Enfermedad.sync();
     Tratamiento.sync();
     HistoriaClinica.sync();
    };

    async seeds(){        
        for  (const enfermedad of enfermedades) {
            const id =  await Enfermedad.findByPk(enfermedad.id)
            if(!id){
                Enfermedad.create(enfermedad);
            } 
        }
        for  (const tratamiento of tratamientos) {
            const id =  await Tratamiento.findByPk(tratamiento.id)
            if(!id){
                Tratamiento.create(tratamiento);
            } 
        }
        for  (const persona of personas) {
            const id =  await Persona.findByPk(persona.id)
            if(!id){
                Persona.create(persona);
                
            } 
        }
        for  (const mascota of mascotas) {
            const id =  await Mascota.findByPk(mascota.id)
            if(!id){
                Mascota.create(mascota);
            } 
        }
        for  (const usuario of usuarios) {
            const id =  await Usuario.findByPk(usuario.id)
            if(!id){
                Usuario.create(usuario);
            } 
        }
        for  (const historiaClinica of historiaClinicas) {
            const id =  await HistoriaClinica.findByPk(historiaClinica.id)
            if(!id){
                HistoriaClinica.create(historiaClinica);
            } 
        }
    }
    
    
    middlewares(){

        //CORS
        this.app.use(cors());


        //lectura BODY
        this.app.use(express.json());

        //Capeta publica
        this.app.use(express.static('public'));
    }
    routes(){
        this.app.use(this.apiPaths.usuarios, userRoutes)
        this.app.use(this.apiPaths.auth, authRoutes)
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Servidor Corriendo en puerto ${this.port}`);
        })
    }

}

export default Server;