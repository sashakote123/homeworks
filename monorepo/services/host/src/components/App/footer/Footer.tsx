import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>MyShop123.ru</div>
      <div className={styles.footerRight}>
        <a className={styles.contact} href="tel:+7(987)65432">
          +7(987)654-32
        </a>
        <a className={styles.contact} href="mailto:mail@mail.com">
          mail@mail.com
        </a>
      </div>
    </footer>
  );
};
export default Footer;
