import { Maps } from './components/Maps'
import { maps } from './data/maps'

function App () {
  return (
    <>
      <div className='flex flex-col items-center text-white min-h-screen bg-dbd bg-cover bg-center font-marcellus p-12'>
        <h1 className='text-7xl font-semibold bg-gradient-to-tr bg-clip-text text-transparent from-white via-red-600 to-white animate-text'>
          Dead by Daylight
          <span className='text-6xl block text-center'>Best Loops</span>
        </h1>
        <ul className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-12'>
          <Maps data={maps} />
        </ul>
      </div>
    </>
  )
}

export default App
