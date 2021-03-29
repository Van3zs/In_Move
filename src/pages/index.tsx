import Head from 'next/head';

import { ExperienceBar } from '../components/ExperienceBar';
import {Profile} from '../components/profile'
import {CompletedChallenges} from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown';
import { ChallengeBox } from '../components/ChallengeBox';

import styles from '../styles/pages/Home.module.css'
import { CountdownProvider } from '../Contexts/CountdownContext';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Moving It</title>
      </Head>
      <ExperienceBar/>

      <CountdownProvider>
        <section>
          <div>
              <Profile />
              <CompletedChallenges/>
              <Countdown />
          </div>
          <div>
              <ChallengeBox/>
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}
