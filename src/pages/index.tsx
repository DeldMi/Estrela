import Head from 'next/head'

import { TopPag } from '../components/top-pag';
import { BoxCarr } from '../components/boxCarr';
import { BoxItem } from '../components/BoxItem';
// import { CompletedChallenges } from '../components/CompletedChallenges';
// import { ExperienceBar } from '../components/ExperienceBar';
// import { Profile } from '../components/Profile';

import styles from '../Styles/pages/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bolo | Estela</title>

      </Head>

      <TopPag />
      <BoxCarr />
      <section>
        <div >
          <div >
            <BoxItem />
          </div>



        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
