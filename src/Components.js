import './App.css';
import axios from 'axios';
import {useEffect,useState} from 'react';

import { ReactComponent as RollerIcon } from './blinds_icon.svg';
import { ReactComponent as ClimateIcon } from './climate_icon.svg';
import { ReactComponent as ArrowIcon } from './arrow_icon.svg';
import { ReactComponent as StopIcon } from './stop_icon.svg';
import { ReactComponent as LockIcon } from './lock_icon.svg';
const roller_ip = '//192.168.0.184:80';
const server_url = '//localhost:8080';

function NavBarIcon(props){
    switch (props.name){
        case 'CORTINAS':
            return <RollerIcon/>
            
        case 'CLIMATIZACION':
            return <ClimateIcon/>
        case 'SEGURIDAD':
            return <LockIcon/>
        default:
            return null
               

    }

}
function TopBar(){
    
    return(
        <div className = 'Top-bar'>
        </div>
    )
}

function ControlCenter(props){

    const [schedule,setSchedule] = useState(null);
    
    
    function manageClick (url) {

        const api = axios.create({baseURL: roller_ip});

        api.get(url).catch(console.log)
    
    }

    function updateSchedule (id,value){
        const api = axios.create({baseURL: server_url});
        api.get('/config_update?id=' + id + '&value=' + value).catch(console.log);
        api.get('/config').then(res => setSchedule(res.data.schedule)).catch(console.log);

    }

    useEffect(() => {
        loadArray();
      }, [])

    function loadArray (){

        const api = axios.create({baseURL: server_url});
               
        api.get('config').then(res => setSchedule(res.data.schedule)).catch(console.log);
    }

    const rollers = [{id : 1, name:'PUERTA'},{id : 2, name:'VENTANA'}];

    
    if(props.area_clicked === 'CORTINAS'){
        
        return (
            <div className = 'roller-container' >
                <ul className='list-roller'>
                {rollers.map( function(roller){ 
            
                    return(
                        <li className = 'individual' key={roller.id}>                                    
                            <h1 className='text' > CORTINA {roller.id} </h1>
                            <div className='icon'>
                            <a href='/#'>
                            <ArrowIcon  onClick = {() => alert("subiendo cortina")/*manageClick('roller_' + roller.id + '_up')*/}/>
                            </a>
                            </div>
                            <br/>
                            <div className='stop-icon'>
                            <a href='/#'>
                            <StopIcon  onClick = {() => alert("parando")/*manageClick('roller_' + roller.id + '_down')*/}/>
                            </a>
                            </div>
                            <br/>
                            <div className='icon'>
                            <a href='/#'>                            
                            <ArrowIcon style={{transform: 'rotate(180deg)'}} onClick = {() => alert("subiendo cortina")/*manageClick('stop')*/}/>
                            </a>
                            </div>
                            <br/>
                        </li>       
                    );
                })}
                </ul>
        </div>
        )
    }
    
    if(props.area_clicked === 'CLIMATIZACION'){
        
        
        if(schedule === null){
            return( 
            
                
                <h1 style = {{fontSize:'6vh', color:'white'}}> ERROR: Fallo la conexion con el servidor </h1>
            )    
        }
        else{
        return (          
        <div className='hour-container'>
            
        {schedule.map( function(schedule){ 
            
            return(
                <button className = 'hour-button' key={schedule.id}  alt = 'horario' style={{backgroundColor:schedule.value === 'on' ?'green':'grey'}}onClick = {
                    () => {
                        updateSchedule(schedule.id,schedule.value === "on" ?'off':'on');
                        schedule.value = (schedule.value === "on" ?'off':'on');                     
                        }
                }>{schedule.id}</button>                            
                                    
            )
        })}
        </div>
            
        )
    }

    }
        
    return null;

}

function AppBar(props){

    const rooms = [{id: 1, name: 'CORTINAS', icon: RollerIcon},{id:2, name: 'CLIMATIZACION', icon: null},{id:3, name: 'SEGURIDAD', icon: LockIcon}];

    function manageClick(room){
        if(room === props.area_clicked){
            props.setAreaClicked(null);
        }else{
        props.setAreaClicked(room);
        }
    }
    return(

        <div className = 'navbar-container'>
            <ul className = 'list'>
            {rooms.map(function(room){
                return(
                <li><a href="/#"  onClick = {() => manageClick(room.name)}>
                <div className='icon'>
                    < NavBarIcon name = {room.name}/>
                </div>
                <div  className = 'text' key = {room.id}> {room.name} </div>
                </a></li>
                );} )}
            </ul>
        </div>

           
    );
}


export {ControlCenter,AppBar, TopBar};