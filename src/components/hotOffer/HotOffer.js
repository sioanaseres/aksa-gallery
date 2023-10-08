import React from "react";
import css from "./HotOffer.module.scss";
import { motion } from "framer-motion";
import { footerVariants, staggerContainer } from "../../utils/motion";

const HotOffer = () => {
  return (
    <motion.section
      className={css.wrapper}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <a className="anchor" id="hotOffer"></a>
      <div
        className={`paddings flexCenter innerWidth yPaddings ${css.container}`}
      >
        <motion.div className={css.hotOffer} variants={footerVariants}>
          <h3>Super veste!!!! 🎉Petrecere tematică în grădina noastră 🎃</h3>

          <div className={`paddings flexCenter  ${css.description}`}>
            <img src="../../images/halloween.jpg" alt="halloween offer" />
            <p className={css.text}>
              <b>Serbezi ziua copilului</b> tău în luna <b>octombrie</b>? Sau a
              altui membru al familiei tale? <br />
              <b>
                Cum ar fi să combini acest eveniment cu sărbătoarea de Halloween
                👻?
              </b>{" "}
              <br />
              Te asteptăm weekend-ul viitor, <b>în 14 sau 15 octombrie</b>, în
              grădina noastră, împreună cu familia și prietenii tăi, unde poți
              organiza o <b>petrecere aniversară cu tematica Halloween 🎃</b>.
              <br />
              Cu doar 900 RON, pe lângă exclusivitatea locației,
              <b> îți oferim </b>
              dovlecii pentru pictat și, în plus, un treasure hunt 🍭.
              <br /> Hai la activități în aer liber! 👨‍👩‍👧‍👧🧡
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HotOffer;
