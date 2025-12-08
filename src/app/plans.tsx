"use client";
import styles from "@/app/styles/plans.module.scss";
import { useState } from "react";
import { LuHandCoins } from "react-icons/lu";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

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
        <h2>choose your donation</h2>
        <button onClick={togglePlan}>
          {planState === "monthly" ? "monthly" : "one-off"}
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
