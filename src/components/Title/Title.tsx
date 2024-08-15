import styles from './Title.module.css'

interface Iprops{
    text: string
    color: string
}

export default function Title({text, color}: Iprops) {
    return(
        <h1 style={{color: color}} className={styles.title}>{text}</h1>
    )
}