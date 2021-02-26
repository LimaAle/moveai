import styles from '../styles/components/ChallengeBox.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';

export default function ChallengeBox() {
  const { activeChallenge, resetChallenge,completeChallenge } = useContext(ChallengesContext);
  const {resetCountdown} = useContext(CountdownContext);
  function handleChallengeSucceeded(){
    completeChallenge();
    resetCountdown();
  }
  function handlechallengeFailed(){
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>
            Ganhe {activeChallenge.amount} xp
          </header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="body" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button onClick={handlechallengeFailed} type="button" className={styles.challengeFailedButton}>Falhei</button>
            <button onClick={handleChallengeSucceeded} type="button" className={styles.challengeSucceededButton}>Completei</button>
          </footer>
        </div>
      ) : (
          <div className={styles.challengeNotActive}>
            <strong>Inicie um ciclo para receber desafios a serem completados</strong>
            <p>
              <img src="icons/level-up.svg" alt="levelup" />
              Avance de level completando desafios.
             </p>
          </div>
        )}

    </div>
  )
}