"use client";
import styles from "@/app/styles/plans.module.scss";
import { useState } from "react";
import { FaDonate } from "react-icons/fa";

import { LuHandCoins } from "react-icons/lu";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";
export default function Plans() {
  const plans = [
    { name: "paws", type: "monthly", amount: 2 },
    { name: "tail", type: "monthly", amount: 5 },
    // { name: "purr", type: "monthly", amount: 10 },
    { name: "premium catnip", type: "monthly", amount: 20 },
    { name: "£10", type: "one-off", amount: 10 },
    { name: "£50", type: "one-off", amount: 50 },
  ];
  const [planState, setPlan] = useState("monthly");
  const togglePlan = () => {
    if (planState === "monthly") {
      setPlan("one-off");
    } else setPlan("monthly");
  };
  return (
    <section className={styles.plans}>
      <article className={styles.copy}>
        <ul className={styles.thumbnails}>
          <li>
            <Image
              src="/cat_1.png"
              fill
              alt="cat"
              sizes="(max-width:1024px) 50px"
            />
          </li>
          <li>
            <Image
              src="/cat_2.png"
              fill
              alt="cat"
              sizes="(max-width:1024px) 50px"
            />
          </li>
          <li>
            <Image
              src="/cat_3.png"
              fill
              alt="cat"
              sizes="(max-width:1024px) 50px"
            />
          </li>
        </ul>
        <span>they'll thank you</span>
        <h2>choose your donation</h2>
        <button
          onClick={togglePlan}
          className={planState === "monthly" ? styles.monthly : styles.oneOff}
        >
          {planState === "monthly" ? (
            <>
              <FaDonate /> monthly
            </>
          ) : (
            <>
              <FaDonate /> one-off
            </>
          )}
        </button>
      </article>
      <article>
        {plans.map((plan, index) => {
          const { name, amount, type } = plan;
          return (
            <div
              className={`${styles.card} ${
                type === planState ? "" : styles.hidden
              }`}
              key={`plan-${index}`}
            >
              <h3>{name}</h3>
              <p>Can you spare £{amount}?</p>
              <span>
                <LuHandCoins /> Every penny helps.{" "}
              </span>
            </div>
          );
        })}
      </article>
      <article className={styles.animation}>
        <DotLottieReact src="./cat_animation.json" loop autoplay speed={0.5} />
      </article>
    </section>
  );
}
