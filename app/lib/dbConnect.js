const mongoose = require("mongoose");
const connection_string = process.env.CONNECTION_STRING;

if (!connection_string) {
  throw new Error(
    "Please define the CONNECTION_STRING environment variable inside .env.local",
  );
}

let cachedConnection = null;

export default async function connectDB() {
  if (cachedConnection) {
    return cachedConnection;
  }

  try {
    cachedConnection = await mongoose.connect(connection_string);
    console.log("DB Connected");
  } catch (error) {
    console.log("Error occurs while connecting to database ", error);
  }

  return cachedConnection;
}
