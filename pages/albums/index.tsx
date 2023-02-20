import React from "react";
import ImageGallery from "../../components/ImageGallery";
import { useRouter } from "next/router";

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


const Albums = () => {

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };
  return (
    <div className="image-gallery-page">
      <div className="container">
      {/* <h2 className="text-uppercase section-title text-center">
            Photo Gallery
          </h2> */}
        <ImageGallery />
        
      </div>
    </div>
  );
};

export default Albums;
