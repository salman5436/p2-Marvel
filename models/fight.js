'use strict';
module.exports = (sequelize, DataTypes) => {
  const fight = sequelize.define('fight', {
    userId: DataTypes.INTEGER,
    villainId: DataTypes.INTEGER,
    heroId: DataTypes.INTEGER
  }, {});
  fight.associate = function(models) {
    // associations can be defined here
  };
  return fight;
};