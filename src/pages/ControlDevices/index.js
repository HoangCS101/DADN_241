import classNames from "classnames/bind"
import styles from "./ControlDevices.module.scss"

const cx = classNames.bind(styles);
function ControlDevices() {
    return ( 
        <div classNames={cx('control-device')}>Control Devices</div>
     );
}

export default ControlDevices;