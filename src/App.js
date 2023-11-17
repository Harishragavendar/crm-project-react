import React, { Component } from 'react'; 
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 
import Home from './component/Home'; 
import About from './component/About'; 
import Contact from './component/Contact'; 
import ResponsiveAppBar from './Resp';

class App extends Component { 
render() { 
	return ( 
	<ResponsiveAppBar/>
); 
} 
} 

export default App;
