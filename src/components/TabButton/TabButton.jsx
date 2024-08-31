import styles from './TabButton.module.scss';
const TabButton = () => {
  return (
    <div className={styles.tab}>
      <button className={styles.tab__button}>Самый дешевый</button>
      <button className={styles.tab__button}>Самый быстрый</button>
      <button className={styles.tab__button}>Оптимальный</button>
    </div>
  );
};
export default TabButton;
