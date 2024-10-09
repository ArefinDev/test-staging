"use client";
import { Card } from "@/components/ui/card";
import { Button } from "../ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./promotionSlide.css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import promotionHeaderImage from "@/assets/promotion-header.png";

const PromotionHeader = () => {
  return (
    <div>
      <h1 className="font-bold">Promotions</h1>
      <Card
        className="mt-2 flex flex-col lg:flex-row w-full gap-4 justify-center items-center p-4 lg:p-8"
        style={{
          background:
            "linear-gradient(111.21deg, rgb(210, 236, 39) -88.74%, rgb(50, 55, 56) 46.65%)",
        }}
      >
        <div className="w-full lg:w-1/3 lg:flex lg:justify-center">
          <div>
            <span className="text-white space-y-1 tracking-tighter">
              <p className="text-3xl font-bold">UP to 360%</p>
              <p className="font-semibold">Great Bonus For Every Deposit</p>
            </span>
            <div className="flex flex-row md:flex-col w-full gap-2 mt-3">
              <Button className="w-fit lg:px-10 depositBtn">Deposit Now</Button>
              <Button className="w-fit lg:px-10" variant="transparent">
                More Details
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3">
          <Swiper
            spaceBetween={30}
            loop={true} // Enables continuous loop
            autoplay={{
              delay: 3000, // Delay between transitions in milliseconds
              disableOnInteraction: false, // Keep autoplay running after user interactions
            }}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 3,
              },
              // when window width is >= 1280px
              1280: {
                slidesPerView: 4,
              },
              // when window width is >= 1440px
              1440: {
                slidesPerView: 5,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {Array.from({ length: 15 }).map((_, index) => (
              <SwiperSlide key={index} className="w-full">
                {" "}
                {/* Ensure full width */}
                <div className="flex flex-col items-center text-white bg-gray-600 gap-1 py-4 rounded-lg w-full">
                  {" "}
                  {/* Add w-full */}
                  <Image
                    src={promotionHeaderImage}
                    width={150}
                    height={150}
                    alt="promotion"
                    layout="responsive" // Set to responsive for full width
                    className="w-full h-auto" // Ensure the image takes full width
                  />
                  <p className="font-bold text-sm text-center">180% Bonus</p>
                  <Button size="sm" className="w-fit">
                    First Deposit
                  </Button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Card>
    </div>
  );
};

export default PromotionHeader;
