import {DataTypes} from 'sequelize'
import db from '../db/connection'
import Enfermedad from './enfermedad';
import Mascota from './mascota';
import Tratamiento from './tratamiento';

const HistoriaClinica=db.define('HistoriaClinica',{
    id:{
        type:DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
    },
    comentario:{
        type:DataTypes.STRING,
    },
   
})

HistoriaClinica.belongsTo(Mascota,{foreignKey:'id_mascota',targetKey:'id'})

HistoriaClinica.belongsTo(Tratamiento,{foreignKey:'id_tratamiento',targetKey:'id'})

HistoriaClinica.belongsTo(Enfermedad,{foreignKey:'id_enfermedad',targetKey:'id'})




export default HistoriaClinica;