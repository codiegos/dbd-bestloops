import { useState } from 'react'
import { Modal } from './Modal'

export function Maps ({ data }) {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      {
        data.map(({ id, title, description, urlImage }) => (
          <li key={id} onClick={() => setOpenModal(!openModal)} className='flex flex-col justify-center items-center transition hover:scale-105 cursor-pointer duration-200 ease-linear border-red-500 hover:border-b-2 '>
            <img src={urlImage} alt={description} className='' />
            <h3 className='text-2xl absolute bg-black bg-opacity-60 rounded-lg'>{title}</h3>
            <p>{description}</p>
          </li>
        ))

      }
      <Modal onClose={() => setOpenModal(false)} open={openModal} />
    </>
  )
}
