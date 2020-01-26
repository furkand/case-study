import React,{useContext} from "react"
import {Card,Image,Button} from "semantic-ui-react"
import ItemCard from "../Components/Item/ItemCard"
import{UsersContext } from "../context/context"
const Home = (props) =>{
    const items = useContext(UsersContext)

    return(
        items.map(item=>(
            <div key={item.login.uuid} className="item-container ">
                <ItemCard key={item.login.uuid} item={item}/>
            </div>
        ))
        
    )

}

export default Home