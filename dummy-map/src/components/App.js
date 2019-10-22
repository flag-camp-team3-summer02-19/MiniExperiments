import React from 'react';
import MapContainer from './MapContainer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.mapContainer = React.createRef();
    }

    changeZoom = () => {
        let newZoom = Math.floor(Math.random() * 10); // 1-9
        this.mapContainer.current.setZoom(newZoom);
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.changeZoom}>Click me to change zoom</button>
                <MapContainer
                    ref={this.mapContainer}
                    isMarkerShown
                />
            </div>
        );
    }
}

export default App;
