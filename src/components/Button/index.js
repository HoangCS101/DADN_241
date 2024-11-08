import classNames from "classnames/bind";
import styles from "./Button.component.scss";

const cx = classNames.bind(styles)
function Button() {
    return ( 
        <div classNames={cx('button')}>Button component</div>
     );
}

export default Button;