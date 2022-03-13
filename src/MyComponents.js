import './App.css';
import axios from 'axios';


function ControlCenter(props){

    function manageClick (url) {

        const api = axios.create({baseURL: '//192.168.0.184:80'});

        api.get(url ).catch(console.log)
    
    }


    if(props.area_clicked === 'cocina'){
        return (
            <div className='container' style={{backgroundColor:'white'}}>
            <br/>
            <div className='roller-container'>
                <h1 style={{fontSize:'2vh', color:'white'}}>Cortina Puerta</h1>
                <button className = 'box' onClick = {() => manageClick('roller_1_up')}>Subir</button>
                <br/>
                <button className = 'box' style={{width: '15vh',backgroundColor:'red'}} onClick = {() => manageClick('stop')}>PARAR</button>
                <br/>
                <button className = 'box' onClick = {() => manageClick('roller_1_down')}>Bajar</button>
            </div>
            <div className='roller-container'>
                <h1 style={{fontSize:'2vh', color:'white'}}>Cortina Ventana</h1>
                <button className = 'box' onClick = {() => manageClick('roller_2_up')}>Subir</button>
                <br/>
                <button className = 'box' style={{width: '15vh',backgroundColor:'red'}} onClick = {() => manageClick('stop')}>PARAR</button>
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
        </div>

           
    );
}


export {ControlCenter,AppBar};