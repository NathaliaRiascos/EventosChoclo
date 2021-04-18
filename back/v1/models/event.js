module.exports = (sequelize, DateType) => {
    const Event = sequelize.define("events", {
      event_id: {
        type: DateType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      event_name: {
        type: DateType.STRING
      },
      event_date: {
        type: DateType.DATE
      },
      event_description: {
        type: DateType.STRING
      },
      event_price: {
        type: DateType.FLOAT
      },
      event_img: {
        type: DateType.STRING
      }
    });
  
    return Event;
  };