import { Advertising, Analysis, Branding, Content,} from '../assets/BentoIcons';
import {
    PhotoChatMessage,
    Gradient,
    VideoBar,
    VideoChatMessage,
  } from "./ui/design/Service";


const Services = () => {
    return (
        <div className="container">
          {/* <Heading
            title="Generative AI made for creators."
            text="Brainwave unlocks the potential of AI-powered applications"
          /> */}
  
          <div className="relative">
            <div className="relative z-1 w-fulls flex items-center h-[39rem] mb-5 p-8 border-2 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                <img
                  className="w-full h-full object-cover md:object-right"
                  width={800}
                  alt="Smartest AI"
                  height={730}
                  src="/service-1.png"
                />
              </div>
  
              <div className="relative z-1 max-w-[17rem] ml-auto">
                <h4 className="text-[2rem] mb-4">Smartest AI</h4>
                <p className="mb-[3rem] text-[#ada8c3]">
                  Brainwave unlocks the potential of AI-powered applications
                </p>
                <ul className="text-[1.3rem]">
                  {brainwaveServices.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start py-4 border-t border-n-6"
                    >
                      {/* <img width={24} height={24} src={check} /> */}
                      <p className="ml-4">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
  
            <div className="relative z-1 grid gap-5 lg:grid-cols-2">
              <div className="relative min-h-[39rem]  border-2 rounded-3xl overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    src="/service-2.png"
                    className="h-full w-full object-cover"
                    width={630}
                    height={750}
                    alt="robot"
                  />
                </div>
  
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                  <h4 className="text-[2rem] mb-4">Photo editing</h4>
                  <p className="body-2 mb-[3rem] text-[#ada8c3]">
                    Automatically enhance your photos using our AI app&apos;s
                    photo editing feature. Try it now!
                  </p>
                </div>
  
                <PhotoChatMessage />
              </div>
  
              <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
                <div className="py-12 px-4 xl:px-8">
                  <h4 className="text-[2rem] mb-4">Video generation</h4>
                  <p className="body-2 mb-[2rem] text-[#ada8c3]">
                    The world’s most powerful AI photo and video art generation
                    engine. What will you create?
                  </p>
  
                  <ul className="flex items-center justify-between">
                    {brainwaveServicesIcons.map((item, index) => (
                      <li
                        key={index}
                        className={`rounded-2xl flex items-center justify-center ${
                          index === 2
                            ? "w-[3rem] h-[3rem] p-0.25 bg-[#0f0c1e] md:w-[4.5rem] md:h-[4.5rem]"
                            : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                        }`}
                      >
                        <div
                          className={
                            index === 2
                              ? "flex items-center justify-center w-full h-full bg-[#0f0c1e] rounded-[1rem]"
                              : ""
                          }
                        >
                          <img src={item} width={24} height={24} alt={item} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
  
                <div className="relative h-[20rem] bg-[#0e0c15] rounded-xl overflow-hidden md:h-[25rem]">
                  <img
                    src="/service-3.png"
                    className="w-full h-full object-cover"
                    width={520}
                    height={400}
                    alt="Scary robot"
                  />
  
                  <VideoChatMessage />
                  <VideoBar />
                </div>
              </div>
            </div>
  
            <Gradient />
          </div>
        </div>
    );
  };
  
export default Services;

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const recording01 = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FFF" fill-rule="evenodd" d="M1 7C1.55228 7 2 7.44772 2 8L2 12C2 12.5523 1.55228 13 1 13 .44772 13 0 12.5523 0 12L0 8C0 7.44772.44772 7 1 7ZM5.5 3C6.05228 3 6.5 3.44772 6.5 4L6.5 16C6.5 16.5523 6.05229 17 5.5 17 4.94772 17 4.5 16.5523 4.5 16L4.5 4C4.5 3.44772 4.94772 3 5.5 3ZM10 0C10.5523 0 11 .44772 11 1L11 19C11 19.5523 10.5523 20 10 20 9.4477 20 9 19.5523 9 19L9 1C9 .44772 9.4477 0 10 0ZM14.5 3C15.0523 3 15.5 3.44772 15.5 4L15.5 16C15.5 16.5523 15.0523 17 14.5 17 13.9477 17 13.5 16.5523 13.5 16L13.5 4C13.5 3.44772 13.9477 3 14.5 3ZM19 7C19.5523 7 20 7.44772 20 8L20 12C20 12.5523 19.5523 13 19 13 18.4477 13 18 12.5523 18 12L18 8C18 7.44772 18.4477 7 19 7Z" transform="translate(2 2)"/></svg>
    )
}
export const chromecast = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FFF" fill-rule="evenodd" d="M17.2413003,1.9999997 L6.7587003,1.9999997 C5.9537403,1.9999997 5.2893703,1.9999997 4.7481803,2.04419 C4.1860803,2.09012 3.6693703,2.18868 3.1840403,2.43598 C2.4313903,2.81947 1.8194703,3.43139 1.4359803,4.18404 C1.1886803,4.66937 1.0901203,5.18608 1.0441903,5.74818 C1,6.28937 1,6.95372 1,7.75869 L1,16.2413 C1,17.0463 1,17.7106 1.0441903,18.2518 C1.0901203,18.8139 1.1886803,19.3306 1.4359803,19.816 C1.8194703,20.5686 2.4313903,21.1805 3.1840403,21.564 C3.6693703,21.8113 4.1860803,21.9099 4.7481803,21.9558 C5.2893703,21.9999997 5.9537203,21.9999997 6.7586803,21.9999997 L17.2413003,21.9999997 C18.0463003,21.9999997 18.7106003,21.9999997 19.2518003,21.9558 C19.8139003,21.9099 20.3306003,21.8113 20.8160003,21.564 C21.5686003,21.1805 22.1805003,20.5686 22.5640003,19.816 C22.8113003,19.3306 22.9099003,18.8139 22.9558003,18.2518 C23,17.7106 23,17.0463 23,16.2413 L23,7.75868 C23,6.95372 23,6.28937 22.9558003,5.74818 C22.9099003,5.18608 22.8113003,4.66937 22.5640003,4.18404 C22.1805003,3.43139 21.5686003,2.81947 20.8160003,2.43598 C20.3306003,2.18868 19.8139003,2.09012 19.2518003,2.04419 C18.7106003,1.9999997 18.0463003,1.9999997 17.2413003,1.9999997 Z M4.0060803,9.93935 C4.0671303,9.39045 4.5615903,8.99497 5.1104903,9.05602 C7.3669203,9.30698 9.4708003,10.3183 11.0762003,11.9237 C12.6816003,13.529 13.6929003,15.6329 13.9438003,17.8894 C14.0049003,18.4383 13.6094003,18.9327 13.0605003,18.9938 C12.5116003,19.0548 12.0171003,18.6593 11.9561003,18.1104 C11.7553003,16.3053 10.9463003,14.6222 9.6620003,13.3379 C8.3776603,12.0536 6.6945603,11.2445 4.8894103,11.0438 C4.3405103,10.9827 3.9450303,10.4883 4.0060803,9.93935 Z M4.0201203,13.9001 C4.1304903,13.3589 4.6586403,13.0097 5.1997803,13.1201 C6.3528503,13.3552 7.4113103,13.9243 8.2434403,14.7564 C9.0755703,15.5885 9.6446003,16.647 9.8798003,17.8 C9.9901003,18.3412 9.6409003,18.8693 9.0997803,18.9797 C8.5586403,19.0901 8.0304903,18.7409 7.9201203,18.1997 C7.7633503,17.431 7.3839803,16.7254 6.8292303,16.1706 C6.2744803,15.6159 5.5688403,15.2365 4.8001203,15.0797 C4.2589803,14.9693 3.9097603,14.4412 4.0201203,13.9001 Z M4.9999503,16.9999 C4.4476703,16.9999 3.9999503,17.4476 3.9999503,17.9999 C3.9999503,18.5522 4.4476703,18.9999 4.9999503,18.9999 L5.0099503,18.9999 C5.5622403,18.9999 6.0099503,18.5522 6.0099503,17.9999 C6.0099503,17.4476 5.5622403,16.9999 5.0099503,16.9999 L4.9999503,16.9999 Z"/></svg>
    )
}
export const sliders04 = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 9L14.126 9C14.5701 10.7252 16.1362 12 18 12C20.2091 12 22 10.2091 22 8C22 5.79086 20.2091 4 18 4C16.1362 4 14.5701 5.27477 14.126 7L3 7C2.44772 7 2 7.44772 2 8C2 8.55228 2.44772 9 3 9Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21 15L9.87398 15C9.42994 13.2748 7.86384 12 6 12C3.79086 12 2 13.7909 2 16C2 18.2091 3.79086 20 6 20C7.86384 20 9.42994 18.7252 9.87398 17L21 17C21.5523 17 22 16.5523 22 16C22 15.4477 21.5523 15 21 15Z" fill="white"/>
        </svg>
    )
}
export const disc02 = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15ZM15.4291 4.77031C14.9302 4.53333 14.3337 4.74562 14.0967 5.24448C13.8598 5.74334 14.0721 6.33985 14.5709 6.57683C16.6003 7.54091 18 9.60796 18 11.9999C18 12.5522 18.4477 12.9999 19 12.9999C19.5523 12.9999 20 12.5522 20 11.9999C20 8.80713 18.1296 6.05317 15.4291 4.77031ZM6 11.9999C6 11.4476 5.55228 10.9999 5 10.9999C4.44772 10.9999 4 11.4476 4 11.9999C4 14.9112 5.55568 17.4581 7.87631 18.8564C8.34935 19.1415 8.9639 18.989 9.24894 18.516C9.53398 18.043 9.38157 17.4284 8.90852 17.1434C7.16348 16.0919 6 14.1813 6 11.9999Z" fill="white"/>
    </svg>
    )
}
export const recording03 = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM14 6C14.5523 6 15 6.44772 15 7V17C15 17.5523 14.5523 18 14 18C13.4477 18 13 17.5523 13 17V7C13 6.44772 13.4477 6 14 6ZM11 9C11 8.44772 10.5523 8 10 8C9.44771 8 9 8.44772 9 9V15C9 15.5523 9.44772 16 10 16C10.5523 16 11 15.5523 11 15V9ZM7 11C7 10.4477 6.55228 10 6 10C5.44772 10 5 10.4477 5 11V13C5 13.5523 5.44772 14 6 14C6.55228 14 7 13.5523 7 13V11ZM19 11C19 10.4477 18.5523 10 18 10C17.4477 10 17 10.4477 17 11V13C17 13.5523 17.4477 14 18 14C18.5523 14 19 13.5523 19 13V11Z" fill="white"/>
        </svg>
    )
}

export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
];

