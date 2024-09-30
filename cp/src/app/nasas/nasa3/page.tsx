"use client";  // Indica que esse componente é um Client Component
import { NasaImage } from '../../../types/types';
import { useEffect, useState } from "react";

export default function Nasa3() {
  const [images, setImages] = useState<NasaImage[]>([]);  
  const [error, setError] = useState<string | null>(null);  

  useEffect(() => {
    async function fetchImages() {
      const apiKey = 'mGUQgkvm096rMdjLw9IDjzOrUHeOZJyeeI9dR6Qy';
      const fetchedImages: NasaImage[] = [];  // Array para armazenar as imagens
      const dates = [
        '2024-09-29'
      ];

      try {
        for (const date of dates) {
          const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`);
          
          // Verifica se a resposta é bem-sucedida
          if (!response.ok) {
            throw new Error('Falha ao buscar a imagem');
          }

          const data: NasaImage = await response.json();
          fetchedImages.push(data); // Adiciona a imagem ao array
        }

        setImages(fetchedImages); // Define as imagens no estado
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message); // Define a mensagem de erro
        } else {
          setError('Erro desconhecido'); // Mensagem padrão para erros desconhecidos
        }
      }
    }

    fetchImages();
  }, []);

  if (error) {
    return <p>{error}</p>; 
  }

  if (images.length === 0) {
    return <p>Loading...</p>;  
  }

  return (
    <div>
      {images.map((image) => (
        <div key={image.date}>
            <img src={image.url} alt={image.title} style={{ width: '500px', height: 'auto' }} /> 
        </div>
      ))}
    </div>
  );
}
