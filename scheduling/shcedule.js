const cron = require("node-cron");
const Tour = require("../model/tour");
const { Op } = require("sequelize");

// module.exports = cron.schedule("*/10 * * * * *", () => {

//          console.log('running a task every 10 seconds: ', new Date().toLocaleTimeString().replace("/.*(\d{2}:\d{2}:\d{2}).*/", "$1"));
//        });

// module.exports = cron.schedule(" 59 18 * * *", () => {
//          console.log('running a task every 10 seconds: ', new Date().toLocaleTimeString().replace("/.*(\d{2}:\d{2}:\d{2}).*/", "$1"));
//        });

module.exports = cron.schedule(" 30 10 * * *", async () => {
  await Tour.update(
    {
      participants: 0,
      enabled: false,
    },
    {
      where: {
        startDate: {
          [Op.eq]: new Date(),
        },
        enabled: true,
        participants: {
          [Op.gt]: 0,
        },
      },
    }
  );
  console.log("DONE!");
  console.log(
    "Every day in 10:30 AM for every tour, which start day is now and have vacant place, setting participants to zero and remove from tour portfolio"
  );
});
