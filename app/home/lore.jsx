import Image from "next/image";
import style from "./lore.module.scss";

const Lore = () => {
  return (
    <div className={style.contentlore}>
      <div className={style.avatar}>
        <Image src={"/image.png"} alt="Yo" width={240} height={240} />
        <h1 className={style.title}>mocilnik.ux</h1>
      </div>
      <p className={style.lorem}>
        3 Años como Diseñador UX/UI apasionado por transformar ideas en
        soluciones que conectan con las necesidades reales del usuario. Me
        especializo en el diseño centrado en el usuario (DCU). Mi objetivo es
        siempre aportar valor y hacer que cada interacción sea memorable.
      </p>
    </div>
  );
};

export default Lore;
