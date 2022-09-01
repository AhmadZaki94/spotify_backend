const mongoose = require("mongoose");

// step 1 :- connect to mongodb
const connect = () => {
  return mongoose.connect(
    "mongodb://127.0.0.1:27017/spotify"
    // "mongodb+srv://zaki:zaki_123@spotify.fpdhgpr.mongodb.net/?retryWrites=true&w=majority"
  );
};

module.exports = connect;
