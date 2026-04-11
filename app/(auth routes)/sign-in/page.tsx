"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/api/clientApi";
import { useAuthStore } from "@/lib/store/authStore";
import css from "./SignInPage.module.css";
import { gsap } from "gsap";
import { RiQuillPenAiLine } from "react-icons/ri";

export default function SignIn() {
  const router = useRouter();
  const [error, setError] = useState("");
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const ctx = gsap.context(() => {
      //? Anim. 5 elements
      const timeLine = gsap.timeline();
      timeLine
        .from(`.${css.decor1}`, {
          opacity: 0,
          x: -50,
          duration: 5,
          ease: "power2.out",
        })
        .from(
          `.${css.decor2}`,
          {
            opacity: 0,
            x: 50,
            duration: 5,
            ease: "power2.out",
          },
          "<0.3",
        )
        .from(
          `.${css.decor3}`,
          {
            opacity: 0,
            x: -50,
            duration: 5,
            ease: "power2.out",
          },
          "<0.4",
        )
        .from(
          `.${css.decor4}`,
          {
            opacity: 0,
            x: 50,
            duration: 5,
            ease: "power2.out",
          },
          "<0.5",
        )
        .from(
          `.${css.decor5}`,
          {
            opacity: 0,
            x: -50,
            duration: 5,
            ease: "power2.out",
          },
          "<0.6",
        );
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (formData: FormData) => {
    try {
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      const res = await login({ email, password });
      if (res) {
        setUser(res);
        router.push("/profile");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Invalid email or password";
      setError(message);
    }
  };

  return (
    <main className={css.mainContent}>
      {/* DECOR ELEMENTS */}
      <div className={css.decorName}>
        <div className={css.decor1}>Log in</div>
        <div className={css.decor2}>Log on</div>
        <div className={css.decor3}>Access</div>
        <div className={css.decor4}>Enter</div>
        <div className={css.decor5}>Authenticate</div>
      </div>

      <form className={css.form} action={handleSubmit}>
        <span className={css.formLogoWrapper}>
          <RiQuillPenAiLine className={css.formLogo} />
        </span>
        <h1 className={css.formTitle}>Sign in</h1>
        <div className={css.formGroup}>
          <label className={css.formLabel} htmlFor="email">
            Email{" "}
          </label>

          <input
            id="email"
            type="email"
            name="email"
            className={css.input}
            required
          />
        </div>
        <div className={css.formGroup}>
          <label className={css.formLabel} htmlFor="password">
            Password{" "}
          </label>

          <input
            id="password"
            type="password"
            name="password"
            className={css.input}
            required
          />
        </div>
        <div className={css.actions}>
          <button type="submit" className={css.submitButton}>
            Log in
          </button>
        </div>
        {error && <p className={css.error}>{error}</p>}
      </form>
    </main>
  );
}
