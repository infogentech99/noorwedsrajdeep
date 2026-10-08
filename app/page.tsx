"use client";
import { useEffect, useState, useRef, useMemo } from "react";
import FallingLamps from "@/app/components/FallingLamps";
import CoupleMessage from "@/app/components/CoupleMessage";

const FloatingLamp = ({ className, style, reverse = false }: { className: string; style?: React.CSSProperties; reverse?: boolean }) => {
  // Memoize random values to prevent recalculation on re-renders
  const lampValues = useMemo(() => {
    // const duration = 60 + Math.random() * 40; // 60–100s (very slow flow)
    // const duration = 40 + Math.random() * 10; // 40–50s
    const duration = 60 + Math.random() * 10; // 60–70s
    const delay = Math.random() * 15;

    // depth feel - dramatic size variety
    const scale = Math.random() < 0.5
      ? 0.3 + Math.random() * 0.4  // 0.3–0.7 (small lamps)
      : 1.2 + Math.random() * 0.8; // 1.2–2.0 (large lamps)
    const blur = scale < 0.7 ? "blur(1.5px)" : "blur(0px)";

    return { duration, delay, scale, blur };
  }, []); // Empty dependency array means these values are calculated only once

  return (
    <img
      src="/lamp.png"
      alt="Lamp"
      className={`floating-lamp ${className}`}
      style={{
        animationName: reverse ? 'lampFlowReverse' : 'lampFlow',
        animationDuration: `${lampValues.duration}s`,
        animationDelay: `${lampValues.delay}s`,
        transform: `scale(${lampValues.scale})`,
        filter: `drop-shadow(0 0 18px rgba(255,180,90,0.9)) ${lampValues.blur}`,
        '--scale': lampValues.scale,
        ...style,
      } as React.CSSProperties}
    />
  );
};

