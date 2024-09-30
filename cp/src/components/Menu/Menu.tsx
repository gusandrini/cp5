import Link from "next/link";

export default function Menu() {
  return (
    <nav className="menu">
        <ul>
            <li> <Link href="/">Home</Link> </li>
            <li> <Link href="/rotas/rota1">Catastrofismo Celestial</Link> </li>
            <li> <Link href="/rotas/rota2">Interpretação Alternativa de Mitos e Religiões</Link> </li>
            <li> <Link href="/rotas/rota3">Revisão da Cronologia Histórica</Link> </li>
            <li> <Link href="/rotas/rota4">Cálculo de Velikovsky</Link> </li>
        </ul>
    </nav>
  )
}
