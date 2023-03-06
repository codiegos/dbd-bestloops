import { Maps } from './components/Maps'
import { maps } from './data/maps'

function App () {
  return (
    <>
      <div className='flex flex-col items-center text-white min-h-screen bg-dbd bg-cover font-creepster'>
        <h1 className='pt-20 text-7xl'>Dead by Daylight Best Loops</h1>
        <ul className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 pt-20'>
          <Maps data={maps} />
        </ul>
      </div>
    </>
  )
}

export default App
