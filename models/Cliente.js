const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Cliente = db.define('cliente',{
    usuario: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },    
    telefone: {
        type: DataTypes.STRING(255)
    },
    cpf: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    tipo:{
        type: DataTypes.STRING(255)
    },
},{
    createdAt: false,
    updatedAt: false
})

// Cliente.sync({force:true})

module.exports = Cliente