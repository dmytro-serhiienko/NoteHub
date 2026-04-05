"use client";

import Link from "next/link";
import css from "./Header.module.css";
import { RiQuillPenAiLine } from "react-icons/ri";

import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoon } from "react-icons/lu";
import { useThemeStore } from "@/lib/themeStore";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <header className={css.header}>
      <Link className={css.logo} href="/" aria-label="Home">
        <RiQuillPenAiLine className={css.icon} />
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          {/* GIT */}
          <li>
            <Link
              href="https://github.com/dmytro-serhiienko"
              target="_blank"
              aria-label="GitHub"
            >
              <FaGithub className={css.icons} />
            </Link>
          </li>

          {/* THEME */}
          <li>
            <button
              type="button"
              onClick={toggleTheme}
              className={css.icons}
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <LuMoon className={css.iconMoon} />
              ) : (
                <MdOutlineWbSunny className={css.iconSun} />
              )}
            </button>
          </li>

          {/* NAVIGATION */}
          <li>
            <Link className={css.navLink} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={css.navLink} href="/notes/filter/all">
              Notes
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
