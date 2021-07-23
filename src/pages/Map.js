import React, {Component} from 'react'
import GoogleMaps from 'simple-react-google-maps'




export default class Maps extends Component {
    render(){
        return(
            <div className='map'>
                <GoogleMaps 
                    apiKey={"AIzaSyD7ts5an6kU2c5chyTVAHjGS4vZEVnttP4"}
                    style= {{width: "100%", height: "500px"}}
                    zoom={12}
                    center={{
                        lat: -23.54348,
                        lng: -46.63250
                    }}
                    markers={{
                        lat: -23.54348,
                        lng: -46.63250
                    }}
                />
            </div>
        )
    }
}