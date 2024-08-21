import styles from "./Donation.module.css";

export default function Donation() {
  return (
    <section className={styles.donation}>
      <div className={`${styles.card1} ${styles.card}`}>
        <h2>equipe</h2>
        <p>
          Junte-se a nossa equipe <br />
          de voluntários e participe <br />
          ativamente em nossos <br />
          projetos e eventos.
        </p>
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
        <img src="/kids.png" alt="kids" />
      </div>

      <div className={`${styles.card2} ${styles.card}`}>
        <h2>doar</h2>
        <p>
          Sua contribuição financeira <br />
          ajuda a manter e expandir nossos <br />
          serviços. Qualquer quantia <br />é importante!
        </p>
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
        <img src="/balls.png" alt="balls" />
      </div>

      <div className={`${styles.card3} ${styles.card}`}>
        <h2>ame</h2>
        <p>
          Se você representa uma <br />
          empresa ou organização <br />
          e está interessado em <br />
          formar uma parceria, <br />
          entre em contato conosco.
        </p>
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
        <img src="/kidsBeach.png" alt="kids on beach" />
      </div>
    </section>
  );
}
