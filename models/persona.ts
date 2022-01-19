import {DataTypes} from 'sequelize'
import db from '../db/connection'

const Persona=db.define('Persona',{
    id:{
        type:DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre:{
        type:DataTypes.STRING,
    },
    apellido:{
        type:DataTypes.STRING,
    },
    estado:{
        type:DataTypes.TINYINT,
        defaultValue:1
    },
})


export default Persona;