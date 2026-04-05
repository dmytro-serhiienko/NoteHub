import css from "@/app/notes/filter/@sidebar/SidebarNotes.module.css";
import Link from "next/link";
import { noteTags, NoteTag } from "@/types/note";

import {
  RiTodoLine,
  RiBriefcaseLine,
  RiUserLine,
  RiTeamLine,
  RiShoppingCartLine,
  RiFileListLine,
} from "react-icons/ri";

//об'єкт, де іконка
const tagIcons: Record<NoteTag | "All", React.ElementType> = {
  Todo: RiTodoLine,
  Work: RiBriefcaseLine,
  Personal: RiUserLine,
  Meeting: RiTeamLine,
  Shopping: RiShoppingCartLine,
  All: RiFileListLine,
};

export default function SidebarNotes() {
  return (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        <Link href={`/notes/filter/all`} className={css.menuLink}>
          <RiFileListLine size={20} className={css.icon} />
          All notes
        </Link>
      </li>

      {noteTags.map((noteTag) => {
        const Icon = tagIcons[noteTag];

        return (
          <li className={css.menuItem} key={noteTag}>
            <Link href={`/notes/filter/${noteTag}`} className={css.menuLink}>
              {Icon && <Icon size={20} className={css.icon} />}
              {noteTag}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
