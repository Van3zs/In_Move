import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData {

    minutes: number;
    seconds:number; 
    hasFinished:boolean;
    isActive: boolean; 
    startCountdown: ()=>void;
    resetCountdown:()=>void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({children}:CountdownProviderProps) {
    const {startNewChallenge} = useContext (ChallengesContext);
    const [time, setTime] = useState(25*60);
    const [isActive, setIsActive]= useState(false)

    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time/60);
    const seconds = time%60;

    function resetCountdown(){
        clearTimeout(countdownTimeout);
        setIsActive(false); /* reset o countdown  */
        setTime(25*60);
        setHasFinished(false);
    }

    function startCountdown() {
        setIsActive(true); /** e para iniciar o countdown */
    }

    useEffect (() => {
        if (isActive && time >0) {
            countdownTimeout = setTimeout(() => {
                setTime(time-1); 
            },1000)
        } else if (isActive  && time == 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time]); /* faz a diminuicao do tempo e countdownTimeout e para fazer parar no exato segundo */
    return (
        <CountdownContext.Provider value={{ minutes, seconds, hasFinished, isActive, startCountdown,
        resetCountdown}}>
            {children}
        </CountdownContext.Provider>
    )
    
}