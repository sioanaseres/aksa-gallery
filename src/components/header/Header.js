import React, { useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight, BiPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  const menuRef = useRef();
  useOutsideAlerter({ menuRef, setMenuOpened });

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>AKSĂ GARDEN</div>
        <ul
          ref={menuRef}
          className={` flexCenter ${css.menu}`}
          style={getMenuStyles(menuOpened)}
        >
          <li>
            <a href="#aboutUs">Despre noi</a>
          </li>
          <li>
            <a href="#galerie">Galerie foto</a>
          </li>

          <li>
            <a href="#reviews">Review-uri</a>
          </li>
          <li>
            <a href="#fees">Tarife</a>
          </li>
          <li className={` flexCenter ${css.phone}`}>
            <a href="tel:0721181760">0721.181.760</a>
            <a href="tel:0721181760">
              <BiPhoneCall size={"40px"} />
            </a>
          </li>
        </ul>
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened(!menuOpened)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
