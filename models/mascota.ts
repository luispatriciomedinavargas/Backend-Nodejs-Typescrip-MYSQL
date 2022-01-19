import {DataTypes} from 'sequelize'
import db from '../db/connection'
import Persona from './persona';

const Mascota=db.define('Mascota',{
    id:{
        type:DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre:{
        type:DataTypes.STRING,
    },
    estado:{
        type:DataTypes.TINYINT,
        defaultValue:1
    },
    edad:{
        type:DataTypes.DATE,
    },
    comentario:{
        type:DataTypes.STRING,
    },
    id_persona:{
        type:DataTypes.BIGINT.UNSIGNED,
        references:{
            model:Persona,
            key:'id'
        }
    }
})



export default Mascota;