const { Sequelize, Model, DataTypes } = require("sequelize")

const connect = async () => {
  try {
    const sequelize = new Sequelize("postgres://marco:polo@localhost:5432/kontrakan")
    await sequelize.authenticate()

    console.log("Connection to Postgre has been establised.")
  } catch (error) {
    console.log(error)
  }
}

module.exports = connect