import { Request, Response } from "express";
import Usuario from "../models/usuarios";
import  Persona from "../models/persona";
import { Model, Sequelize, TableHints } from "sequelize/dist";

export const getUsuarios=async(req:Request , res:Response)=>{


let idPersona:number[]=[];

const getAll = await Usuario.findAll( 
    {
        order:[
        ]
    }
);

// getAll.map((user:any)=>{
// idPersona[user.dataValues.id_persona]=user.dataValues.id_persona;
// })
// idPersona.splice(0,1);

const usuarios= await Usuario.findAll({

})
    
    res.json({
        getAll
    })    

}

export const getUsuario=(req:Request , res:Response)=>{

    const {id}=req.params;

    res.json({
        msg:'get usuario - usuario controller',
        id
        })    
 }
    
 export const postUsuario=async(req:Request , res:Response)=>{

   const {body}=req; 
  
    try {
        const existeEmail=await Usuario.findOne({
            where:{
                email:body.email
            }
        })
        if(existeEmail){
            return res.status(400).json({
                msg:'ya existe un usuario con esas caracteristicas'
            })
        }
    const usuario=await Usuario.create(body);
        res.status(200).json({
            usuario
        })
    } catch (error) {
        console.log(error);
            res.status(500).json({
                msg:'Hable con el administrador'
            })
    }
  
 }
    
 export const putUsuario=async(req:Request , res:Response)=>{

    const {id}=req.params;
    const {body}=req;
        try {
            const usuario= await Usuario.findByPk(id);
            if(!usuario){
                return res.status(404).json({
                    msg:'No se existe un usuario con el id' + id
                })
            }
            await usuario.update(body);

            res.json({
                usuario
            })

        } catch (error) {
            console.log(error);
                res.status(500).json({
                    msg:'Hable con el administrador'
                })
        }   
  }

  export const deleteUsuario=(req:Request , res:Response)=>{

    const {id}=req.params;
     res.json({
         msg:'delete usuario - usuario controller',
         id
         })    
  }