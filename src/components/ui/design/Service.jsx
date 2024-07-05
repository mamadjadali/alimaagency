
export const ChatBubbleWing = ({ className, pathClassName }) => {
    return (
      <svg
        className={`${className || ""}`}
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="37"
      >
        <path
          className={`${pathClassName || ""}`}
          d="M21.843 37.001c3.564 0 5.348-4.309 2.829-6.828L3.515 9.015A12 12 0 0 1 0 .53v36.471h21.843z"
        />
      </svg>
    );
  };  

export const brainwaveWhiteSymbol = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><polygon fill="#FFFFFF" points="38.831 15.118 38.823 9.905 29.203 3.617 29.203 7.639 35.548 11.817 35.553 15.019 32.605 17.015 30.594 15.548 30.594 13.063 27.317 10.821 27.317 15.344 22.122 18.532 22.113 26.952 18.44 29.02 16.554 27.543 16.554 25.105 18.786 23.576 18.786 23.556 18.786 19.783 14.769 22.471 11.698 20.473 8.893 22.31 13.277 25.311 13.277 27.154 10.117 29.291 6.894 27.109 6.894 19.848 11.679 16.608 11.684 13.492 17.82 17.445 22.978 14.011 19.834 12.177 17.776 13.564 13.294 10.6 18.349 7.654 22.727 10.22 22.727 6.393 18.354 3.828 8.411 9.625 8.404 14.84 3.617 18.082 3.617 28.874 8.404 32.116 8.411 37.332 18.032 43.617 18.032 39.598 11.686 35.42 11.681 32.218 14.629 30.222 16.64 31.689 16.64 34.174 19.917 36.416 19.917 31.892 25.186 28.705 25.245 20.285 28.795 18.217 30.68 19.694 30.68 22.131 28.448 23.661 28.448 23.68 28.448 27.454 32.465 24.765 35.536 26.764 38.341 24.927 33.958 21.923 33.958 20.083 37.117 17.946 40.34 20.128 40.34 27.389 35.556 30.629 35.551 33.744 29.414 29.79 24.256 33.201 27.401 35.033 29.459 33.672 33.941 36.636 28.886 39.583 24.507 37.016 24.507 40.842 28.881 43.406 38.823 37.612 38.831 32.396 43.617 29.154 43.617 18.361"/></svg>
    )
}

export const play = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
            <path
                d="M8.006 2.802l.036.024 10.549 7.032.805.567c.227.183.494.437.648.808a2 2 0 0 1 0 1.532c-.154.371-.421.625-.648.808-.217.175-.5.364-.805.567L8.006 21.198l-.993.627c-.285.154-.676.331-1.132.303a2 2 0 0 1-1.476-.79c-.276-.365-.346-.788-.375-1.111S4 19.502 4 19.054V4.99v-.043l.029-1.174c.03-.323.1-.746.375-1.11a2 2 0 0 1 1.476-.79c.456-.027.847.149 1.132.304s.62.378.993.627z"
                fill="#fff" />
        </svg>
    )
}

export const Gradient = () => {
  return (
    <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
      <img
        className="absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2"
        src="/gradient.png"
        width={1417}
        height={1417}
        alt="Gradient"
      />
    </div>
  );
};

export const PhotoChatMessage = () => {
  return (
    <div className="absolute top-8 right-8 max-w-[17.5rem] py-6 px-8 bg-black rounded-t-xl rounded-bl-xl font-code text-base lg:top-16 lg:right-[8.75rem] lg:max-w-[17.5rem]">
      Hey Brainwave, enhance this photo
      <ChatBubbleWing className="absolute left-full bottom-0" />
    </div>
  );
};

export const VideoChatMessage = () => {
  return (
    <div className="absolute top-8 left-[3.125rem] w-full max-w-[14rem] pt-2.5 pr-2.5 pb-7 pl-5 bg-[#252134] rounded-t-xl rounded-br-xl font-[1rem] text-white text-base md:max-w-[17.5rem]">
      Video generated!
      <div className="absolute left-5 -bottom-[1.125rem] flex items-center justify-center w-[2.25rem] h-[2.25rem] bg-[#AC6AFF] rounded-[0.75rem]">
        <img
          src={brainwaveWhiteSymbol}
          width={26}
          height={26}
          alt="Brainwave"
        />
      </div>
      <p className="tagline absolute right-2.5 bottom-1 text-[0.625rem] text-[#ADA8C3] uppercase">
        just now
      </p>
      <ChatBubbleWing
        className="absolute right-full bottom-0 -scale-x-100"
        pathClassName="fill-[#252134]"
      />
    </div>
  );
};

export const VideoBar = () => {
  return (
    <div className="absolute left-0 bottom-0 w-full flex items-center p-6">
      <svg 
      alt="Play"
        className="object-contain mr-3"
      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
            <path
                d="M8.006 2.802l.036.024 10.549 7.032.805.567c.227.183.494.437.648.808a2 2 0 0 1 0 1.532c-.154.371-.421.625-.648.808-.217.175-.5.364-.805.567L8.006 21.198l-.993.627c-.285.154-.676.331-1.132.303a2 2 0 0 1-1.476-.79c-.276-.365-.346-.788-.375-1.111S4 19.502 4 19.054V4.99v-.043l.029-1.174c.03-.323.1-.746.375-1.11a2 2 0 0 1 1.476-.79c.456-.027.847.149 1.132.304s.62.378.993.627z"
                fill="#fff" />
        </svg>

      <div className="flex-1 bg-[#D9D9D9]">
        <div className="w-1/2 h-0.5 bg-[#AC6AFF]"></div>
      </div>
    </div>
  );
};