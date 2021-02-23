import styles from '../styles/components/Profile.module.css';
export function Profile(){
  return(
    <div className={styles.ProfileContainer}>
      <img  src="https://github.com/limaale.png" alt="Ale Lima"/>
      <div>
        <strong>Alessandro Lima</strong>
        <p>
          <img src="icons/leve.svg"  alt="Level"/>
          
          Level 1
        </p>
      </div>
    </div>
  );
}