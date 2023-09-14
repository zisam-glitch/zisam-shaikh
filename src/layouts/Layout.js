import Head from "next/head";
import { Fragment, useEffect } from "react";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import {
  dataImage,
  hashtag_,
  imgToSVG,
  scrollSection,
  stickyNav,
} from "../utilits";
import PreLoader from "./PreLoader";
const Layout = ({ children }) => {
  useEffect(() => {
    imgToSVG();
    dataImage();
    hashtag_();
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scrollSection);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Zisam Shaikh | Frontend Developer  Designer | Mentor</title>
        <link rel="icon" type="https://res.cloudinary.com/db1i46uiv/image/upload/v1694702862/fav_guhgeg.png" href="https://res.cloudinary.com/db1i46uiv/image/upload/v1694702862/fav_guhgeg.png"></link>
        <link rel="image_src" href="https://res.cloudinary.com/db1i46uiv/image/upload/v1694702945/1_rl2krt.jpg"></link>
      </Head>
      <PreLoader />
      <ImageView />
      <VideoPopup />
      <div className="orido_tm_all_wrap" data-magic-cursor="show">
        {children}
      </div>
    </Fragment>
  );
};
export default Layout;
