import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import Head from 'next/head';

import styles from '../styles/components/Home.module.css';

export default function Home() {
  return (    
    <div className={styles.container}>
      <head>
        <title>Inicio | move.it</title>
      </head>

      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
        </div>
      </section>
    </div>
  )
}
