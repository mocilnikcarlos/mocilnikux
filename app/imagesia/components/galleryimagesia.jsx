"use client";

import Image from "next/image";
import styles from "./galleryimagesia.module.scss";

const images = [
  "/Leonardo_Lightning_XL_Modelo_do_Instagram_cabelos_compridos_na_2.jpg",
  "/Cinematic_Kino_retrato_en_pintura_de_un_gato_serio_elegante_y_3.jpg",
  "/Default_Closeup_portrait_of_a_woman_with_a_light_skin_tone_dar_1.jpg",
  "/Leonardo_Kino_XL_Image_is_a_highresolution_closeup_photograph_2.jpg",
  "/Default_Closeup_portrait_of_a_woman_with_mediumlength_black_ha_3.jpg",
  "/Leonardo_Kino_XL_Digital_fantasy_artwork_featuring_a_dramatic_3.jpg",
  "/Default_Hombre_delivery_de_logstica_en_auto_mirando_de_frente_1.jpg",
  "/Default_Hombre_operador_de_logistica_con_casco_amarillo_mirand_2.jpg",
  "/Leonardo_Kino_XL_Digital_artwork_featuring_a_fierce_dragon_wit_2.jpg",
  "/Absolute_Reality_v16_Ultra_detailed_abstract_art_photography_o_3.jpg",
  "/Absolute_Reality_v16_Ultra_detailed_abstract_art_photo_of_beau_0.jpg",
  "/Default_ultra_detailed_artistic_abstract_photography_of_a_beau_1_4f966132-1527-4de6-9fca-06df75a82feb_1.jpg",
  "/DreamShaper_v5_editorial_photograph_of_a_20_yo_woman_from_the_3.jpg",
];

const GalleryImageIa = () => {
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <section className={styles.gallery}>
      {images.map((src, index) => (
        <div key={index} className={styles.item}>
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            layout="responsive"
            width={1}
            height={1}
            onContextMenu={handleContextMenu}
          />
        </div>
      ))}
    </section>
  );
};

export default GalleryImageIa;
