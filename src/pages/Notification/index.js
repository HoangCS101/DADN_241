import classNames from "classnames/bind"
import styles from "./Notification.module.scss"
import { DefaultLayout } from "..";

const cx = classNames.bind(styles);
function ContentNotification() {
    return ( 
        <div>Content in Notification Pages</div>
     );
}

function Notification() {
    return ( 
        <DefaultLayout>
            <ContentNotification />
        </DefaultLayout>
     );
}

export default Notification;