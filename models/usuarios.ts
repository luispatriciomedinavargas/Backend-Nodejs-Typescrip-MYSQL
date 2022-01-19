import {DataTypes} from 'sequelize'
import db from '../db/connection'
import Persona from './persona';

const Usuario=db.define('Usuario',{
    id:{
        type:DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    password:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING,
        unique:true
    },
    estado:{
        type:DataTypes.BOOLEAN
    },
    id_persona:{
        type:DataTypes.BIGINT.UNSIGNED,
        references:{
            model:Persona,
            key:'id', 
        }
    },
})


// Cual es la diferencia entre  estos tres?
// Usuario.belongsTo(Persona)
// Usuario.hasOne(Persona)
export default Usuario;