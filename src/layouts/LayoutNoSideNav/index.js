import classNames from "classnames/bind";
import styles from "./LayoutNoSideNav.layout.scss";
import { Header, Footer } from "../../components";

const cx = classNames.bind(styles);
function LayoutNoSideNav({children}) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default LayoutNoSideNav;
