import React from "react";
import css from "./Offer.module.scss";
import { WhatDoWeOffer, projectFeatures } from "../../utils/data";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../../utils/motion";

const Offer = () => {
  return (
    <motion.section
      className={css.wrapper}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <a className="anchor" id="aboutUs"></a>
      <div
        className={`paddings flexCenter innerWidth yPaddings ${css.container}`}
      >
        <div className={css.leftSide}>
          {projectFeatures.map((elem, i) => {
            return (
              <motion.div
                variants={fadeIn("right", "tween", (i + 1) * 0.2, 1)}
                className={css.feature}
                key={i}
              >
                <div className="flexCenter" style={{ background: elem.bg }}>
                  <elem.icon size={25} color="white" />
                </div>
                <div>
                  <span>{elem.name}</span>
                  <span className="secondaryText">{elem.features}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
        <motion.div className={css.rightSide} variants={textVariant(0.5)}>
          <span className="primaryText">Povestea noastră</span>

          {WhatDoWeOffer.map((paragraph, i) => {
            return (
              <span key={i} className={css.story}>
                {paragraph}
              </span>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Offer;
