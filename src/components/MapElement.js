import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
const MapElement = ({position}) => {
  function ChangeMapView({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());
  
    return null;
  }
    return(
      <div className="map">
        <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ChangeMapView coords={position} />
        <Marker position={position}>
          <Popup>
            Ip location
          </Popup>
        </Marker>
      </MapContainer>
    </div>
    )
}
export default MapElement;