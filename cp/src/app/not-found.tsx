import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found">
      <Image
        src="/images/erro-404.jpg" // Substitua pelo caminho da sua imagem
        alt="Not Found"
        width={800} // Defina a largura
        height={800} // Defina a altura
      />
      <h1 className="text-4xl font-bold">404 - Página Não Encontrada</h1>
      <p className="mt-2">Desculpe, a página que você está procurando não existe.</p>
      <Link href="/">
        Voltar para a página inicial
      </Link>
    </div>
  );
}
