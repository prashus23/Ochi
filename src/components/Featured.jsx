import { motion, useAnimation } from "framer-motion";

function Featured() {
  const fydeAnimation = useAnimation();
  const viseAnimation = useAnimation();

  const handleHover = (animation) => {
    animation.start({ y: "0" });
  };

  const handleHoverEnd = (animation) => {
    animation.start({ y: "100%" });
  };

  return (
    <div className="w-full py-10 bg-zinc-900">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-8xl font-["Neue_Montreal"]'>Featured Project</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          {/* FYDE Card */}
          <motion.div
            onHoverStart={() => handleHover(fydeAnimation)}
            onHoverEnd={() => handleHoverEnd(fydeAnimation)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex text-[#CDEA68] overflow-hidden left-full -translate-x-1/2 top-1/2 z-[9] leading-none tracking-tighter text-8xl">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={fydeAnimation}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <img
              className="w-full h-full"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt="FYDE Illustration"
            />
          </motion.div>

          {/* VISE Card */}
          <motion.div
            onHoverStart={() => handleHover(viseAnimation)}
            onHoverEnd={() => handleHoverEnd(viseAnimation)}
            className="cardcontainer relative w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex text-[#CDEA68] overflow-hidden right-full -translate-y-1/2 top-1/2 z-[9] leading-none tracking-tighter text-8xl">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={viseAnimation}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <img
              className="w-full h-full"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt="VISE Illustration"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
