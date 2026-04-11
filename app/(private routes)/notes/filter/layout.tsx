import type { ReactNode } from "react";
import css from "./LayoutNotes.module.css";

interface Props {
  children: ReactNode;
  sidebar: ReactNode;
}

export default function NotesLayout({ children, sidebar }: Props) {
  return (
    <section className={css.container}>
      <p className={css.decor}>HUB</p>
      <aside className={css.sidebar}>{sidebar}</aside>
      <div className={css.notesWrapper}>{children}</div>
    </section>
  );
}
