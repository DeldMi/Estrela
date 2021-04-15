import styles from '../Styles/components/Profile.module.css';

export function TopPag() {
    return (
        <div className={styles.ptofileContainer}>
            <div className={styles.box}>
                <img
                    src="https://images.vexels.com/media/users/3/147078/isolated/preview/9d7db2f40cd39ee4e23797e90142fc76---cone-de-bolo-de-anivers--rio-cinza-dois-andares-by-vexels.png"
                    alt="bolo" />
                <p>BOLO ESTRELAS</p>
            </div>
        </div>
    );
}