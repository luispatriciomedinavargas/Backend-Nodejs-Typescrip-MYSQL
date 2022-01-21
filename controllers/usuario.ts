import { Request, Response } from "express";
import { Persona } from "../models";
import Usuario from "../models/usuarios";

export const getUsuarios=async(req:Request , res:Response)=>{
const getAll = await Usuario.findAll( 
    { 
        include:[{
         model:Persona,
        as:'id_persona'
        }]
    }
);  
    res.json({
        getAll
    })    

}

export const getUsuarioById=async(req:Request , res:Response)=>{
    const {id}=req.params;
    const findByID = await Usuario.findByPk(
        id,
        { 
            include:[{
             model:Persona,
            as:'id_persona'
            }]
        }
    ); 
    res.json({
        findByID
        })    
 }
 export const postUsuario=async(req:Request , res:Response)=>{
   const {password,email}=req.body; 
    const usuario=await Usuario.create(password,email);
        res.status(200).json({
            usuario
        }) 
 }
    
 export const putUsuario=async(req:Request , res:Response)=>{

    const {id}=req.params;
    const {password,estado,email}=req.body;
        const data={email,password}
      
            const usuario= await Usuario.findByPk(id);

            await usuario!.update(data);
                 usuario!.save();
            res.json({
                usuario
            }) 
  }

  export const deleteUsuario=async(req:Request , res:Response)=>{

    const {id}=req.params;
const usuario = await Usuario.findByPk(id);
 

    await usuario?.update({estado:false});
    res.json({
     msg:'el usuario fue borrado correctamente'
         })   
  }