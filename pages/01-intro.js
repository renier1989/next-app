import Image from 'next/image'
import Link from 'next/link'
import Padme from '../public/padme.png'
export default function Home() {
  return (
    <div>
      <p> Hola mundo, esta es una aplicacion creada con Next.js</p>

      <Link href="/posts"> Ir a  POSTS</Link>

      <div className='flex gap-1 '>
        {/* esta puede ser una forma de mostrar imagenes con el componente de <Image/> */}
        <Image className='rounded-md' src={'/renier.png'} width={400} height={400} alt='renier' /> 
        {/* esta puede ser otra forma de mostrar imagenes , importandola. */}
        <Image className='rounded-md' src={Padme} width={400} height={400} alt='padme'/>
      </div>
    </div>
  )
}
