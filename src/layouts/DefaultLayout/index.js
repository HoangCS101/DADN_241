import classNames from "classnames/bind";
import styles from "./DefaultLayout.layout.scss";
import { Header, Footer, SideNav } from "../../components";

const cx = classNames.bind(styles);
function DefaultLayout({children}) {
  return (
    <>
      <Header />
      <SideNav />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default DefaultLayout;
