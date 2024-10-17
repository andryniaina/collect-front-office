import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import CrossIcon from "../../../../assets/cross.svg";
import "leaflet/dist/leaflet.css";

function Point() {
  return (
    <div className="field">
      <label className="field-text">Point</label>
      <div className="map-form">
        <div className="left-side">
          <div className="field">
            <label className="field-inside-text">latitude (x.y °)</label>
            <input
              className="input-inside-text"
              type="number"
              step="0.000001"
              name="Texte"
              id="text"
            />
          </div>
          <div className="field">
            <label className="field-inside-text">longitude (x.y °)</label>
            <input
              className="input-inside-text"
              type="number"
              step="0.000001"
              name="Texte"
              id="text"
            />
          </div>
        </div>
        <div className="right-side">
          <div className="search-zone">
            <input
              className="input-search"
              type="text"
              name="Texte"
              id="text"
              placeholder="search for place or address"
            />
            <div>
              <img className="crosshair" src={CrossIcon} alt="crosshair" />
            </div>
          </div>
          <div className="map-box">
            <MapContainer center={[51.505, -0.09]} zoom={13}>
              <TileLayer
                url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                subdomains={["mt0", "mt1", "mt2", "mt3"]}
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Point;