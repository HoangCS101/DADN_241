import classNames from "classnames/bind"
import styles from "./ControlDevices.module.scss"
import { LayoutNoSideNav } from "../../layouts";
const cx = classNames.bind(styles);
function ContentControlDevices(){
    return (
        <div>Content in Control Devices Page</div>
    )
}
function ControlDevices() {
    return ( 
        <LayoutNoSideNav>
            <ContentControlDevices />
        </LayoutNoSideNav>
     );
}

export default ControlDevices;