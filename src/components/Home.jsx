import React, { useContext } from 'react'
import { BioContext } from '../contexts'

const Home = () => {

    const {sayhello} = useContext(BioContext)

  return (
    <div className='h-lvh w-lvw bg-lime-700 text-white items-center justify-center flex'>
       {sayhello() + '  also i m function...'}
    </div>
  )
}

export default Home
