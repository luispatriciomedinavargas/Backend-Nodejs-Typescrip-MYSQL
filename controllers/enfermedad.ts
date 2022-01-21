import {Request,Response} from 'express';
import { Enfermedad } from '../models';

export const getAllEnfermedad=async (req:Request,res:Response)=>{
            
    const getEnfermedades = await Enfermedad.findAll({
        where:{estado:1}
    });
            res.status(200).json({
                getEnfermedades
            })
 }

export const GetByIdEnfermedad=async (req:Request,res:Response)=>{

    const {id}=req.params;
    const byIdEnfermedad=await Enfermedad.findOne({
        where:{id:id,estado:1}
    })
    if(!byIdEnfermedad){
        return res.status(404).json({
            msg:'No se pudo encontrar con ese id, por favor utilice otro'
        })
    }
    res.status(200).json({
        byIdEnfermedad
    })
}
export const postEnfermedad=async (req:Request,res:Response)=>{
    const {descripcion}=req.body;
    const postEnfermedad=await Enfermedad.create({descripcion});

    res.status(200).json({
        postEnfermedad
    })
}
export const putEnfermedad=async (req:Request,res:Response)=>{
    const {id}=req.params;
    const {descripcion}=req.body;
    const postEnfermedad=await Enfermedad.findByPk(id);

    postEnfermedad?.update({descripcion});

    res.status(200).json({
        postEnfermedad
    })
}
export const deleteEnfermedad=async (req:Request,res:Response)=>{
    const {id}=req.params;
    const deleteEnfermedad=await Enfermedad.findByPk(id);

    deleteEnfermedad?.update({estado:0});

    res.status(200).json({
        msg:'Se elimino correctamente'
    })
}


module.exports={
getAllEnfermedad,
GetByIdEnfermedad,
postEnfermedad,
putEnfermedad,
deleteEnfermedad
}