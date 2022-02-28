import react , {useState, useEffect} from "react" 
import axios from "axios";
import './App.css';

function App() {

  const [chats , setChats] = useState([]);
  
    const fetchChats = async()=>{

    const {data} = await axios.get("/api/chats");
    console.log(data)
    setChats(data);

  }

  useEffect(()=>{

    fetchChats();
    
  },[])
  return (
    <div className="App">
     <h1 > Hello </h1>
     {chats.map((c)=>(
       <h1>{c.chatName}</h1>
     ))}
    </div>
  );
}

export default App;
