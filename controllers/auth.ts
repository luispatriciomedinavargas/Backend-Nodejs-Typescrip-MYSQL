import { Request, Response } from "express";
import Usuario from "../models/usuarios";
import Persona from "../models/persona";
import generarJWT from "../helper/generar-jwt";

export const login=async(req:Request , res:Response)=>{


    const {password, email}=req.body;
  let id;
    const usuario = await Usuario.findOne({
        where: {
              password: password,
              email:email,
              estado:true
          },
          include:[{
              model:Persona,
              as:'id_persona'
          }]
    })
    if(!usuario) {
        return res.json({msg:'la contraseña o el usuario no es valido'}); 
    }

  id= Object(usuario)["id"];

    const token = await generarJWT(id);
  
    res.json({
        usuario,
        token 
     }
    )    

}