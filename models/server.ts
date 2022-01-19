import express,{Application} from 'express';
import cors from 'cors'


import userRoutes from '../routes/usuario';
import db from '../db/connection';
import Persona from './persona';
import Usuario from './usuarios';
import Enfermedad from './enfermedad';
import Tratamiento from './tratamiento';
import Mascota from './mascota';
import HistoriaClinica from './HistoriaClinica';


class Server {

    private app:Application;
    private port:string; 
    private apiPaths ={
        usuarios:'/api/usuarios'
    };
   

        constructor() {
        this.app=express();

        this.port= process.env.PORT ||'8080';
        
        //Metodos iniciales
        this.dbconnection();
        this.middlewares();
        this.routes();
        this.entites()
    }
        

    async dbconnection(){

        try {
        
 
            await db.authenticate();

        } catch (error:any ) {
            throw new Error(error);
        }

    }
    async entites(){
    await Persona.sync();
    await Usuario.sync();
    await Mascota.sync();
    await Enfermedad.sync();
    await Tratamiento.sync();
    await HistoriaClinica.sync();
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
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Servidor Corriendo en puerto ${this.port}`);
        })
    }

}

export default Server;