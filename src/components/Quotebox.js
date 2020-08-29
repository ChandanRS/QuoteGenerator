import React from 'react'
import styles from './Quotebox.module.css'

const Quotebox = (props) =>{
    return (
        <div className={styles.container}>
         <div className={styles.quoteText}>{props.quoteText}</div>
         <div className={styles.author}>-{props.author}</div>
         <div className={styles.buttons}>
         <button className={styles.twitter}>
         <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${props.quoteText}`} rel="noopener noreferrer" target="_blank">
         <img className={styles.icon} src="images/twitter.png" alt="twitter icon"></img>
         </a>
        </button>
        <button onClick={props.newQuote}>New Quote</button>
         </div>
        </div>
    )
}

export default Quotebox;