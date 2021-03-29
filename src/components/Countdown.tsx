import { useContext } from 'react';
import styles from '../styles/components/Countdown.module.css'
import {CountdownContext} from '../Contexts/CountdownContext'

export function Countdown( ) {

    const { minutes, 
            seconds, 
            hasFinished, 
            isActive,
            startCountdown,
            resetCountdown} /*pega as informaoes de dentro do contexto**/ 
            = useContext(CountdownContext)


    const [minuteLeft, minuteRight] = String(minutes).padStart(2,'0').split(''); /* padstart verifica se o minuto tem dois caracteres, caso nao, coloca o 0 na frente e o split quebra em dois.. ex 23 2 3*/

    const [secondLeft, secongRight] = String(seconds).padStart(2,'0').split('');

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secongRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button
                disabled 
                type='button' className={styles.coutdownButton}>
                Ciclo Encerrado</button>)
             : (
                 <>
                    {isActive? ( 
                    <button type='button' className={`${styles.coutdownButton} ${styles.countdownButtonActive}`} onClick={resetCountdown}>Abandonar ciclo</button>)
                        
                    : (<button type='button' className={styles.coutdownButton} onClick={startCountdown}>Iniciar ciclo</button>)}
                </>
             )
             
             }
           
        </div>
    );
}