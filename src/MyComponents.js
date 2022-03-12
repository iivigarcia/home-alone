import './App.css';
import axios from 'axios';
import  {useEffect,useState}  from 'react';
import fetch from 'cross-fetch';


function ControlCenter(props){

    function manageClick (url) {

        axios.get('http://127.0.0.1:8080/' + url ).catch()
    
    }


    if(props.area_clicked === 'cocina'){
        return (
            <div className='container' style={{backgroundColor:'white'}}>
            <br/>
            <div>
                <button className = 'box' onClick = {() => manageClick('roller_1_up')}>Subir</button>
                <br/>
                <button className = 'box' onClick = {() => manageClick('roller_1_down')}>Bajar</button>
            </div>
            <div>
                <button className = 'box' onClick = {() => manageClick('roller_2_up')}>Subir</button>
                <br/>
                <button className = 'box' onClick = {() => manageClick('roller_2_down')}>Bajar</button>
            </div>
            </div>
        );
    }
    return null;

}

function AppBar(props){
    function manageClick(room){
        if(room === props.area_clicked){
            props.setAreaClicked(null);
        }else{
        props.setAreaClicked(room);
        }
    }
    return(
        <div className='container'>
            <button className='box' onClick = {() => manageClick('cocina')}>Cocina</button>
            <button className='box' onClick = {() => manageClick('sum')}>Sum</button>
            <button className='box' onClick = {() => manageClick('climatizacion')}>Climatizacion</button>            
        </div>

           
    );
}


export {ControlCenter,AppBar};