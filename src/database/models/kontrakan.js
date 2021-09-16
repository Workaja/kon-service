'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kontrakan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Kontrakan.init({
    title: DataTypes.STRING,
    address: DataTypes.STRING,
    main_photo: DataTypes.STRING,
    gallery: DataTypes.JSON,
    amenities: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Kontrakan',
  });
  return Kontrakan;
};