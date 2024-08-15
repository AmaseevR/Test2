import Image from "next/image";
import styles from "./../menu.module.css";

const User = () => {
  return (
    <div className={styles.user}>
      <Image src="/user.png" alt="user photo" width={42} height={42} />
      <div className={styles.user_name_wrapper}>
        <span className={styles.user_name}>Evano</span>
        <span className={styles.user_role}>Project Manager</span>
      </div>
    </div>
  );
};

export default User;
