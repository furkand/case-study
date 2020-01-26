import React ,{useContext,useState}from "react"
import {UsersContext} from "../context/context"
import { geolocated } from "react-geolocated";
import GoogleMap from "../Components/map"
import {Link} from 'react-router-dom';
import findDistance from "../handlers/distance"

const SingleItem = (props)=>{
    const userId = props.match.params.userId;
    const users = useContext(UsersContext)
    const singleUser = users.filter( user=>user.login.username === userId)
    const user = singleUser[0] 
    const lat = parseFloat(user.location.coordinates.latitude)
    const lng = parseFloat(user.location.coordinates.longitude)
    let distance
    if(props.coords){
        const latU = props.coords.latitude
        const lngU = props.coords.longitude
        const distances = {
            a:lat,
            b:lng,
            c:latU,
            d:lngU
        }
        distance = findDistance(distances)/1000
    }
   
    

    return !props.isGeolocationAvailable ? ( <div>Your browser does not support Geolocation</div>
    ) : !props.isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : props.coords ?( <div>
        <div className="navigation">
            <Link className="example_f"to="/">
            <div className="button_cont" align="center">Back</div>
            </Link>
        </div>
        <div className="single-item-container"> 
            <div className="user-image"> <img src={user.picture.medium} alt=""/></div>
            <div className="info-container">
                <div className="additional-info"><h2 className="name">{user.name.title}.{user.name.first} {user.name.last}</h2></div>
                <div className="contact-informations"> 
                    <div className="email"><span>Email: </span>{user.email}</div>
                    <div className="number"><span>Number: </span>{user.phone}</div>
                    <div className="nationality"><span>Nationality: </span>{user.nat}</div>
                    <div className="distance">You are <b>{distance} </b>km far away from {user.name.title}.{user.name.first} {user.name.last} </div>
                </div>
             </div>
            <GoogleMap lat= {lat} lng= {lng }isMarkerShown/>
        </div>
        </div>): (<div className="loading">Getting the location data&hellip; </div>);
}

export default  geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(SingleItem);