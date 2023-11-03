const User = require("./models/users");
const Detail = require("./models/Detail");
const cron = require("node-cron");

cron.schedule("59 23 * * *", async () => {
  console.log("Cron job started.");

  // Get a list of all users from your database
  try {
    const users = await User.find();

    // Get the current date and day of the week
    const currentDate = new Date();
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDay = daysOfWeek[currentDate.getDay()];

    for (const user of users) {
      const existingData = await Detail.findOne({
        user: user._id,
        exp: currentDate,
      });

      // If data doesn't exist, insert default data
      if (!existingData) {
        const defaultData = {
          user: user._id,
          cycle: 0,
          sleep: 0,
          walk: 0,
          water: 0,
          day: currentDay, // Set the day based on the current day of the week
          exp: currentDate,
        };

        // Insert the default data for this user
        await Detail.create(defaultData);
        console.log(
          `Cron job: Default data inserted for user with ID ${user._id}`
        );
      } else {
        console.log(
          `Cron job: Data already exists for user with ID ${user._id}`
        );
      }
    }

    console.log("Cron job completed.");
  } catch (error) {
    console.error("Cron job error:", error);
  }
});
