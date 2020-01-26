import React,{createContext,useState} from "react"



const UsersContext = createContext([])
const ws = new WebSocket(
  "wss://wunder-provider.herokuapp.com/socket.io/?EIO=3&transport=websocket"
)


const UserProvider = (props) =>{
  const[items,setItems] = useState([])
    
  ws.onopen = () => {
    console.log("Opened.");
  }
  ws.onmessage = msg => {
    if (msg.data.substr(0, 2) === "42") {
      const stringToBeParsed = msg.data.substr(2);
      const obj = JSON.parse(stringToBeParsed);
      const result = obj[1].results[0]
      console.log(result)
      setItems([...items,result]);
    }
  }
  return(
      <UsersContext.Provider value={items} {...props} />
  )
}
export  {UserProvider,UsersContext}