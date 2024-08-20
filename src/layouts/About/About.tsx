import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.image}></div>
      <img src="/heart.png" alt="heart 3d icon" />
      <div className={styles.text}>
        <p>
          Associação de Mães e <br /> Amigos dos Autistas <br /> em Viçosa do
          Ceará
        </p>
        <p>
          A Associação de Mães <br /> e Amigos dos Autistas <br /> e Pessoas com
          Deficiências <br />
          de Viçosa do Ceará (AMA)
        </p>
        <p>
          somos muito mais que <br /> um grupo sem fins lucrativos. <br /> Somos uma
          comunidade dedicada <br /> a oferecer apoio, orientação e <br /> acolhimento
          terapêutico para <br /> autistas, pessoas com deficiências <br /> e suas famílias.
        </p>
      </div>
    </section>
  );
}
