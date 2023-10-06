import React from "react";
import css from "./Gallery.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../../utils/motion";

const Gallery = () => {
  return (
    <motion.section
      className={`paddings ${css.wrapper}`}
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <a className="anchor" id="galerie"></a>
      <div className={` innerWidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">Galerie foto</span>
        </div>
        <div className={` flexCenter ${css.showCase}`}>
          <div className={css.imgContainer}>
            <motion.img
              src="../../images/balonInima.jpg"
              alt="imagine galerie foto AKSA Garden"
              variants={fadeIn("up", "tween", 0.5, 0.6)}
            />
          </div>
          <div className={css.imgContainer}>
            <motion.img
              src="../../images/floriDeToamna.jpg"
              alt="imagine galerie foto AKSA Garden"
              variants={fadeIn("up", "tween", 0.5, 0.6)}
            />
          </div>
          <div className={css.imgContainer}>
            <motion.img
              src="../../images/harryPotter.jpg"
              alt="imagine galerie foto AKSA Garden"
              variants={fadeIn("up", "tween", 0.5, 0.6)}
            />
          </div>
          <div className={css.imgContainer}>
            <motion.img
              src="../../images/poolParty2.jpg"
              alt="imagine galerie foto AKSA Garden"
              variants={fadeIn("up", "tween", 0.5, 0.6)}
            />
          </div>
          <div className={css.imgContainer}>
            <motion.img
              src="../../images/locDeRelaxare.jpg"
              alt="imagine galerie foto AKSA Garden"
              variants={fadeIn("up", "tween", 0.6, 0.6)}
              className={css.maxHeight}
            />
          </div>
          <div className={css.imgContainer}>
            <motion.img
              src="../../images/luminiDeSeara.jpg"
              alt="imagine galerie foto AKSA Garden"
              variants={fadeIn("up", "tween", 0.6, 0.6)}
              className={css.maxHeight}
            />
          </div>
          <div className={css.imgContainer}>
            <motion.img
              src="../../images/imaginePiscina.jpg"
              alt="imagine galerie foto AKSA Garden"
              variants={fadeIn("up", "tween", 0.6, 0.6)}
              className={css.maxHeight}
            />
          </div>
          <div className={css.imgContainer}>
            <motion.img
              src="../../images/party1.jpg"
              alt="imagine galerie foto AKSA Garden"
              variants={fadeIn("up", "tween", 0.6, 0.6)}
              className={css.maxHeight}
            />
          </div>
          <div className={css.imgContainer}>
            <motion.img
              src="../../images/masa1.jpg"
              alt="imagine galerie foto AKSA Garden"
              variants={fadeIn("up", "tween", 0.7, 0.6)}
            />
          </div>
          <div className={css.imgContainer}>
            <motion.img
              src="../../images/masaFoisor.jpg"
              alt="imagine galerie foto AKSA Garden"
              variants={fadeIn("up", "tween", 0.7, 0.6)}
            />
          </div>
          <div className={css.imgContainer}>
            <motion.img
              src="../../images/bufet1.jpg"
              alt="imagine galerie foto AKSA Garden"
              variants={fadeIn("up", "tween", 0.7, 0.6)}
            />
          </div>
          <div className={css.imgContainer}>
            <motion.img
              src="../../images/foisorCopii.jpg"
              alt="imagine galerie foto AKSA Garden"
              variants={fadeIn("up", "tween", 0.7, 0.6)}
            />
          </div>
          <div className={css.imgContainer}>
            <motion.img
              src="../../images/bucurie.jpg"
              alt="imagine galerie foto AKSA Garden"
              variants={fadeIn("up", "tween", 0.8, 0.6)}
              className={css.maxHeight}
            />
          </div>
          <div className={css.imgContainer}>
            <motion.img
              src="../../images/locDeJoaca.jpg"
              alt="imagine galerie foto AKSA Garden"
              variants={fadeIn("up", "tween", 0.8, 0.6)}
              className={css.maxHeight}
            />
          </div>
          <div className={css.imgContainer}>
            <motion.img
              src="../../images/dupaAmiaza.jpg"
              alt="imagine galerie foto AKSA Garden"
              variants={fadeIn("up", "tween", 0.8, 0.6)}
              className={css.maxHeight}
            />
          </div>
          <div className={css.imgContainer}>
            <motion.img
              src="../../images/piscinaIncalzita.jpg"
              alt="imagine galerie foto AKSA Garden"
              variants={fadeIn("up", "tween", 0.8, 0.6)}
              className={css.maxHeight}
            />
          </div>
          <div className={css.imgContainer}>
            <motion.img
              src="../../images/gratar.jpg"
              alt="imagine galerie foto AKSA Garden"
              variants={fadeIn("up", "tween", 0.9, 0.6)}
            />
          </div>
          <div className={css.imgContainer}>
            <motion.img
              src="../../images/smochin.jpg"
              alt="imagine galerie foto AKSA Garden"
              variants={fadeIn("up", "tween", 0.9, 0.6)}
            />
          </div>
          <div className={css.imgContainer}>
            <motion.img
              src="../../images/flori.jpg"
              alt="imagine galerie foto AKSA Garden"
              variants={fadeIn("up", "tween", 0.9, 0.6)}
            />
          </div>
          <div className={css.imgContainer}>
            <motion.img
              src="../../images/poolParty.jpg"
              alt="imagine galerie foto AKSA Garden"
              variants={fadeIn("up", "tween", 0.9, 0.6)}
            />
          </div>
          <div className={css.imgContainer}>
            <motion.img
              src="../../images/bufet.jpg"
              alt="imagine galerie foto AKSA Garden"
              variants={fadeIn("up", "tween", 0.1, 0.6)}
              className={css.maxHeight}
            />
          </div>
          <div className={css.imgContainer}>
            <motion.img
              src="../../images/party3.jpg"
              alt="imagine galerie foto AKSA Garden"
              variants={fadeIn("up", "tween", 0.1, 0.6)}
              className={css.maxHeight}
            />
          </div>
          <div className={css.imgContainer}>
            <motion.img
              src="../../images/imagineCurte.jpg"
              alt="imagine galerie foto AKSA Garden"
              variants={fadeIn("up", "tween", 0.1, 0.6)}
              className={css.maxHeight}
            />
          </div>
          <div className={css.imgContainer}>
            <motion.img
              src="../../images/jocuri.jpg"
              alt="imagine galerie foto AKSA Garden"
              variants={fadeIn("up", "tween", 0.1, 0.6)}
              className={css.maxHeight}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Gallery;
