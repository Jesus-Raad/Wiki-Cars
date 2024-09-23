import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import clientPromise from '../../../../lib/mongodb.mjs';

// Función auxiliar para añadir encabezados CORS
const addCorsHeaders=(response)=> {
  response.headers.set('Access-Control-Allow-Origin', '*'); // Permite cualquier origen
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type');
  return response;
}

export const  GET=async()=> {
  try {
    const client = await clientPromise;
    const db = client.db("wikiCars");
    const products = await db.collection("topCars").find({}).toArray();
    return addCorsHeaders(NextResponse.json(products));
  } catch (e) {
  
    return addCorsHeaders(NextResponse.json({ error: 'Error al obtener productos' }, { status: 500 }));
  }
}

// export const  POST=async(request)=> {
//   try {
//     const client = await clientPromise;
//     const db = client.db("wikiCars");
//     const body = await request.json();


//     const product = { ...body, _id: new ObjectId() };
//     await db.collection("topCars").insertOne(product);
//     return addCorsHeaders(NextResponse.json(product));
//   } catch (e) {
    
//     return addCorsHeaders(NextResponse.json({ error: 'Error al crear producto' }, { status: 500 }));
//   }
// }


export const POST = async (request) => {
  try {
    const client = await clientPromise; 
    const db = client.db("wikiCars"); 
    const body = await request.json(); 
    const { carId, comment, username } = body; 

    // Convertir carId a ObjectId
    const objectId = new ObjectId(carId);

    // Comprobamos si existe el coche
    const carExists = await db.collection("topCars").findOne({ _id: objectId });
    if (!carExists) {
      return NextResponse.json({ error: 'Coche no encontrado' }, { status: 404 });
    }

    // Actualizamos el coche con el nuevo comentario
    const updateResult = await db.collection("topCars").updateOne(
      { _id: objectId }, // Buscamos el coche por su ID
      { $push: { commit: { username, comment } } } // Agregamos el nuevo comentario
    );

    if (updateResult.modifiedCount === 0) {
      return NextResponse.json({ error: 'No se pudo actualizar el coche' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Comentario agregado exitosamente', comment: { username, comment } });
  } catch (e) {
    return NextResponse.json({ error: 'Error al agregar comentario' }, { status: 500 });
  }
};


// Manejar solicitudes OPTIONS para preflight CORS
export const OPTIONS= async()=> {
  return addCorsHeaders(new NextResponse(null, { status: 200 }));
}