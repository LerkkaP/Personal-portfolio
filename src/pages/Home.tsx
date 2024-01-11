import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const Home = () => {
  const baseText: string = "Hi! I'm Erik Peteri.";
  const secondText: string = "Welcome to my website!";
  const countBase = useMotionValue(0);
  const countSecond = useMotionValue(0);

  const roundedBase = useTransform(countBase, (latest) => Math.round(latest));
  const roundedSecond = useTransform(countSecond, (latest) =>
    Math.round(latest)
  );

  const displayText = useTransform(roundedBase, (latest) =>
    baseText.slice(0, latest)
  );

  const displayTextTwo = useTransform(roundedSecond, (latest) =>
    secondText.slice(0, latest)
  );

  useEffect(() => {
    const controlsBase = animate(countBase, baseText.length, {
      type: "tween",
      duration: 3,
      ease: "easeInOut",
    }).then(() => {
      animate(countSecond, secondText.length, {
        type: "tween",
        duration: 3,
        ease: "easeInOut",
      });
    });

    return () => {
      controlsBase.stop();
      controlsBase.then((promise) => promise.stop());
    };
  }, []);

  return (
    <div className="h-screen flex items-center justify-center text-white">
      <span className="absolute top-1/4 text-4xl">
        <motion.span>{displayText}</motion.span>
        <br />
        <motion.span>{displayTextTwo}</motion.span>
      </span>
    </div>
  );
};

export default Home;
