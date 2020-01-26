import {getDistance} from "geolib"
import * as geolib from 'geolib';

const findDistance = (locations) => {
    console.log(locations.a)
    const distance = getDistance(
        { latitude: locations.a, longitude: locations.b },
        { latitude: locations.c, longitude: locations.d }
    );
        return distance
}

export default findDistance