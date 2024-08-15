import styles from "./table.module.css";
import Image from "next/image";
import Pagination from "@/components/table/children/pagination";

const tableArr = [
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phone: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "Active",
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "Inactive",
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phone: "(406) 555-0120",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "Inactive",
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phone: "(205) 555-0100",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "Active",
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phone: "(406) 555-0120",
    email: "jerome@google.com",
    country: "Réunion",
    status: "Active",
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phone: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "Active",
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phone: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "Active",
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phone: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "Inactive",
  },
];

const Table = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top_wrapper}>
        <div className={styles.top_left}>
          <h2>All Customers</h2>
          <span>Active Members</span>
        </div>
        <div className={styles.search}>
          <Image src="/icons/search.svg" alt="search" width={24} height={24} />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className={styles.table}>
        <div className={styles.table_header}>
          <div>Name</div>
          <div>Company</div>
          <div>Phone</div>
          <div>Email</div>
          <div>Country</div>
          <div>Status</div>
        </div>
        {tableArr.map(({ name, company, phone, email, country, status }) => (
          <div key={name} className={styles.table_row}>
            <div>{name}</div>
            <div>{company}</div>
            <div>{phone}</div>
            <div>{email}</div>
            <div>{country}</div>
            <div>
              <div
                className={
                  status === "Active"
                    ? styles.status_Active
                    : styles.status_Inactive
                }
              >
                {status}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Pagination currentPage={1} max={40} />
    </div>
  );
};

export default Table;
