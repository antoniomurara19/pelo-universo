const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Produto = db.define('produto',{
    nome: {
        type: DataTypes.STRING(255)
    },
    tempo : {
        type : DataTypes.STRING(255)
    },
    quantidade_estoque: {
        type: DataTypes.INTEGER
    },
    preco: {
        type: DataTypes.FLOAT
    },
    descricao: {
        type: DataTypes.STRING(255)
    }
},{
    createdAt: false,
    updatedAt: false
})

// Produto.sync({force:true})

module.exports = Produto