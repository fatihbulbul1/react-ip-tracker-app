const Info = ({bool, address}) => {
    return(
        <div className="info">
            <div className="info-section">
                <p>IP Address</p>
                <h1>{address.ip}</h1>
            </div>
            <div className="info-section">
                <p>Location</p>
                <h1>{bool !== "" ? `${address.city}, ${address.country}`: ""}</h1>
            </div>
            <div className="info-section">
                <p>Timezone</p>
                <h1>{bool !== "" ? "UTC " : ""}{address.utc_offset.substring(0,3)}</h1>
            </div>
            <div className="info-section">
                <p>ISP</p>
                <h1>{address.org}</h1>
            </div>
        </div>
    )
}
export default Info;