export default function Home() {
  const events = [
  
   {
      title_ceremony: "Mata Ki Chowki",
      image: "/assets/mata.webp",
      date: "Wednesday, November 4th 2026",
      time: "Join Us at 6 pm",
      venue: <>Old Shri Krishna Mandir, <br/>Model Town, Ludhiana</>,
    },
      
   {
      title_ceremony: "Shagun & Ring Ceremony",
      image: "/assets/shagun.webp",
      date: "Wednesday, November 11th 2026",
      time: "Join Us at 11 am",
       venue: <>The Borgo,<br/>  Bulara Road, Gill, Ludhiana.</>,
      link: "https://maps.app.goo.gl/Y1mkeBFLKP4zKHmE6",
    }, 
  
    {
      title_ceremony: "Mehendi & Sangeet",
      image: "/assets/mehendi.webp",
      date: "Wednesday, November 11th 2026",
      time: "Join Us at 7 pm",
       venue: <>Radha Vallabh Mandir,<br/> Ghumar Mandi, Ludhiana </>,
    },

    {
      title_ceremony: " Wedding Day",
      image: "/assets/wedding.webp",
      date: "Friday, November 13th 2026",
      time: "Join Us at 12 noon",
      venue: <>Victorian Castle <br/>Pakhowal Road, Dhaipai Ludhiana</>,
      link: "https://maps.app.goo.gl/D1fF85dtHiF59xCY9",
    },


  ];
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);

  const startMusic = async () => {
    const audio = audioRef.current;
    if (!audio || started) return;

    try {
      audio.volume = 0.3;
      await audio.play();
      setStarted(true);
      setPlaying(true);
    } catch { }
  };

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch { }
    }
  };

  // First user interaction (mobile + desktop)
  useEffect(() => {
    const handler = () => startMusic();

    window.addEventListener("click", handler);
    window.addEventListener("touchstart", handler);

    return () => {
      window.removeEventListener("click", handler);
      window.removeEventListener("touchstart", handler);
    };
  }, [started]);


  return (
    <>
      <button
        onClick={() => {
          started ? toggleMusic() : startMusic();
        }}
        className="fixed bottom-4 right-4 z-50 bg-[#FF35A1] text-white p-3 rounded-xl text-xl"
      >
        {playing ? "⏸" : "▶"}
      </button>

      <audio ref={audioRef} src="/assets/background_song_inter.mp3" loop preload="auto" playsInline />


      {/* hero section */}
      <div className="bg-[url('/assets/respo_bg.webp')] md:bg-[url('/assets/background.webp')]
                      bg-cover bg-top bg-no-repeat min-h-screen w-full relative overflow-hidden">
      {/* bg-[url('https://res.cloudinary.com/dx2di0mvx/image/upload/v1772000667/inter_bg_water_mobile_gxasp1.webp')]
          md:bg-[url('https://res.cloudinary.com/dx2di0mvx/image/upload/v1771937159/inter_bg_water_qvbzrs.webp')] */}

        {/* Decorative Lamps - Natural Flow Pattern */}
        {/* Left-to-Right Lamps - Less crowded */}
        <FloatingLamp className="absolute top-10 left-8 w-40 h-40 transform rotate-12 opacity-90" />
        <FloatingLamp className="absolute top-30 left-20 w-36 h-36 transform rotate-45 opacity-80" />
        <FloatingLamp className="absolute top-50 left-40 w-32 h-32 transform rotate-30 opacity-85" />
        <FloatingLamp className="absolute top-70 left-60 w-38 h-38 transform rotate-15 opacity-80" />
        <FloatingLamp className="absolute top-90 left-80 w-34 h-34 transform rotate-25 opacity-75" />
        <FloatingLamp className="absolute top-110 left-100 w-28 h-28 transform rotate-10 opacity-85" />
        <FloatingLamp className="absolute top-130 left-120 w-36 h-36 transform rotate-35 opacity-75" />
        <FloatingLamp className="absolute top-150 left-140 w-30 h-30 transform rotate-22 opacity-85" />
        <FloatingLamp className="absolute top-170 left-160 w-32 h-32 transform rotate-18 opacity-80" />
        <FloatingLamp className="absolute top-190 left-180 w-40 h-40 transform rotate-28 opacity-85" />


        <FloatingLamp className="hidden lg:block absolute top-50 left-40 w-40 h-40 transform rotate-30 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-60 left-40 w-40 h-40 transform rotate-15 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-80 left-80 w-40 h-40 transform rotate-25 opacity-75" />
        <FloatingLamp className="hidden lg:block absolute top-100 left-100 w-40 h-40 transform rotate-10 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-120 left-120 w-32 h-32 transform rotate-35 opacity-75" />
        <FloatingLamp className="hidden lg:block absolute top-140 left-140 w-40 h-40 transform rotate-22 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-160 left-160 w-32 h-32 transform rotate-18 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-180 left-180 w-40 h-40 transform rotate-28 opacity-85" />

        <FloatingLamp className="hidden lg:block absolute top-50 left-40 w-40 h-40 transform rotate-30 opacity-85" />
        <FloatingLamp className="hidden lg:block absolute top-60 left-40 w-40 h-40 transform rotate-15 opacity-80" />
        <FloatingLamp className="hidden lg:block absolute top-80 left-80 w-40 h-40 transform rotate-25 opacity-75" />


        {/* Right-to-Left Lamps - Less crowded */}
        <FloatingLamp className="absolute top-20 right-12 w-32 h-32 transform -rotate-6 opacity-85" reverse={true} />
        <FloatingLamp className="absolute top-40 right-32 w-28 h-28 transform -rotate-12 opacity-75" reverse={true} />
        <FloatingLamp className="absolute top-60 right-52 w-36 h-36 transform -rotate-20 opacity-90" reverse={true} />
        <FloatingLamp className="absolute top-80 right-72 w-30 h-30 transform -rotate-8 opacity-85" reverse={true} />
        <FloatingLamp className="absolute top-100 right-92 w-34 h-34 transform -rotate-15 opacity-80" reverse={true} />
        <FloatingLamp className="absolute top-120 right-112 w-38 h-38 transform -rotate-25 opacity-90" reverse={true} />
        <FloatingLamp className="absolute top-140 right-132 w-26 h-26 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="absolute top-160 right-152 w-32 h-32 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="absolute top-180 right-172 w-36 h-36 transform -rotate-22 opacity-85" reverse={true} />
        <FloatingLamp className="absolute top-200 right-192 w-30 h-30 transform -rotate-35 opacity-85" reverse={true} />


        <FloatingLamp className="hidden lg:block absolute top-30 right-12 w-40 h-40 transform -rotate-6 opacity-85" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-50 right-32 w-40 h-40 transform -rotate-12 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-70 right-52 w-40 h-40 transform -rotate-20 opacity-90" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-90 right-72 w-40 h-40 transform -rotate-8 opacity-85" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-110 right-92 w-32 h-32 transform -rotate-15 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-130 right-112 w-40 h-40 transform -rotate-25 opacity-90" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-150 right-132 w-40 h-40 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-170 right-152 w-32 h-32 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-190 right-172 w-40 h-40 transform -rotate-22 opacity-85" reverse={true} />


        <FloatingLamp className="hidden lg:block absolute top-150 right-132 w-40 h-40 transform -rotate-18 opacity-80" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-170 right-152 w-40 h-40 transform -rotate-30 opacity-75" reverse={true} />
        <FloatingLamp className="hidden lg:block absolute top-190 right-172 w-40 h-40 transform -rotate-22 opacity-85" reverse={true} />




        {/* <FallingLamps /> */}
        <div className="pt-24 3xl:pt-34 pb-20 relative z-10">
          <h2 className="flex flex-col items-center text-center leading-tight text-5xl md:text-6xl lg:text-[80px]
                         pb-0 md:pb-260 lg:pb-280 3xl:pb-390 gap-y-2 text-[#DEE6FF]">
            <span className="font-parisienne-regular font-normal">Noor</span>
            <span className="font-jacques-francois font-normal text-xl md:text-3xl lg:text-[38px]">WEDS</span>
            <span className="font-parisienne-regular font-normal">Rajdeep</span>
          </h2>
          <div className="flex flex-col items-center text-center gap-6 mt-0 lg:pt-150 pt-150">
            <h2 className="font-eb-garamond font-medium text-base md:text-2xl lg:text-3xl text-center text-[#FFC700]">
              ॐ श्री गणेशाय नम
            </h2>
            <img src="/assets/ganesh.webp" alt="ganesh" className="w-28 h-auto md:w-41 md:h-53"/>
            <h2 className="font-eb-garamond font-medium text-[#FFC700] text-base md:text-2xl lg:text-3xl">
             With the Heavenly Blessings Of Grandmother <br />Late Smt. Amita Rani <br />Sh. Baldev Raj Gupta
            </h2>
            <hr className="w-20 lg:w-30 border-[#FFC700] md:border-2 my-1 md:my-4" />
            <h2 className="font-eb-garamond font-medium text-xl md:text-2xl lg:text-3xl text-[#FFC700]">
              The Gupta Family
            </h2>
          </div>
          <div className="text-center md:mt-8 mt-4">
            {/* <h2 className="font-eb-garamond font-medium text-base md:text-lg lg:text-[26px] leading-tight lg:tracking-wide tracking-wider text-[#FFC700]">
              INVITES
            </h2> */}
            <p className="font-eb-garamond font-medium text-xl md:text-2xl lg:text-3xl md:mt-6 text-[#FFC700] px-2">
              Cordially Invites You to Join Them in the Joyous Wedding Celebrations of
            </p>
            <h2 className="font-parisienne-regular font-medium text-center mt-6 text-5xl md:text-6xl lg:text-[100px] leading-tight text-[#FFC700]">
             Noor
            </h2>
            <p className="font-eb-garamond font-medium text-base md:text-2xl lg:text-3xl mt-4 text-[#FFC700]">
               (D/o Mrs. Divya & Mr. Munish Gupta)
            </p>
            <h2 className="font-parisienne-regular font-medium text-5xl md:text-6xl lg:text-[100px] text-center mt-4 leading-tight text-[#FFC700]">
              <span className="text-[#FFC700] font-eb-garamond font-medium text-center mt-4 lg:mt-10 text-5xl md:text-6xl lg:text-[100px] leading-tight">
                &
              </span> <br />
             Rajdeep
            </h2>
            <p className="font-eb-garamond font-medium text-base md:text-2xl lg:text-3xl mt-4 text-[#FFC700]">
              (S/o Sdn. Loveleet Kaur & S. Manjit Singh)
            </p>
            <p className="font-eb-garamond font-medium text-base md:text-2xl lg:text-3xl mt-12 text-[#FFC700]">
              On the following events
            </p>
          </div>

          <div className="flex justify-center mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 md:gap-26 lg:gap-x-70 px-14">
              {events.map((event, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <img src={event.image} alt={event.title_ceremony} className="w-95 h-auto md:w-76 lg:w-80"/>

                  <h2 className="font-eb-garamond font-medium text-[36px] md:text-3xl lg:text-[42px] mt-4 text-[#FFC700]">
                    {event.title_ceremony}
                  </h2>
                  <p className="font-eb-garamond font-medium mt-2 text-[#FFC700]">
                    <span className="text-base lg:text-xl">{event.date}</span>  <br />
                    <span className="text-base lg:text-xl">  {event.time} </span> <br />
                    <span className="text-base lg:text-xl uppercase"> {event.venue} </span> 
                  </p>

              {event.link && (
  <a
    href={event.link}
    className="font-eb-garamond font-medium underline text-sm md:text-base lg:text-lg mt-2 text-[#FFC700]"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Directions
  </a>
)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className="bg-[url('/assets/bg_two.webp')] bg-cover bg-no-repeat">
        <div className="flex flex-col items-center h-90 md:h-172 lg:h-318 3xl:h-403">
          <h1 className="font-parisienne-regular font-normal text-2xl md:text-4xl lg:text-7xl text-center pt-4 md:pt-18 lg:pt-26 3xl:pt-50 text-[#FFC700]">
            With <br /> Love From Us
          </h1>
          <h2 className="font-eb-garamond font-medium text-[10px] md:text-base lg:text-3xl text-center leading-3 md:leading-5 lg:leading-10 pt-0 md:pt-2 lg:pt-6 text-[#FFC700]">
            Thank you for being part of our journey. <br /> Your presence makes this celebration truly <br />
            meaningful, and we look forward to sharing <br /> these cherished moments with you.
          </h2>
        </div>
      </div>

      <CoupleMessage />


<picture className="block w-full">
  <source
    media="(min-width: 768px)"
    srcSet="/assets/bg_four.webp"
  />

  <img
    src="/assets/respo_four.webp"
    alt=""
    className="block w-full h-auto"
  />
</picture>
      
     
    </>
  );
}
