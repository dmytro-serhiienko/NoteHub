"use client";
import css from "./Home.module.css";
import { RiQuillPenAiLine } from "react-icons/ri";

// FOR GSAP
import { useEffect } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

export default function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      //? Anim. 3 words
      gsap.from(`.${css.description}`, {
        opacity: 0,
        y: 30,
        duration: 5,
        delay: 0.3,
        ease: "power2.out",
        stagger: 0.7,
      });

      //? Anim. back
      gsap.from(`.${css.decor}`, {
        opacity: 0,
        scale: 0.8,
        duration: 5,
        delay: 0.5,
        ease: "power2.out",
      });

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

  return (
    <main className={css.main}>
      {/* DECOR ELEMENTS */}
      <div className={css.decorName}>
        <div className={css.decor1}>Insights</div>
        <div className={css.decor2}>Drafts</div>
        <div className={css.decor3}>Tasks</div>
        <div className={css.decor4}>Ideas</div>
        <div className={css.decor5}>Vault</div>
      </div>

      <div className={css.container}>
        <p className={css.decor}>HUB</p>
        <div className={css.upperWrap}>
          <h1 className={`${css.title}`}>
            <RiQuillPenAiLine className={css.icon} />
            NoteHub — Where Your Ideas Live
          </h1>
        </div>
        <div className={css.botWrap}>
          <span className={css.description}>Capture.</span>
          <span className={css.description}>Organize.</span>
          <span className={css.description}>Create.</span>
        </div>
      </div>
    </main>
  );
}
