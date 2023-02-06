import mongoose from "mongoose";


 (async () => {
  try {
    mongoose.set('strictQuery', true);
    const db = await mongoose.connect("mongodb://localhost:27017/crud-mongo"); // si utilizamos mongodb Atlas ponemos la URL
    console.log("DB connected to", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})(); 



