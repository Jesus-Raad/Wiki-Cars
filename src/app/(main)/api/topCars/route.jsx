import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import clientPromise from '../../../../../lib/mongodb.mjs';

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

export const  POST=async(request)=> {
  try {
    const client = await clientPromise;
    const db = client.db("wikiCars");
    const body = await request.json();
    const product = { ...body, _id: new ObjectId() };
    await db.collection("topCars").insertOne(product);
    return addCorsHeaders(NextResponse.json(product));
  } catch (e) {
    
    return addCorsHeaders(NextResponse.json({ error: 'Error al crear producto' }, { status: 500 }));
  }
}

// Manejar solicitudes OPTIONS para preflight CORS
export const OPTIONS= async()=> {
  return addCorsHeaders(new NextResponse(null, { status: 200 }));
}