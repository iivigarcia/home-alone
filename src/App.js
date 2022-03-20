import logo from './logo.svg';
import './App.css';
import {TopBar, AppBar,ControlCenter} from './MyComponents';
import { useState,setState } from 'react';

function App() {
  const [area_clicked,setAreaClicked] = useState(null);
  
  return (
    
    <div className = "App">
      <TopBar/>
      <AppBar area_clicked = {area_clicked} setAreaClicked = {setAreaClicked}/>
      <ControlCenter area_clicked = {area_clicked}/>
    </div>
  );
}

export default App;
