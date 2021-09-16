'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UnitKontrakan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UnitKontrakan.init({
    photo: DataTypes.STRING,
    gallery: DataTypes.JSON,
    kontrakan_id: DataTypes.INTEGER,
    price_type: DataTypes.STRING,
    price: DataTypes.INTEGER,
    available: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'UnitKontrakan',
  });
  return UnitKontrakan;
};