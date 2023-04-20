import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto flex flex-col`}>
      <div
        className={`absolute inset-0 top-[100px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Gaurav</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100  text-[10px]`}>I am a frontend web developer <br className='sm:block hidden'/>who is passionate about creating visually appealing and interactive user interfaces that deliver seamless user experiences.<br className='sm:block hidden'/><span className="hidden xl:block">I have a strong background in web design, user interface design, and user experience design, and use that knowledge to create visually appealing and intuitive front-end experiences.</span></p>
          
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute -translate-y-5 xs:bottom-10 bottom-32 w-full flex flex-col gap-7  justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl  border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
        <div className={`${styles.heroSubText} text-white`}>Tap To Know More</div>
      </div>
    </section>
  );
};

export default Hero;
