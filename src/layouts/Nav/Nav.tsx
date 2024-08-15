import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Menu />
      </nav>
      <img className={styles.logo} src="/logo.jpg" alt="logo ama" />
    </header>
  );
}

function Menu() {
  return (
    <menu className={styles.menu}>
      <li>Contato</li>
      <li>Sobre</li>
      <li>Doe</li>
    </menu>
  );
}
