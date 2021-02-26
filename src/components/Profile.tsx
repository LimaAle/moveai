import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';
export function Profile(){
  const{level}= useContext(ChallengesContext);
  return(
    <div className={styles.ProfileContainer}>
      <img  src="https://github.com/limaale.png" alt="Ale Lima"/>
      <div>
        <strong>Alessandro Lima</strong>
        <p>
          <img src="icons/level.svg"  alt="Level"/>
          
          Level {level}
        </p>
      </div>
    </div>
  );
}