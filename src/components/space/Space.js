import React from "react";
import css from "./Space.module.scss";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerChildren,
  textVariant2,
  zoomIn,
} from "../../utils/motion";
import { Amenities } from "../../utils/data";

const Space = () => {
  return (
    <motion.section
      className={`paddings ${css.wrapper}`}
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={` flexCenter ${css.amenities}`}>
          {Amenities.map((item, i) => {
            return (
              <motion.div
                className={`flexCenter ${css.area}`}
                variants={textVariant2}
                key={i}
              >
                <div className={css.description}>
                  <h3>{item.place}</h3>
                  <p>{item.description}</p>
                </div>
                <div className={css.image}>
                  <img src={item.image} alt={item.place} />
                </div>
              </motion.div>
            );
          })}
          <motion.div className={css.progressbar} variants={zoomIn(1, 1)}>
            <motion.div
              className={css.line}
              variants={fadeIn("down", "tween", 2, 1.5)}
            ></motion.div>
            <div>
              <div
                className={css.circle}
                style={{ background: "#286F6C" }}
              ></div>
            </div>
            <div>
              <div
                className={css.circle}
                style={{ background: "#F2704E" }}
              ></div>
            </div>
            <div>
              <div
                className={css.circle}
                style={{ background: "#EEC048" }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Space;
