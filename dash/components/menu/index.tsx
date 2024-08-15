import styles from "./menu.module.css";
import Image from "next/image";
import MenuItem from "@/components/menu/children/menu-item";
import User from "@/components/menu/children/user";
import Key from "@/public/menu/key";
import Prod from "@/public/menu/prod";
import Cust from "@/public/menu/cust";
import Inc from "@/public/menu/inc";
import Prom from "@/public/menu/prom";
import Help from "@/public/menu/help";

const menuItems = [
  { text: "Dashboard", icon: <Key /> },
  { text: "Product", icon: <Prod /> },
  { text: "Customers", icon: <Cust /> },
  { text: "Income", icon: <Inc /> },
  { text: "Promote", icon: <Prom /> },
  { text: "Help", icon: <Help /> },
];
const Menu = () => {
  return (
    <div className={styles.wrapper}>
      <Image src="/logo.svg" alt="Logo" width={217} height={39} priority />
      <div className={styles.items_wrapper}>
        {menuItems.map(({ text, icon }) => (
          <MenuItem key={text} text={text} icon={icon} />
        ))}
      </div>
      <User />
    </div>
  );
};

export default Menu;
