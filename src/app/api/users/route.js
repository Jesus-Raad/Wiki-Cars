import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import clientPromise from "../../../../lib/mongodb.mjs";

export const GET = async (request) => {
  try {
    const client = await clientPromise;
    const db = client.db("wikiCars");

    // Obtenemos el userId desde los headers, asegúrate de que esto sea enviado en la petición
    const userId = request.headers.get("userId");

    if (!userId) {
      return NextResponse.json(
        { error: "No userId provided" },
        { status: 400 }
      );
    }

    // Buscamos el usuario por el campo userId.id
    const user = await db.collection("users").findOne({ "userId.id": userId });

    // Si no existe el usuario o no tiene favoritos, devolvemos un array vacío
    if (!user || !user.favorites) {
      return NextResponse.json({ favorites: [] });
    }

    // Devolvemos los favoritos del usuario
    return NextResponse.json({ favorites: user.favorites });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Error al obtener favoritos" },
      { status: 500 }
    );
  }
};

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
        favorites: [carId],
      });
    }

    return NextResponse.json({ message: "Favorito agregado" });
  } catch (e) {
    return NextResponse.json(
      { error: "Error al agregar favorito" },
      { status: 500 }
    );
  }
};
