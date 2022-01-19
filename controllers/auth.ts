import { Request, Response } from "express";
import { check } from "express-validator";
import Usuario from "../models/usuarios";
import Persona from "../models/persona";
import db from "../db/connection";
import generarJWT from "../helper/generar-jwt";

export const login=async(req:Request , res:Response)=>{


    const {password, email}=req.body;
  let id;
    const usuario = await Usuario.findAll({
        where: {
              password: password,
              email:email,
              estado:1
          },
          include:[{
              model:Persona,
              as:'id_persona'
          }]
    })
    if(!usuario) {
        return res.json({msg:'la contraseña o el usuario no es valido'}); 
    }

    usuario.map((user:any)=>{
        id=user.dataValues.id;
    })
    const token = await generarJWT(id);
  
    res.json({
        usuario,
        token  }
    )    

}