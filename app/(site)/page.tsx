import Header from '@/components/Header'
import ListItem from '@/components/ListItem'

export default function Home() {
  return (
    <div className="text-white bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
    
      {/* Header */}
      <Header>
        <div className="mb-2">

          {/* Welcome back */}
          <h1 className="text-white text-3xl font-semibold">
            Welcome back
          </h1>
        </div>

        {/* Liked Songs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grids-cols-4 gap-3 mt-4">
          <ListItem image="/images/liked.png" name="Liked Songs" href="liked" />
        </div>
      </Header>
      
      {/* Newest Songs */}
        <div className="mt-2 mb-7 px-6">
          <div className="flex justify-between items-center">
            <h1 className="text-white text-2xl font-semibold">
              Newest Songs
            </h1>
          </div >
          <div>
            List of Songs
          </div>
        </div>
    </div>
  )
}
