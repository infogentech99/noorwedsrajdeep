import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

export default function CoupleMessage() {
  const TARGET_DATE = new Date("2026-11-13").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 12,
    minutes: 28,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = TARGET_DATE - now;

      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );

      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);
  const testimonial = [
    {
      img: "/assets/couple_1.webp",
    },

    {
      img: "/assets/couple_2.webp",
    },

    {
      img: "/assets/couple_3.webp",
    },

    {
      img: "/assets/couple_4.webp",
    },

    {
      img: "/assets/couple_5.webp",
    },
  ];

  return (
    <div className="bg-[url('/assets/bg_three.webp')] bg-cover bg-no-repeat">
      <div className="h-855 md:h-765 lg:h-920 3xl:h-1000">
        <h2 className="font-eb-garamond font-medium text-xl md:text-2xl lg:text-[38px] text-center pt-12 md:pt-18 lg:pt-32 text-[#FFC700]">
          INTRODUCING
        </h2>
        <h2 className="font-parisienne-regular font-normal text-5xl md:text-6xl lg:text-[100px] text-center text-[#FFC700] mt-12 md:mt-16 lg:mt-28 leading-7 md:leading-8 lg:leading-8">
          The Couple
        </h2>
        <div className="flex justify-center items-center mt-26 md:mt-32">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop
            centeredSlides={true}
            spaceBetween={20}
            pagination={{ clickable: true }}
            className="w-full py-12 overflow-visible"
            breakpoints={{
              0: {
                slidesPerView: 1.25,
              },
              768: {
                slidesPerView: 2.2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonial.map((item, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-100 lg:h-125 3xl:h-200 object-cover rounded-[60px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex flex-col justify-center items-center mt-40">
          <div className="bg-[url('/assets/rsvp.webp')] bg-cover bg-no-repeat w-95 h-95 md:w-110 md:h-110 lg:w-130 lg:h-130">
            <h2 className="font-eb-garamond font-medium text-3xl md:text-4xl lg:text-4xl leading-8 md:leading-10 lg:leading-8 text-center pt-26 md:pt-30 lg:pt-40 text-[#8B4302]">
              Awaiting the <br /> Pleasure of <br /> Your Company
            </h2>
            <p className="font-eb-garamond font-semibold text-xs md:text-base lg:text-xl text-center  text-[#8B4302] mt-4">
              Click the link to RSVP
            </p>

            <a
              href="https://wa.me/9216335551"
              target="_blank"
              className="flex justify-center items-center gap-3"
            >
              <img
                src="./assets/whatsapp.webp"
                alt="whatsapp"
                className="h-7.5 w-7.5 md:w-9 md:h-9 lg:w-[42px] lg:h-[42px] mt-1 md:mt-2"
              />

              <p className="font-eb-garamond font-semibold text-xs md:text-base lg:text-2xl text-center mt-2  text-[#8B4302]">
                9216335551
              </p>
            </a>

            <a
              href="https://wa.me/9216335552"
              target="_blank"
              className="flex justify-center items-center gap-3"
            >
              <img
                src="./assets/whatsapp.webp"
                alt="whatsapp"
                className="h-7.5 w-7.5 md:w-9 md:h-9 lg:w-[42px] lg:h-[42px] mt-1 md:mt-2"
              />

              <p className="font-eb-garamond font-semibold text-xs md:text-base lg:text-2xl text-center mt-2  text-[#8B4302]">
                9216335552
              </p>
            </a>
          </div>
        </div>

        <h1 className="font-parisienne-regular font-normal text-5xl md:text-6xl lg:text-[100px] text-center pt-30 md:pt-40 lg:pt-35 leading-tight text-[#FFC700]">
          A Guide For <br /> Guests
        </h1>

        <div className="flex justify-center mt-20 pb-5 md:pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-14 lg:gap-0">
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src="/assets/weather.webp"
                alt="weather"
                className="h-26 w-32 md:w-25 md:h-20 lg:w-30 lg:h-25"
              />
              <h2 className="font-eb-garamond font-normal text-[40px] md:text-4xl lg:text-[42px] text-[#FFC700] mt-2">
                Weather
              </h2>
              <p className="font-eb-garamond font-medium text-sm md:text-base lg:text-xl mt-1 md:leading-5 text-[#FFC700]">
                A delighful day awaits <br />
                with pleasant weather <br />
                and mild temperatures.
              </p>
            </div>
            <hr className="hidden lg:block lg:rotate-90 lg:w-65 lg:border-2 border-[#FFC700] lg:my-28" />
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src="/assets/staff.webp"
                alt="staff"
                className="h-34 w-29 md:w-13 md:h-20 lg:w-18 lg:h-25"
              />
              <h2 className="font-eb-garamond font-normal text-[40px] md:text-4xl lg:text-[42px] mt-2 text-[#FFC700]">
                Staff
              </h2>
              <p className="font-eb-garamond font-medium text-sm md:text-base lg:text-xl mt-1 md:leading-5 text-[#FFC700]">
                For those traveling from afar, <br />
                Royal Orchid Suites offers a <br />
                comfortable stay nearby.
              </p>
            </div>
            <hr className="hidden lg:block lg:rotate-90 lg:w-65 lg:border-2 border-[#FFC700] lg:my-28" />
            <div className="flex flex-col items-center justify-center text-center">
              <img
                src="/assets/parking.webp"
                alt="parking"
                className="w-32 h-26 md:w-25 md:h-20 lg:w-30 lg:h-25"
              />
              <h2 className="font-eb-garamond font-normal text-[40px] md:text-4xl lg:text-[42px] mt-2 text-[#FFC700]">
                Parking
              </h2>
              <p className="font-eb-garamond font-medium text-sm md:text-base lg:text-xl mt-1 md:leading-5 text-[#FFC700]">
                Guests can enjoy hassle <br />
                free parking facilities <br />
                available at the venue.
              </p>
            </div>
          </div>
        </div>

        <h2 className="font-eb-garamond font-medium text-xl md:text-2xl lg:text-3xl text-center md:pt-2 lg:pt-2 lg:mt-4 lg:leading-tight px-3 md:px-0 text-[#FFC700]">
          Your presence means the world to us. To make your experience{" "}
          <br className="hidden md:block" />
          effortless and enjoyable, we've gathered a few useful details below.
        </h2>

        <div className="flex flex-col items-center justify-center text-center mt-20 py-20">
          <img
            src="/assets/mother.webp"
            alt="parking"
            className="w-45 h-55 md:w-50 md:h-60 lg:w-55 lg:h-70"
          />
          <h2 className="font-eb-garamond font-medium text-xl md:text-2xl lg:text-3xl text-center mt-3 md:pt-2 lg:pt-2 lg:mt-4 lg:leading-tight px-3 md:px-0 text-[#FFC700]">
            Her presence may be missed, but her love and blessings will
            <br className="hidden md:block" />
            forever be woven into the beautiful beginning of her daughter’s new
            journey.
          </h2>
        </div>

        <div className="flex flex-col items-center h-80 md:h-100 lg:h-110 md:gap-2">
          <h2 className="font-parisienne-regular font-normal text-3xl md:text-4xl lg:text-6xl text-center pt-15 lg:pt-20 mt-4 text-[#FFC700]">
            The Journey Begins
          </h2>
          <p className="font-eb-garamond font-medium text-base md:text-xl lg:text-[28px] text-center mt-2 md:mt-4 text-[#FFC700] px-10">
            Surrounded by family and friends, we can't wait to celebrate{" "}
            <br className="md:block hidden" />
            this beautiful moment with you.
          </p>
          <hr className="w-54 md:w-66 lg:w-94 border lg:border-2 border-[#FFC700] my-3 md:my-3 lg:my-4 mt-4" />
          <h2 className="font-eb-garamond font-normal text-4xl md:text-5xl lg:text-[80px] text-center text-[#FFC700]">
            {timeLeft.days}D - {timeLeft.hours}H - {timeLeft.minutes}M -{" "}
            {timeLeft.seconds}S
          </h2>
          <div className="flex flex-col gap-4 justify-center items-center mt-4">
            <a href="https://www.instagram.com/theinvitearc/" target="_blank">
              <img
                src="/assets/instagram.webp"
                alt="instagram"
                className="w-7.5 h-7.5 md:w-10 md:h-10 lg:w-12 lg:h-12"
              />
            </a>
          </div>
          <p className="font-eb-garamond font-medium text-xs md:text-sm lg:text-base text-center mt-4 text-[#FFC700]">
            ©{" "}
            <a href="https://invitearc.com/" target="_blank">
              InviteArc
            </a>{" "}
            2026{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
