import React, {useEffect,useState, useRef} from 'react';
import './timer.css';
import { useNavigate } from "react-router-dom";
import ScoresScreen from "./PlayersScores";
const Timer = () => {
    let navigate = useNavigate();

    const [seconds, setSeconds] = useState(30);
    const [secondsCountdown, setSecondsCountdown] = useState(1);
    const [minutes, setMinutes] = useState(0);
    const [minutesCountdown, setMinutesCountdown] = useState(6);
    const [isZero, setIsZero] = useState(1);
    const [isZeroCountdown, setIsZeroCountdown] = useState(1);

    const routeChange = ()=>{
        navigate("/entryscreen");
    }
    
    //var timer;
    const interval = useRef();
    useEffect(() => {

        interval.current = setInterval(()=>{
            setSeconds(seconds-1);
            
            if(seconds === 0){
                setSeconds(0);
                setIsZero(0);
                console.log("stopped warning timer");
                stop();

                setSecondsCountdown(secondsCountdown-1);
                if(secondsCountdown === 0){
                    if( minutesCountdown === 0){
                    setSecondsCountdown(0);
                    setIsZeroCountdown(0);
                    console.log("stopped Countdown Timer");
                    stop();
                    }else{
                        setSecondsCountdown(59);
                        setMinutesCountdown(minutesCountdown-1);
                    }
                }
            }
            },1000);

        return() =>{
            clearInterval(interval.current); 
            interval.current = null;
        };
    });

    const stop = () =>{
        clearInterval(interval.current);
    }

    const restart = () =>{
        setSeconds(30);
        setIsZero(0);
        setSecondsCountdown(0);
        setIsZeroCountdown(0);
        setIsZero(1);
    }

    if(isZero===1){
    return(
        
        <div className = "timer">
        <br></br>
        <div className="container_timer">
            
        <button onClick={routeChange} class="previous round button_style">&laquo; Return To Player Entry Screen</button>
        <div className="timer_container">
            <button onClick={restart} class="restart">RESTART</button>
            <h1 class="h1_timer">Warning Timer<br />{minutes<10 ? "0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds}<br/>Game Is About To Start</h1>
      
            <button onClick={stop} class="stop">STOP</button>
        </div>    
       
        </div>
        <div className = "scoreStyle"><ScoresScreen/></div>
        </div>
    )}else{
        return(
            <div className = "timer">
            <br></br>
            <div className="container_timer">
            <button onClick={routeChange} class="previous round button_style">&laquo; Return To Player Entry Screen</button>
            <div className="timer_container">
           
                <button onClick={restart} class="restart">RESTART</button>
                <h1 class="h1_timer">Countdown Timer<br/>{minutesCountdown<10 ? "0"+minutesCountdown:minutesCountdown}:{secondsCountdown<10?"0"+secondsCountdown:secondsCountdown}<br/>The Game Has Started</h1>
                
                <button onClick={stop} class="stop">STOP</button>
            </div>
            </div>

            <div className = "scoreStyle"><ScoresScreen />
            </div>
            </div>
        )
    }
}

export default Timer;
