import React from "react";
import css from "./Fees.module.scss";
import { motion } from "framer-motion";
import { staggerChildren, textVariant2 } from "../../utils/motion";

const Fees = () => {
  return (
    <motion.section
      className={`paddings ${css.wrapper}`}
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <a className="anchor" id="fees"></a>
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={` flexCenter ${css.fees}`}>
          <motion.div
            className={`flexCenter ${css.area}`}
            variants={textVariant2}
          >
            <div className={css.image}>
              <img
                src="../../images/luminiDeSeara.jpg"
                alt="AKSA Garden locatie petreceri"
              />
            </div>
            <div className={css.description}>
              <h3 className="primaryText">Program și tarife</h3>
              <p>
                Costul rezervării exclusive a locației este după cum urmează:
              </p>
              <ul className={css.feeList}>
                <li> Vineri: 1400 ron (5 ore)</li>
                <li> Sâmbătă, Duminică: 1700 ron (5 ore)</li>
                Intervale disponibile pentru zilele de week-end sunt: 10.00 –
                15.00 sau 16.00 – 21.00
              </ul>
              <p>* Intervalele pot fi modificate și prelungite la cerere</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Fees;
