# Dummy Map is a react project that explore the following question:
How should we update child component from parent component, if the child component uses react-google-maps

## Solution: using ref and recompose
This folder contains one example of updating, here is the brief explain of the workflow:

### Step1: <App /> keeps a reference to its child <MapContainer />
For usage of refs, please refer to the doc: [Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)

Notice only the class component could we have the ref to it, so we need to make sure that in `component/MapContainer.js`:
```React
class MapContainer extends React.Component {
    ...
}

export default MapContainer;
```

### Step2: Refactor HOCs usage by recompose
As the example shown in [React Google Maps Style Guide](https://tomchentw.github.io/react-google-maps/#usage--configuration), we can use `compose` & `withProps` to achieve HOCs elegantly. However, `compose` returns a factory function that takes a component and returns a customized functional component as wrapper, which we don't want. 

We change the structure of `component/MapContainer.js` based from the example, so `MapContainer` is a class component now and we can change its child components (such as `GoogleMap` in this example) easily from `App`.

## References
[Refs and the DOM](https://reactjs.org/docs/refs-and-the-dom.html)

[React Google Maps Style Guide](https://tomchentw.github.io/react-google-maps/#usage--configuration)
