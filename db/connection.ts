import {Sequelize} from 'sequelize';

const db = new Sequelize('practica-ts','root','',{
    host:'localhost',
    dialect:'mysql',
    
});




export default db;