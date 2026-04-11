import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getServerMe } from "../../../lib/api/serverApi";
import css from "./ProfilePage.module.css";

export const metadata: Metadata = {
  title: "Profile | NoteHub",
  description: "NoteHub profile page",
  openGraph: {
    title: "Profile | NoteHub",
    description: "NoteHub profile page",
    url: "https://notehub.app/profile",
    images: [
      { url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg" },
    ],
  },
};

export default async function Profile() {
  const user = await getServerMe();

  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <div className={css.header}>
          <h1 className={css.formTitle}>Profile Page</h1>
          <Link href="/profile/edit" className={css.editProfileButton}>
            Edit Profile
          </Link>
        </div>
        <div className={css.avatarWrapper}>
          <Image
            src={
              user.avatar ||
              "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"
            }
            alt="User Avatar"
            width={120}
            height={120}
            className={css.avatar}
          />
        </div>
        <div className={css.profileInfo}>
          <p>
            <span className={css.userName}>Username:</span>{" "}
            {user.username ?? "N/A"}
          </p>
          <p>
            <span className={css.userEmail}>Email:</span> {user.email ?? "N/A"}
          </p>
        </div>
      </div>
    </main>
  );
}
