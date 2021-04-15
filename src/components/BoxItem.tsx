import { useState, useEffect } from 'react';
import styles from '../Styles/components/BoxItem.module.css';
import style from '../Styles/pages/box.module.css';


export function BoxItem() {




    return (
        <div className={style.boxs}>
            < div className={styles.Box1} >
                <img src="./icons/bolo1.jpeg" alt="foto" alt="foto" />
                <p>Bolo 1</p>

                <button  >Carrinho</button>
                <input type="number" />


            </div >
            < div className={styles.Box2} >
                <img src="./icons/bolo2.jpg" alt="foto" />
                <p>Bolo 1</p>

                <button  >Carrinho</button>
                <input type="number" />

            </div >
            < div className={styles.Box3} >
                <img src="./icons/bolo3.jpeg" alt="foto" />
                <p>Bolo 1</p>

                <button  >Carrinho</button>
                <input type="number" />

            </div >
            < div className={styles.Box4} >
                <img src="./icons/bolo4.jpeg" alt="foto" />
                <p>Bolo 1</p>

                <button  >Carrinho</button>
                <input type="number" />

            </div >
            < div className={styles.Box5} >
                <img src="./icons/bolo5.jpeg" alt="foto" />
                <p>Bolo 1</p>

                <button >Carrinho</button>
                <input type="number" />

            </div >
            < div className={styles.Box6} >
                <img src="./icons/bolo6.jpeg" alt="foto" />
                <p>Bolo 1</p>

                <button  >Carrinho</button>
                <input type="number" />

            </div >
        </div >
    );
}