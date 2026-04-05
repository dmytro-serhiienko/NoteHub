import css from "./LayoutNotes.module.css";

type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

export default function NotesLayout({ children, sidebar }: Props) {
  return (
    <section className={css.container}>
      <p className={css.decor}>HUB</p>
      <aside className={css.sidebar}>{sidebar}</aside>
      <div className={css.notesWrapper}>{children}</div>
    </section>
  );
}
