import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <nav style={{ margin: "10px" }} className={styles["menu-container"]}>
      {menuItems.map((route) => (
        <ActiveLink key={route.text} text={route.text} href={route.href} />
      ))}
    </nav>
  );
};
