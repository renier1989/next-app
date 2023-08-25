import Link from 'next/link'
import React from 'react'

function index() {
  return (
    <div>
        <div> Esta es la vista principal de los Posts</div>
        <Link href="/">volver al inicio</Link>
    </div>
  )
}

export default index