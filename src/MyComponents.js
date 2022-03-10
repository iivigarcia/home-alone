import './App.css';
import axios from 'axios';
import  useEffect  from 'react';

function ControlCenter(props){

    

    if(props.area_clicked === 'cocina'){
        return (
            <div>
            <div className = 'container'>
                <button className = 'box' onClick={() => alert('subiendo!')}>Subir</button>
                <button className = 'box' onClick = {() => alert("subiendo!")}>Subir</button>
            </div>
            <div className = 'container'>
                <button className = 'box' onClick = {() => alert("Bajando!")}>Bajar</button>
                <button className = 'box' onClick = {() => alert("Bajando!")}>Bajar</button>
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