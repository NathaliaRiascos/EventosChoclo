module.exports = (sequelize, DateType) => {
    const Show = sequelize.define("shows", {
      show_id: {
        type: DateType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      show_number: {
        type: DateType.INTEGER
      },
      show_time: {
        type: DateType.STRING
      },
      show_place: {
        type: DateType.STRING
      },
      show_sits: {
        type: DateType.INTEGER
      },
      event_id: {
          type: DateType.INTEGER
      }
      
    });
  
    return Show;
  };