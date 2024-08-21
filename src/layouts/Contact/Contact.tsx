import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <h2>Fale conosco</h2>
      <div className={styles.info}>
        <p>
          Junte-se a nossa equipe <br />
          de voluntários e participe <br />
          ativamente em nossos <br />
          projetos e eventos.
        </p>

        <a href="">
          Whatsapp
          <svg
            width="2.4vw"
            height="2.6vw"
            viewBox="0 0 46 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.0668 11.7514C45.4817 9.58156 44.0591 7.48622 41.8892 7.07131L6.52987 0.30996C4.36005 -0.10495 2.26471 1.31769 1.8498 3.48752C1.43489 5.65734 2.85753 7.75269 5.02735 8.1676L36.4579 14.1777L30.4478 45.6082C30.0329 47.778 31.4555 49.8734 33.6254 50.2883C35.7952 50.7032 37.8905 49.2806 38.3054 47.1107L45.0668 11.7514ZM5.24687 40.2034L43.3848 14.3094L38.8911 7.69081L0.753128 33.5847L5.24687 40.2034Z"
              fill="#3F3EC0"
            />
          </svg>
        </a>
      </div>

      <div className={styles.infoContact}>
        <p>(88) 99207-0076</p>
        <p>amavicosadoceara@gmail.com</p>
      </div>
      <img src="/mail.png" alt="mail logo" />
    </section>
  );
}
