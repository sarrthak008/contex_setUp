import React, { useContext } from 'react'
import { BioContext } from '../contexts'

const Contact = () => {
const {myName} = useContext(BioContext)
  return (
    <div className='h-lvh w-lvw bg-slate-700 text-white flex justify-center items-center text-2xl'>
        {myName}
    </div>
  )
}

export default Contact
