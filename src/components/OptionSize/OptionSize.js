import styles from "./OptionSize.module.scss";
import PropTypes from "prop-types";

import clsx from "clsx";

const OptionSize = props => {  
  return(
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        
        {props.sizes.map(item =>
          <li key={item.name}>
            <button type="button" onClick={() => props.setCurrentSize(item.name)} className={clsx( item.name) === props.currentSize && styles.active}>{item.name}</button>
          </li>
        )}
      </ul>
    </div>
  )
}

OptionSize.propTypes = {
  currentSize: PropTypes.string
}

export default OptionSize;