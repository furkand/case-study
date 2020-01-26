import React ,{useContext}from "react"
import {UsersContext} from "../context/context"
import { geolocated } from "react-geolocated";



const SingleItem = (props)=>{
    const userId = props.match.params.userId;
    const users = useContext(UsersContext)
    const singleUser = users.filter( user=>
        user.login.username === userId
    )
    const user = singleUser[0]
    console.log(props.coords)

    return(
        <div className="single-item-container"> 
            <div className="user-image"> <img src={user.picture.medium} alt=""/></div>
            <div className="additional-info"><h2 className="name">{user.name.title}.{user.name.first} {user.name.last}</h2></div>

        </div>

    )
}

export default  geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(SingleItem);