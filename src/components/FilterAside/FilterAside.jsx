import { useDispatch, useSelector } from 'react-redux';

import { toggleFilter } from '../../store/filterSlice';

import styles from './FilterAside.module.scss';

const FilterAside = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const handleCheckboxFilter = (type) => {
    dispatch(toggleFilter({ filterName: type }));
  };
  return (
    <div className={styles.filterAside}>
      <h3 className={styles.filterAside__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>

      <label className={styles.filterAside__choice}>
        <input type="checkbox" name="stops" checked={filter.all} onChange={() => handleCheckboxFilter('all')} />
        <span className={styles.customCheckbox}></span>
        Все
      </label>

      <label className={styles.filterAside__choice}>
        <input type="checkbox" name="stops" checked={filter[0]} onChange={() => handleCheckboxFilter(0)} />
        <span className={styles.customCheckbox}></span>
        Без пересадок
      </label>

      <label className={styles.filterAside__choice}>
        <input type="checkbox" name="stops" checked={filter[1]} onChange={() => handleCheckboxFilter(1)} />
        <span className={styles.customCheckbox}></span>1 пересадка
      </label>

      <label className={styles.filterAside__choice}>
        <input type="checkbox" name="stops" checked={filter[2]} onChange={() => handleCheckboxFilter(2)} />
        <span className={styles.customCheckbox}></span>2 пересадки
      </label>

      <label className={styles.filterAside__choice}>
        <input type="checkbox" name="stops" checked={filter[3]} onChange={() => handleCheckboxFilter(3)} />
        <span className={styles.customCheckbox}></span>3 пересадки
      </label>
    </div>
  );
};
export default FilterAside;
