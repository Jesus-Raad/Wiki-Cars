// Cargar variables de entorno desde el archivo .env
require('dotenv').config();
const { MongoClient, ObjectId } = require('mongodb');

async function addCarIdToDocuments() {
  // Obtener la URI desde las variables de entorno
  const uri = process.env.MONGODB_URI;

  // Crear una nueva instancia del cliente MongoDB
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Conectar al cliente
    await client.connect();
    console.log('Conexión a MongoDB exitosa');

    // Acceder a la base de datos y la colección
    const db = client.db('wikiCars');
    const collection = db.collection('topCars');

    // Obtener todos los documentos de la colección
    const cars = await collection.find({}).toArray();

    // Iterar sobre los documentos y agregar el campo 'carId' si no existe
    for (let car of cars) {
      if (!car.carId) { // Solo agregar si no existe el campo 'carId'
        const newObjectId = new ObjectId();
        await collection.updateOne(
          { _id: car._id },
          { $set: { carId: newObjectId } }
        );
        console.log(`Carro con _id: ${car._id} actualizado con carId: ${newObjectId}`);
      }
    }

    console.log("Todos los documentos han sido actualizados con un nuevo campo 'carId'.");
  } catch (error) {
    console.error("Error al actualizar los documentos:", error);
  } finally {
    // Cerrar la conexión del cliente
    await client.close();
    console.log('Conexión a MongoDB cerrada');
  }
}

// Ejecutar la función
addCarIdToDocuments();