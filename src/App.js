import "./App.css";
import Address from "./Componenet/Profile/Address";
import Name from "./Componenet/Profile/FullName";
import Photo from "./Componenet/ProfilePhoto";

function App() {
  return (
    <div className="contain">
      <Photo />
      <Name />
      <Address />
    </div>
  );
}

export default App;
