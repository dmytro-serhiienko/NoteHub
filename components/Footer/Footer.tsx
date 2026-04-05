import Link from "next/link";
import css from "./Footer.module.css";

import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <div className={css.leftWrap}>
          <p className={css.p}>
            © {new Date().getFullYear()} NoteHub. All rights reserved.
          </p>
        </div>
        <div className={css.rightWrap}>
          <Link href="mailto:conneciones@gmail.com" className={css.iconFooter}>
            <IoMdMail className={css.icon} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/dmytro-serhienko/"
            className={css.iconFooter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={css.icon} />
          </Link>
          <Link
            href="https://github.com/dmytro-serhiienko"
            className={css.iconFooter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className={css.icon} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
