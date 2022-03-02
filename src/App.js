import "./App.css";
import Homepage from "./Pages/Homepage";
import Chatpage from "./Pages/Chatpage";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage/>} exact />
        <Route path="/chats" element={<Chatpage/>} />
        <Route path="*" element={<Homepage/>} />

      </Routes>
      
    </div>
  );
}

export default App;