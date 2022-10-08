import {useEffect, useState} from "react";
import Info from "./components/Info";
import MapElement from "./components/MapElement";
import Search from "./components/Search";

const App = () => {
  const [valid, setValid] = useState(true);
  const [address, setAddress] = useState({
    ip: "",
    city: "",
    country: "",
    utc_offset: "",
    org: "",
  });
  const [position, setPosition] = useState([0,0]);
  const handleFetch = (ip) =>{
    fetch(`https://ipapi.co/${ip}/json/`)
    .then(response => {
      if(response.ok){
        setValid(true)
        response.json()
        .then(data =>{
          setAddress(data)
          setPosition([data.latitude, data.longitude])
        })
      }
      else {
        setValid(false)
        setAddress(
          {
            ip: "",
            city: "",
            country: "",
            utc_offset: "",
            org: "",
          }
        )
        throw new Error("Invalid IP address")
      }
    })
  }
  useEffect(() =>{
    fetch(process.env.REACT_APP_API_KEY)
    .then((res) => res.json())
    .then(data => handleFetch(data.IPv4))
  },[])
  return (
    <div className="App">
      <Search valid={valid} handleFetch={handleFetch}/>
      <Info bool={address.utc_offset} address={address} />
      <MapElement position={position} />
    </div>
  );
}

export default App;
