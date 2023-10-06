import React from "react";
import css from "./Hero.module.scss";
import { PiFlowerLight } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";

const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        className={`innerWidth ${css.container}`}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className={css.upperElements}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText"
          >
            Hey, bun venit!{" "}
          </motion.span>
          <motion.span
            variants={fadeIn("left", "tween", 0.4, 1)}
            className="primaryText"
          >
            AKSĂ{" "}
          </motion.span>
        </div>

        <motion.div
          className={css.mainImage}
          variants={fadeIn("up", "tween", 0.3, 1)}
        >
          <img src="./images/logo.jpg" alt="AKSA Garden " />
        </motion.div>

        <a className={css.email} href="mailto:sioana.seres@gmail.com">
          sioana.seres@gmail.com
        </a>
        <div className={css.lowerElements}>
          <motion.div
            className={css.name}
            variants={fadeIn("right", "tween", 0.3, 1)}
          >
            <PiFlowerLight size={40} />
            <span>Grădină Evenimente</span>
          </motion.div>
          <div className={css.description}>
            <motion.span variants={fadeIn("left", "tween", 0.5, 1)}>
              AKSĂ este un loc minunat, special creat pentru <br /> a găzdui
              petreceri de neuitat pentru copii
            </motion.span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
