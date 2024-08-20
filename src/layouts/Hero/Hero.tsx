import Title from "../../components/Title";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <img className={styles.imageHero} src="/ft1.jpg" alt="foto ama" />
      <Title text="ama" color="#3F3EC0"/>
      <p>
        Associação de Mães e <br /> Amigos dos Autistas <br /> em Viçosa do
        Ceará
      </p>
    </section>
  );
}
