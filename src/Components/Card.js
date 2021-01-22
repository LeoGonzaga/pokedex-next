import styles from "../../styles/Card.module.css";

function Card({ name, photo }) {
  return (
    <div className={styles.container}>
      <a href={`/${name}`}>
        <img src={photo} width="200" className={styles.img} />
        <h2>{name}</h2>
      </a>
    </div>
  );
}

export default Card;
