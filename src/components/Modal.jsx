
export function Modal ({ open, onClose }) {
  const handleClose = (e) => {
    e.target.id === 'modal-maps' && onClose()
  }
  return (
    <>
      {open && (
        <div
          className='fixed z-10 inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center lg:px-[25%]'
          id='modal-maps'
          onClick={handleClose}
        >
          <div className='relative'>
            <div className=' absolute font-extrabold text-2xl cursor-pointer right-4' onClick={handleClose}>
              x
            </div>
            <div className='bg-white p-8 rounded-lg w-auto text-justify dark:bg-slate-900 border-2 border-sky-900 lg:text-xl font-serif'>
              Hola
            </div>
          </div>
        </div>
      )}
    </>
  )
}
