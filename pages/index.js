import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <p> Hola mundo, esta es una aplicacion creada con Next.js</p>

      <Link href="/posts"> Ir a  POSTS</Link>
    </div>
  )
}
