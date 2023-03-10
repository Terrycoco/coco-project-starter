import styles from "./layout.module.css";

const Page = (props) => {
  return <div className={styles.page}>{props.children}</div>;
};

export default Page;
