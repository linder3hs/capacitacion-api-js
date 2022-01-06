//* se va a encargar de gestionar la connection a la base de datos
import mongoose from "mongoose";

mongoose.Promise = global.Promise;

//* Recibe una url de connection a la base de datos
const connect = async (url) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
    });
    console.log("Conexion a la base de datos establecida");
  } catch (err) {
    console.log("error database", err.message);
  }
};

export default connect;
