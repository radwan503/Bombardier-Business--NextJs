import { useRouter } from "next/router";
import React from "react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { IoArrowRedo } from "react-icons/io5";
import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80https://unsplash.com/@entrycube",
    alt: "Windows 10 Dark Mode Setting",
  },
  {
    src: "https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    alt: "macOS Mojave Dark Mode Setting",
  },
  {
    src: "https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    alt: "Android 9.0 Dark Mode Setting",
  },
  {
    src: "https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    alt: "macOS Mojave Dark Mode Setting",
  },
];

const AlbumNo = () => {
  const router = useRouter();
  const albumsNumber = router.query.albumNo;
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="container">
      <div className="image-albums-section section-padding">
        
          <h2 className="text-uppercase section-title text-center mb-5">
            Photo Gallery
          </h2>
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
        >
          {images.map((imgSrc, index) => {
            return (
              <a className="gallery-image" href={imgSrc.src} key={index}>
                <Image
                  style={{ maxWidth: "100%", maxHeight: "400px" }}
                  className="img-responsive"
                  alt="img1"
                  src={imgSrc.src}
                  height={300}
                  width={300}
                />
                <div className="overlay">
                  <div className="text">
                    <IoArrowRedo />
                  </div>
                </div>
              </a>
            );
          })}
        </LightGallery>
      </div>
    </div>
  );
};

export default AlbumNo;
