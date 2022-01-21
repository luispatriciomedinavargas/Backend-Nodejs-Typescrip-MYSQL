import { where } from 'sequelize/dist';
import {HistoriaClinica,Enfermedad,Mascota,Persona,Tratamiento,Usuarios} from '../models';


const validarIdPersonaUsuario=async(id:string)=>{
    const checkID= await Usuarios.findOne({include:{model:Persona,
    as :id}})
    if(checkID){
        throw new Error(`el ${id} ya se encuentra asociado a una cuenta, por favor utilize otro`)
    }
}
const validarIdUsuario=async(id:string)=>{
    const checkID= await Usuarios.findByPk(id)
    if(!checkID){
        throw new Error(`no existe un usuario con ese id`)
    }
}
 


export  {
    validarIdPersonaUsuario,
    validarIdUsuario
}