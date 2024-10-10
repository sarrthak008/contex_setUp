import React, { useContext } from 'react'
import { BioContext } from '../contexts'

const About = () => {

    const {age} = useContext(BioContext)

  return (
    <div className='bg-cyan-800 flex items-center justify-center  text-white text-2xl h-lvh w-lvw'>
        {age}
    </div>
  )
}

export default About
