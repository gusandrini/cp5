import Link from "next/link";

export default function Menu() {
  return (
    <nav>
        <ul>
            <li> <Link href="/">Home</Link> </li>
            <li> <Link href="/rotas/rota1">Rota1</Link> </li>
            <li> <Link href="/rotas/rota2">Rota2</Link> </li>
            <li> <Link href="/rotas/rota3">Rota3</Link> </li>
            <li> <Link href="/rotas/rota4">Rota4</Link> </li>
        </ul>
    </nav>
  )
}
