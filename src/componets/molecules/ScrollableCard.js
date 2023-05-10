import styles from './ScrollableCard.module.css';

export default function ScrollableCard(props){
    return(<div className={styles.card}>
      
        <img className={styles.image} src={props.Pic} alt='' />
         <h3>{props.userName}</h3>
         <p>{props.Description}</p>
         <p>{props.Exp}</p>
        </div>)
}