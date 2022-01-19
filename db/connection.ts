import {Sequelize} from 'sequelize';
import Persona from '../models/persona';

const db = new Sequelize('practica-ts','root','',{
    host:'localhost',
    dialect:'mysql',
    
});




export default db;