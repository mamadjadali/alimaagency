import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import './globals.css';

gsap.registerPlugin(useGSAP);

const Anime = () => {
  useGSAP(() => {
    const timeline = gsap.timeline();
    const context = gsap.context(() => {
        timeline.to('.clip_path_container', {
            duration: 1.2,
            marginTop: "0px",
            ease: "power2.inOut",
        })
        .to('.clip_path_container', {
            duration: 0.9,
            clipPath: "inset(0% round .1rem)",
            ease: "power4.inOut",
        })
        .to('.hero_title', {
            bottom: "0px",
            ease: "power2.inOut",
        })
        .to('.hero_subtitle', {
            stagger: 0.1,
            bottom: "0px",
            ease: "power2.inOut",
        })
    });

    return () => context.kill();
  }, []);
  return (
    <main className='bg-white h-screen overflow-scroll no-scrollbar relative flex justify-center'>
        <section className='clip_path_container absolute inset-0 bg-white mt-[100vh]'>
            <div className='w-screen h-screen absolute'>
                <video preload='none' muted loop autoPlay className='w-full h-full object-cover'>
                    <source src='/3d.mp4' type='video/mp4' />
                    browser does not support
                </video>
            </div>

            <div className='mx-auto max-w-screen-2xl relative z-10 text-white px-10 py-28 h-full w-full text-center sm:text-left flex flex-col items-center sm:items-start justify-between'>
                <h1 className='text-[10vw] sm:text-[5vw] overflow-hidden h-fit leading-none font-mono'>
                    <span className='hero_title relative -bottom-40'>Coming Soon</span>
                </h1>
                <div className='flex justify-between items-end w-full'>
                    <div>
                        <p className='leading-none text-[40px] sm:text-[2vw] overflow-hidden'>
                            <span className='hero_subtitle -bottom-40 relative'>3D Modeling &</span>
                        </p>
                        <p className='leading-none text-[40px] sm:text-[2vw] overflow-hidden'>
                            <span className='hero_subtitle -bottom-40 relative'>Animation, Soon on Alima Agency.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Anime