import styles from './FilterAside.module.scss';

const FilterAside = () => {
  return (
    <div className={styles.filterAside}>
      <h3 className={styles.filterAside__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>

      <label className={styles.filterAside__choice}>
        <input type="checkbox" name="stops" value="all" />
        <span className={styles.customCheckbox}></span>
        Все
      </label>

      <label className={styles.filterAside__choice}>
        <input type="checkbox" name="stops" value="all" />
        <span className={styles.customCheckbox}></span>
        Без пересадок
      </label>

      <label className={styles.filterAside__choice}>
        <input type="checkbox" name="stops" value="all" />
        <span className={styles.customCheckbox}></span>1 пересадка
      </label>

      <label className={styles.filterAside__choice}>
        <input type="checkbox" name="stops" value="all" />
        <span className={styles.customCheckbox}></span>2 пересадки
      </label>

      <label className={styles.filterAside__choice}>
        <input type="checkbox" name="stops" value="all" />
        <span className={styles.customCheckbox}></span>3 пересадки
      </label>
    </div>
  );
};
export default FilterAside;
