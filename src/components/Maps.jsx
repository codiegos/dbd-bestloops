export function Maps ({ data }) {
  return (
    <>
      {
        data.map(({ id, title, description, urlImage }) => (
          <li key={id} className=' flex flex-col justify-center items-center hover:scale-105 cursor-pointer'>
            <img src={urlImage} alt={description} className='bg-cover' />
            <h3>{title}</h3>
            <p>{description}</p>
          </li>
        ))
      }
    </>
  )
}
