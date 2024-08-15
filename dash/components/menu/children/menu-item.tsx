import styles from "./../menu.module.css";
import Arrow from "@/public/menu/arrow";

const MenuItem = ({ text, icon }) => {
  return (
    <div
      className={`${styles.item} ${text === "Customers" ? styles.item_active : ""}`}
    >
      {icon}
      <span>{text}</span>
      <Arrow />
    </div>
  );
};

export default MenuItem;
