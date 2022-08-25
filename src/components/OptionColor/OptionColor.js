import styles from "./OptionColor.module.scss";
import clsx from "clsx";


const OptionColor = props => {

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  return(
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {props.colors.map(item => 
          <li>
            <button type="button"  key={item} className={clsx(prepareColorClassName(item), item === props.currentColor && styles.active)}
             onClick={() => props.setCurrentColor(item)} />
          </li>
        )}
      </ul>
    </div>
  )
}

export default OptionColor;