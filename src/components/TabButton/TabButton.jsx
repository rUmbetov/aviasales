import { useDispatch, useSelector } from 'react-redux';

import { setSortType } from '../../store/sortSlice';

import styles from './TabButton.module.scss';

const TabButton = () => {
  const dispatch = useDispatch();

  const handleSortChange = (type) => {
    dispatch(setSortType(type));
  };
  const curSort = useSelector((state) => state.sort.sortType);
  return (
    <div className={styles.tab}>
      <button
        className={`${styles.tab__button} ${curSort === 'price' ? styles.active : ''}`}
        onClick={() => handleSortChange('price')}
      >
        Самый дешевый
      </button>
      <button
        className={`${styles.tab__button} ${curSort === 'duration' ? styles.active : ''}`}
        onClick={() => handleSortChange('duration')}
      >
        Самый быстрый
      </button>
      <button
        className={`${styles.tab__button} ${curSort === 'optimal' ? styles.active : ''}`}
        onClick={() => handleSortChange('optimal')}
      >
        Оптимальный
      </button>
    </div>
  );
};
export default TabButton;
