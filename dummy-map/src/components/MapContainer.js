import React, {Component} from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';
import { compose, withProps } from 'recompose';


/**
 * This is a currying function
 * It first takes props to return a factory function
 *
 * the factory function then takes a component and
 * returns a functional component that wraps it with
 * the following properties defined
 */
const WrapMap = (props) => compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCUZbCOjk8EvMDvySVudNz-OUUE0e_N0YM&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
        ...props
    }),
    withScriptjs,
    withGoogleMap);

class MapContainer extends Component {
    state = {
        zoom: 8
    }

    setZoom = (newZoom) => {
        this.setState({zoom: newZoom});
    }

    render() {
        const MyGoogleMap = WrapMap({...this.props, ...this.state})(
            (props) => (
                <GoogleMap
                    zoom={props.zoom}
                    defaultCenter={{ lat: -34.397, lng: 150.644 }}
                >
                    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
                </GoogleMap>
            )
        );

        return <MyGoogleMap />;
    }
}

export default MapContainer;