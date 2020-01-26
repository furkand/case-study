import React ,{useEffect,useState} from "react"
import {Card} from "semantic-ui-react"
import ItemContent from "../ItemContent"
import ItemButtons from "../ItemButtons"
import "./item.css"


const ItemCard = ({item}) =>{
    const name = `${item.name.title} ${item.name.first} ${item.name.last}`
    const [animate,setAnimate] = useState({opacity:0})
    const handleAnimation = () =>{
        setTimeout(()=>{setAnimate({opacity:1})},400)
    }
    useEffect(()=>{
        handleAnimation()
    },[])
    return(      
        <Card.Group style={{opacity:animate.opacity, transition: "opacity 1s ease"}}>
            <Card>
            <ItemContent 
            name={name} 
            country={item.location.city} 
            city={item.location.country} 
            state={item.location.state} 
            thumbnail={item.picture.medium} 
            registerDate={item.registered.date}
            />
            <Card.Content extra>
                <ItemButtons email={item.email} phone={item.phone} username={item.login.username}/>
            </Card.Content>
            </Card>
        </Card.Group>
      )
}
export default ItemCard;