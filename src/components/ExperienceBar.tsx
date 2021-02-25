import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';
export default function ExperienceBar(){
  const{currentExp,expToNextLevel} = useContext(ChallengesContext);

  const percentToNextLevel= Math.round((currentExp * 100)/ expToNextLevel);

  return(
    <header className={styles.ExperienceBar}>
      <span>0xp</span>
      <div>
        <div style={{width:`${percentToNextLevel}%`}}></div>
        <span className={styles.currentExperience} style={{left:`${percentToNextLevel}%`}}>{currentExp} px</span>
      </div>
      <span>{expToNextLevel} xp</span>
    </header>
  );
}