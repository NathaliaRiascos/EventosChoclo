module.exports = (sequelize, DateType) => {
    const Sell = sequelize.define("sells", {
      sell_id: {
        type: DateType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DateType.INTEGER
      },
      event_id: {
        type: DateType.STRING
      }
    });
  
    return Sell;
};