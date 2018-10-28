'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    description: DataTypes.STRING,
    title: DataTypes.STRING,
    startingAt: DataTypes.DATE,
    endingAt: DataTypes.DATE
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
  };
  return Event;
};