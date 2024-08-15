import styles from "./page.module.css";
import Menu from "@/components/menu";
import Table from "@/components/table";

const Home = () => {
  return (
    <main className={styles.main}>
      <h2>Hello Evano 👋🏼,</h2>

      <Menu />
      <Table />
    </main>
  );
};

export default Home;
