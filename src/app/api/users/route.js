import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/mongodb'; // Conexión con MongoDB

export async function POST(req) {
  const { userId, carId } = await req.json();
  
  try {
    const { db } = await connectToDatabase();
    const user = await db.collection('users').findOne({ userId });

    if (user) {
      // Si el coche ya está en favoritos, lo eliminamos. Si no está, lo añadimos.
      const isFavorite = user.favorites.includes(carId);
      const update = isFavorite
        ? { $pull: { favorites: carId } }
        : { $push: { favorites: carId } };

      await db.collection('users').updateOne({ userId }, update);
    } else {
      // Si el usuario no existe, lo creamos con el coche en favoritos.
      await db.collection('users').insertOne({ userId, favorites: [carId] });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}

export function OPTIONS() {
  return NextResponse.json(null, {
    headers: {
      'Access-Control-Allow-Origin': '*', // Permitir CORS
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}