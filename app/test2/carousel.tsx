 'use client';

import Slider from 'react-slick';


import '@/public/css/react-slick.css';
import '@/public/css/react-slick-theme.css';
import '@/public/css/noticeCarousle.css';
import Image from 'next/image';
import Link from 'next/link';

interface NoticeCarouselProps {
}

export default function NoticeCarousel({  }: NoticeCarouselProps) {
  const notices = [
    { desc: 'desc', image: '/test.png', link: '/', externalLink: false },
    { desc: 'desc', image: '/test.png', link: '/', externalLink: false },
    { desc: 'desc', image: '/test.png', link: '/', externalLink: false },
  ]
  const sliderSettings = {
    dots: true,
    arrows: false,
    speed: 500,
    centerPadding: '0',
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex justify-center gap-1"> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="notice-carousel mx-4">
      <Slider {...sliderSettings} className="relative" useCSS={true}>
        <section className="w-full h-[150px] bg-red-500"/>
      </Slider>
    </div>
  );
}
