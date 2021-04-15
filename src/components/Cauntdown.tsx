import { useState, useEffect } from 'react';
import styles from '../Styles/components/Cauntdown.module.css';

export function Cauntdown() {

    const min = 25;
    const sec = 0;

    const mins = min * 60;
    const [time, setTime] = useState(mins + sec);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minutesLeft, minutesRignt] = String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRignt] = String(seconds).padStart(2, '0').split('');

    function starCauntdown() {
        setActive(true)
    }
    useEffect(() => {
        if (active && time > 0) {
            setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }
    }, [active, time])


    return (
        <div>
            <div className={styles.CauntdownContainer}>
                <div>
                    <span>{minutesLeft}</span>
                    <span>{minutesRignt}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRignt}</span>
                </div>
            </div>
            <button
                type="button"
                className={styles.cauntdownButton}
                onClick={starCauntdown}
            >
                Inicia um ciclo
            </button>
        </div>
    );
}