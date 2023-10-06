import React from "react";
import css from "./Review.module.scss";
import { motion } from "framer-motion";
import { footerVariants, staggerChildren } from "../../utils/motion";
import { sliderSettings, comments } from "../../utils/data";
import Slider from "react-slick";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const Reviews = () => {
  return (
    <motion.section
      className={`paddings ${css.wrapper}`}
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <a className="anchor" id="reviews"></a>
      <motion.div
        className={`yPaddings innerWidth ${css.container}`}
        variants={footerVariants}
      >
        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">Review-uri</span>
          <p></p>
        </div>
        <div className={`yPaddings ${css.comments}`}>
          <Slider className={css.slider} {...sliderSettings}>
            {comments.map((comment, i) => {
              return (
                <div className={`flexCenter ${css.comment}`} key={i}>
                  <BiSolidQuoteAltRight />
                  <p>{comment.comment}</p>
                  <div className={css.line}></div>

                  <div className={css.bio}>
                    <span>{comment.name}</span>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Reviews;
