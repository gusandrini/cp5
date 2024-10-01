import { NextResponse } from 'next/server';

export async function GET() {
  const apiUrl = 'https://wilsjame.github.io/how-to-nasa/';
  const apiKey = 'mGUQgkvm096rMdjLw9IDjzOrUHeOZJyeeI9dR6Qy';

  try {
    // Realizando a requisição à API da NASA
    const res = await fetch(`${apiUrl}?api_key=${apiKey}`);
    
    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch images from NASA API' }, { status: 500 });
    }

    const data = await res.json();

    // Retorna os dados como JSON
    return NextResponse.json(data);
  } catch {
    // Retorna uma mensagem de erro genérica
    return NextResponse.json({ error: 'Error fetching data from NASA API' }, { status: 500 });
  }
}
