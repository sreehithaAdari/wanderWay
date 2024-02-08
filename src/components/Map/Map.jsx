import React from 'react'
import GoogleMap from 'google-map-react'

const Map = () => {
  const coord = { lat: 0, long: 0 }
  return (
    <div>
      <GoogleMap bootstrapURLKeys={{ key: '' }}
        defaultCenter={coord}
        center={coord}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={''}
        onChildClick={''}>

      </GoogleMap>
    </div>
  )
}

export default Map