
export function Modal ({ open, onClose }) {
  return (
    <>
      {open && (
        <div
          className='fixed z-10 inset-0 bg-black bg-opacity-80 flex justify-center items-center lg:px-[25%] '
          id='modal-projects'
        >
          <div className='relative'>
            <div className=' absolute font-extrabold text-2xl cursor-pointer right-4' onClick={onClose}>
              x
            </div>
            <div className='bg-white p-8 rounded-lg w-auto text-justify dark:bg-slate-900 border-2 border-sky-400 lg:text-xl font-serif'>
              Hola
            </div>
          </div>
        </div>
      )}
    </>
  )
}
