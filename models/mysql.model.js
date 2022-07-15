const { type } = require('express/lib/response')
const {Sequelize} =  require('sequelize')
const db = require('../middleware/db.config')

const detailsSchema = db.define('details',{
    id:{type:Sequelize.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:Sequelize.STRING,allowNull:false}
})