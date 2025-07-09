import React from 'react'
import { Link } from 'react-router'

const PNF = () => {
  return (
    <section className='text-center pt-64'>
        <h2 className='text-4xl font-semibold mb-12'>
            Siz xoxlagan sahifa topilmadi
        </h2>
        <Link className='bg-black text-white font-semibold text-lg p-8 px-12 rounded-lg' to='/'>
        Bosh sahifa
        </Link>
    </section>
  )
}

export default PNF