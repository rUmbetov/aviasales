import styleAside from './FilterAside.module.scss';

const FilterAside = () => {
  console.log(styleAside.customCheckbox);
  return (
    <div className={styleAside.filterAside}>
      <h3 className={styleAside.filterAside__title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>

      <label className={styleAside.filterAside__choice}>
        <input type="checkbox" name="stops" value="all" />
        <span className={styleAside.customCheckbox}></span>
        Все
      </label>

      <label className={styleAside.filterAside__choice}>
        <input type="checkbox" name="stops" value="all" />
        <span className={styleAside.customCheckbox}></span>
        Все
      </label>

      <label className={styleAside.filterAside__choice}>
        <input type="checkbox" name="stops" value="all" />
        <span className={styleAside.customCheckbox}></span>
        Все
      </label>

      <label className={styleAside.filterAside__choice}>
        <input type="checkbox" name="stops" value="all" />
        <span className={styleAside.customCheckbox}></span>
        Все
      </label>

      <label className={styleAside.filterAside__choice}>
        <input type="checkbox" name="stops" value="all" />
        <span className={styleAside.customCheckbox}></span>
        Все
      </label>
    </div>
  );
};
export default FilterAside;
