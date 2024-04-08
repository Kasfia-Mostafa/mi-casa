import { motion } from "framer-motion";
import home from "../../../assets/home.jpg";
import Navbar from "../Navbar/Navbar";

const Banner = () => {
  const titleAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const titleAnimationChildren = {
    hidden: {
      y: -100,
    },
    show: {
      y: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const imgAnimation = {
    hidden: {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    },
    show: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        delay: 2.2,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const explainAnimation = {
    hidden: {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    },
    show: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        delay: 2.8,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="h-screen  relative overflow-hidden">
      <img
        src={home}
        className="absolute w-full h-full blur-sm object-cover"
        alt="home"
        />

        <Navbar></Navbar>
      <section className="h-[calc(100vh-80px)] flex flex-col items-center relative">
        <div className="absolute left-[200px] top-[200px] h-[100px] flex items-center overflow-hidden">
          <motion.div
            variants={titleAnimation}
            initial="hidden"
            animate="show"
            className="flex text-8xl font-San font-bold p-6 mb-2 bg-slate-50 text-red-800 drop-shadow-2xl z-50"
          >
            {Array.from("Mi-CASA").map((letter, idx) => (
              <motion.span key={idx} variants={titleAnimationChildren}>
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
        <div className="w-[800px] m-auto">
          <motion.img
            src={home}
            alt="art"
            className="object-cover"
            variants={imgAnimation}
            initial="hidden"
            animate="show"
          />
        </div>
        <motion.div
          className="bg-white p-4 w-[300px] absolute bottom-[150px] right-[200px] drop-shadow-lg z-50"
          variants={explainAnimation}
          initial="hidden"
          animate="show"
        >
          <p className="text-red-800 text-sm text-justify font-DM">
            "Welcome to our real estate platform! Discover properties, connect
            with agents, and explore insights for seamless property
            transactions. Start your search today!"{" "}
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Banner;
