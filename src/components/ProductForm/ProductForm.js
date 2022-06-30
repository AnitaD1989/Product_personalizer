import styles from "./ProductForm.module.scss";

import Button from "../Button/Button";
import OptionSize from "../OptionSize/OptionSize";
import OptionColor from "../OptionColor/OptionColor";

const ProductForm = props => {
  return(
    <form>
      <OptionSize 
        sizes={props.sizes}
        currentSize={props.currentSize}
        setCurrentSize={props.setCurrentSize}
      />
      <OptionColor 
        colors={props.colors}
        currentColor={props.currentColor}
        setCurrentColor={props.setCurrentColor}
      />
      <Button
        className={styles.button}
        handleSubmit={props.handleSubmit}>
        <span className="fa fa-shopping-cart" />
      </Button>

    </form>

  );
};



export default ProductForm;

