import {DataTypes} from 'sequelize'
import db from '../db/connection'

const Tratamiento=db.define('Tratamiento',{
    id:{
        type:DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    descripcion:{
        type:DataTypes.STRING,
        allowNull:false
    },
    estado:{
        type:DataTypes.TINYINT,
        defaultValue:1
    }, 
})

export default Tratamiento;