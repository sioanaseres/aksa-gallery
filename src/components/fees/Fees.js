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
                <li> Tarife <b>Iunie, Septembrie:</b></li>
                <li> Vineri: 1400 ron </li>
                <li> Sâmbătă, Duminică: 1700 ron </li>
                <li> Tarife <b>Iulie, August:</b></li>
                <li> Vineri: 1500 ron </li>
                <li> Sâmbătă, Duminică: 2000 ron </li>
                Intervale disponibile sunt: 
                  <ul >
                    <li>pentru Vineri : 12-19</li>
                    <li>pentru zilele de week-end : 11-19</li>
                  </ul>
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
