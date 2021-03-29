import { useContext } from 'react'
import { ChallengesContext } from '../Contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile (){
    const{level} = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/TheVanessaSimpson.png" alt=" vanessa alcantara"/>
            <div>
                <strong> Vanessa Alcantara</strong>
                <p>
                    <img src="icons/Level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}