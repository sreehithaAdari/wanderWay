
import { Grid, GridItem } from '@chakra-ui/react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Map from './components/Map/Map'
import PlaceDetails from './components/PlaceDetails/PlaceDetails'
function App() {

  return (
    <>
      <Header />
      <Grid templateColumns='repeat(2 , 0.1fr)'
        gap={1}
      >
        <Grid>
          <List />
        </Grid>
        <Grid>
          <Map />
        </Grid>


      </Grid>
      <PlaceDetails />
    </>
  )
}

export default App
