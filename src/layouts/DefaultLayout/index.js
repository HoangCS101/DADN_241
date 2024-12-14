import classNames from "classnames/bind";
import styles from "./DefaultLayout.layout.scss";
import { Header, Footer, SideNav } from "../../components";

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div className={cx("default-layout")}>
        <div className={cx("sidenav")}>
          <SideNav />
        </div>
        <div className={cx("other-content")}>
          <div>{children}</div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DefaultLayout;
