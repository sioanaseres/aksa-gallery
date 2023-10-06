import React from "react";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from "../../utils/motion";

const Footer = () => {
  return (
    <motion.section
      className={`paddings ${css.wrapper}`}
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.div
        className={` flexCenter innerWidth yPaddings ${css.container}`}
        variants={footerVariants}
      >
        <h3 className="primaryText ">Cum ne poți contacta</h3>
        <div className={` flexCenter ${css.contactDetails}`}>
          <div className={css.left}>
            <div>
              <a href="tel:0721181760">0721.181.760</a>
            </div>
            <div>
              <a href="mailto:sioana.seres@gmail.com">sioana.seres@gmail.com</a>
            </div>
            <div>
              <p>Soșeaua București-Măgurele nr. 72V, sector 5, București</p>
            </div>
          </div>
          <div className={css.right}>
            <img src="../../images/map.png" alt="" />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
