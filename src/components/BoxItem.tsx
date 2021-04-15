import { useState, useEffect } from 'react';
import styles from '../Styles/components/BoxItem.module.css';
import style from '../Styles/pages/box.module.css';


export function BoxItem() {

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
    const Teste

    return (
        <div className={style.boxs}>
            < div className={styles.Box1} >
                <img src="" alt="foto" />
                <p>Bolo 1</p>
                <input type="number" />
                <button onClick={Teste} >Carrinho</button>


            </div >
            < div className={styles.Box2} >
                <img src="" alt="foto" />
                <p>Bolo 1</p>
                <input type="number" />
                <button onClick={Teste} >Carrinho</button>


            </div >
            < div className={styles.Box3} >
                <img src="" alt="foto" />
                <p>Bolo 1</p>
                <input type="number" />
                <button onClick={Teste} >Carrinho</button>


            </div >
            < div className={styles.Box4} >
                <img src="" alt="foto" />
                <p>Bolo 1</p>
                <input type="number" />
                <button onClick={Teste} >Carrinho</button>


            </div >
            < div className={styles.Box5} >
                <img src="" alt="foto" />
                <p>Bolo 1</p>
                <input type="number" />
                <button onClick={Teste} >Carrinho</button>


            </div >
            < div className={styles.Box6} >
                <img src="" alt="foto" />
                <p>Bolo 1</p>
                <input type="number" />
                <button onClick={Teste} >Carrinho</button>


            </div >
        </div >
    );
}