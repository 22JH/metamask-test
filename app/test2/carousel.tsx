 'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Link from 'next/link';

interface NoticeCarouselProps {
}

export default function NoticeCarousel({  }: NoticeCarouselProps) {
  const notices = [
    { desc: 'desc', image: '/images/banner1.png', link: '/', externalLink: false },
    { desc: 'desc', image: '/images/banner1.png', link: '/', externalLink: false },
    { desc: 'desc', image: '/images/banner1.png', link: '/', externalLink: false },
  ]
  const sliderSettings = {
    dots: true,
    arrows: false,
    speed: 500,
    centerPadding: '0',
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex justify-center gap-1"> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="notice-carousel mx-4">
      <Slider {...sliderSettings} className="relative">
        {notices.map(({ desc, image, link, externalLink }) => (
          <Link
            className="relative w-full aspect-[3/1] rounded-2xl overflow-hidden"
            key={desc}
            href={link}
            target={externalLink ? '_blank' : '_self'}
          >
            <Image
              src={image}
              alt={desc}
              className="object-cover"
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
}
