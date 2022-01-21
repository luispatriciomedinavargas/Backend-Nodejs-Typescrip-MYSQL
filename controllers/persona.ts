import {Request,Response} from 'express';
import { where } from 'sequelize/dist';
import { Persona } from '../models';



export const getAllPersona=async(req:Request,res:Response)=>{
    const allPersona=await Persona.findAll({where:{estado:1}})
    res.status(200).json({
        allPersona
    })
}
export const getByIdPersona=async(req:Request,res:Response)=>{
    const {id}=req.params;
    const byIdPersona=await Persona.findByPk(id)
    res.json({
      byIdPersona
    })
}
export const postPersona=async(req:Request,res:Response)=>{
    
    const {nombre,apellido}=req.body;
    console.log(nombre,apellido);
    const persona=await Persona.create({nombre,apellido});
    res.status(200).json({
        persona
    })

}
export const PutPersona=async(req:Request,res:Response)=>{
    const {id}=req.params;
    const {nombre,apellido}=req.body;
    const persona= await Persona.findByPk(id);
    await persona!.update({nombre:nombre,apellido:apellido})
    res.status(200).json({
        persona
    })
}
export const DeletePersona=async(req:Request,res:Response)=>{
    const {id}=req.params;
    const persona= await Persona.findByPk(id);
    await persona!.update({estado:0})
    res.status(200).json({
        msg:'Se elimino correctamente'
    })
}

module.exports={
    getAllPersona,
    getByIdPersona,
    postPersona,
    PutPersona,
    DeletePersona
}


