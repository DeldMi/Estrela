import styles from '../Styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.ptofileContainer}>
            <img
                src="https://avatars.githubusercontent.com/u/63366610?s=460&u=8cfea61e5e145ecb86ab315eb5db2e2aa819cd0d&v=4"
                alt="Andre Felipe"
            />
            <div>
                <strong>Andre Felipe</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    Level 1
                </p>
            </div>

        </div>
    );
}