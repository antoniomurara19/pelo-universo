const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('ecommerce','root','senai',{
    host: 'localhost',
    dialect: 'mysql',
})

// sequelize.authenticate().then(()=>{
//     console.log(`Banco de dados conectado!`)
// }).catch((error)=>{
//     console.error(`Erro de conexão com banco de dados${error}`)
// })

module.exports = sequelize