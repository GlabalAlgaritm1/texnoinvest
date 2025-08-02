import React from 'react'
import { Link } from 'react-router'
import { Elements } from '../Elements'
import useTitle from '../Components/Usetitle'

const PNF = () => {
  useTitle('pnfb')
  return (
    <section className={`${Elements.Container} text-center pt-64`}>
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