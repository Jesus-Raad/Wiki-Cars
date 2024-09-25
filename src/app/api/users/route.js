import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import clientPromise from '../../../../lib/mongodb.mjs';




  export const  GET=async()=> {
    try {
      const client = await clientPromise;
      const db = client.db("wikiCars");
      const users = await db.collection("users").find({}).toArray();
      return addCorsHeaders(NextResponse.json(users));
    } catch (e) {
    
      return addCorsHeaders(NextResponse.json({ error: 'Error al obtener productos' }, { status: 500 }));
    }
  }











export const POST = async (request) => {
  try {
    const client = await clientPromise;
    const db = client.db("wikiCars");
    const body = await request.json();
    const { userId, carId } = body;

    // Comprobamos si el usuario ya existe
    const user = await db.collection("users").findOne({ userId });

    if (user) {
      // Actualizamos los favoritos del usuario
      await db.collection("users").updateOne(
        { userId },
        { $addToSet: { favorites: carId } } // $addToSet evita duplicados
      );
    } else {
      // Si no existe el usuario, lo creamos
      await db.collection("users").insertOne({
        userId,
        favorites: [carId]
      });
    }

    return NextResponse.json({ message: 'Favorito agregado' });
  } catch (e) {
    return NextResponse.json({ error: 'Error al agregar favorito' }, { status: 500 });
  }
};