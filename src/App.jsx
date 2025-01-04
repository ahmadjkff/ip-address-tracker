import "./App.css";
import { MyProvider } from "./Context";
import GeoMap from "./GeoMap";
import Header from "./Header";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <div className="bg-background bg-cover bg-center h-80 font-rubik">
      <MyProvider>
        <Header />
        <GeoMap />
      </MyProvider>
    </div>
  );
}

export default App;
