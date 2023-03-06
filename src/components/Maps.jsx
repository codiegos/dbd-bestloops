import { useState } from 'react'
import { Modal } from './Modal'

export function Maps ({ data }) {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      {
        data.map(({ id, title, description, urlImage }) => (
          <li key={id} onClick={() => setOpenModal(!openModal)} className=' flex flex-col justify-center items-center hover:scale-105 cursor-pointer'>
            <img src={urlImage} alt={description} className='bg-cover' />
            <h3 className='text-2xl'>{title}</h3>
            <p>{description}</p>
          </li>
        ))

      }
      <Modal onClose={() => setOpenModal(false)} open={openModal} />
    </>
  )
}
