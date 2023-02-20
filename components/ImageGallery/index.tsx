import React from "react";
import Link from "next/link";
import Image from "next/image";

// plugin
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// image
import slider1 from "../../public/image/slider1.jpg";
import { IoArrowRedo } from "react-icons/io5";

const ImageGallery = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="image-gallery-section">
      <div className="inner-image-gallery ">
        <h3 className="text-center text-uppercase mb-5 section-title">
          {" "}
          Image Gallery
        </h3>
        <Slider {...settings}>
          <div className="image-items">
            <Image
              className="album-image"
              style={{ width: "100%", height: "300px" }}
              src={slider1}
              objectFit="cover"
              alt="Third slide"

            />
            <div className="overlay">
              <div className="text">
                <Link href="/albums/1">
                  <IoArrowRedo />
                </Link>

              </div>
            </div>
          </div>
          <div className="image-items">
            <Image
              className="album-image"
              style={{ width: "100%", height: "300px" }}
              src={slider1}
              objectFit="cover"
              alt="Third slide"
            />
            <div className="overlay">
              <div className="text">
                <Link href="/albums/2">
                  <IoArrowRedo />
                </Link>
              </div>
            </div>
          </div>
          <div className="image-items">
            <Image
              className="album-image"
              style={{ width: "100%", height: "300px" }}
              src={slider1}
              objectFit="cover"
              alt="Third slide"
            />
            <div className="overlay">
              <div className="text">
                <Link href="/albums/3">
                  <IoArrowRedo />
                </Link>
              </div>
            </div>
          </div>
          <div className="image-items">
            <Image
              className="album-image"
              style={{ width: "100%", height: "300px" }}
              src={slider1}
              objectFit="cover"
              alt="Third slide"
            />
            <div className="overlay">
              <div className="text">
                <Link href="/albums/4">
                <IoArrowRedo />
                </Link>
              </div>
            </div>
          </div>
          <div className="image-items">
            <Image
              className="album-image"
              style={{ width: "100%", height: "300px" }}
              src={slider1}
              objectFit="cover"
              alt="Third slide"
            />
            <div className="overlay">
              <div className="text">
              <Link href="/albums/5">
                <IoArrowRedo />
                </Link>
              </div>
            </div>
          </div>
          <div className="image-items">
            <Image
              className="album-image"
              style={{ width: "100%", height: "300px" }}
              src={slider1}
              objectFit="cover"
              alt="Third slide"
            />
            <div className="overlay">
              <div className="text">
              <Link href="/albums/6">
                <IoArrowRedo />
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default ImageGallery;
