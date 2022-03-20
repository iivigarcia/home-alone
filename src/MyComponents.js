import './App.css';
import axios from 'axios';


function TopBar(){
    return(
    <div className = 'Top-bar'>
        <img src='logo.png' style={{width:'50px' }} alt='logo'/>
    </div>)
}

function ControlCenter(props){

    function manageClick (url) {

        const api = axios.create({baseURL: '//192.168.0.184:80'});

        api.get(url ).catch(console.log)
    
    }


    if(props.area_clicked === 'cocina'){
        return (
            <div className = 'container' >
                <div className = 'roller-container' >
                    
                    <h1 style = {{fontSize:'2vh', color:'white'}}>Cortina Puerta</h1>
                    <button className = 'Mybutton'   alt = 'flecha arriba' onClick = {() => manageClick('roller_1_up')}/>
                    
                <br/>
                <button className = 'Mybutton'  style={{background:'url(./stop.png) no-repeat', backgroundSize:'contain'}} alt = 'stop' onClick = {() => manageClick('stop')}/>
                <br/>
                    <button className = 'Mybutton'  style={{background:'url(./arrow_down.png) no-repeat', backgroundSize:'contain'}} alt = 'flecha abajo' onClick = {() => manageClick('roller_1_down')}/>
                </div>
                <div className='roller-container'>
                    <h1 style={{fontSize:'2vh', color:'white'}}>Cortina Ventana</h1>
                        <button className = 'Mybutton'   alt = 'flecha arriba' onClick = {() => manageClick('roller_2_up')}/>
                    
                    <br/>
                        <button className = 'Mybutton'  style={{background:'url(./stop.png) no-repeat', backgroundSize:'contain'}} alt = 'stop' onClick = {() => manageClick('stop')}/>
                    <br/>
                        <button className = 'Mybutton'  style={{background:'url(./arrow_down.png) no-repeat', backgroundSize:'contain'}} alt = 'flecha abajo' onClick = {() => manageClick('roller_2_down')}/>
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


export {ControlCenter,AppBar, TopBar};