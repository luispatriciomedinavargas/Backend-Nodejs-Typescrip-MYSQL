import { Request, Response } from "express";
import { Tratamiento } from "../models";


export const getAllTratamiento=async(req:Request,res:Response)=>{

const AllTratamiento=await Tratamiento.findAll({
    where:{
        estado:true
    }
});
    return res.status(200).json({
        AllTratamiento
    })
}
export const getByIdTratamiento=async(req:Request,res:Response)=>{

    const {id} =req.params;
    const getById=await Tratamiento.findOne({  where:{  id:id,estado:true, }})
    if(!getById){
        return res.status(500).json({
            msg:'el id no puede ser null'
        })
    }
    res.status(200).json({
        getById
    })
}


export const postTratamiento=async(req:Request,res:Response)=>{

    const {descripcion}=req.body; 
    const postTratamiento=await Tratamiento.create({descripcion});
    
    res.status(200).json({
    postTratamiento
    })
}

export const deleteTratamiento=async(req:Request,res:Response)=>{

    const {id}=req.params; 
    const deleteTratamiento=await Tratamiento.findByPk(id);
   
    await deleteTratamiento?.update({estado:false});
    
    res.status(200).json({
    deleteTratamiento
    })

}


export const putTratamiento=async(req:Request,res:Response)=>{

   
    const {id}=req.params; 
    const {descripcion}=req.body; 
    const putTratamiento=await Tratamiento.findByPk(id);
   
    await putTratamiento?.update({descripcion});
    
    res.status(200).json({
        putTratamiento
    })

}


module.exports={
getAllTratamiento,
getByIdTratamiento,
postTratamiento,
deleteTratamiento,
putTratamiento
}