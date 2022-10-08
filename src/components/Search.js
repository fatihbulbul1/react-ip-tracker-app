import { useState } from "react";
const Search = ({valid,handleFetch}) =>{
    const [ip, setIp] = useState("");
    return(
        <div className="search">
            <h1>IP Address Tracker</h1>
            <div className="search-section">
                <input onKeyDown={(e) => {
                    if(e.key === "Enter"){
                        handleFetch(ip)
                        e.target.value = ""
                        setIp("")
                    }
                }}
                onChange={(e) => setIp(e.target.value)}
                type="text" value={ip} className="search-bar" placeholder="Search for any IP address or domain"/>
                <div onClick={() => {
                    handleFetch(ip)
                    setIp("")

                }} className="search-btn">
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <p className="error">{valid ? "" : "Please enter a valid IP address."}</p>
        </div>
    )
}
export default Search;