import { useRouter } from "next/router";
import React from "react";
import { FaFacebook, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";

const DetailsNews = () => {
  const router = useRouter();
  const articleNo = router.query.details;

  return (
    <div>
      <div className="blog-single gray-bg py-5">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-8 m-15px-tb">
              <article className="article">
                <div className="article-img">
                  <img
                    src="https://www.bootdey.com/image/800x350/87CEFA/000000"
                    title=""
                    alt=""
                  />
                </div>
                <div className="article-title">
                  <h6>
                    <a href="#"></a>
                  </h6>
                  <h2>They Now Bade Farewell To The Kind But Unseen People</h2>
                  <div className="media">
                    <div className="media-body">
                      <label>Rachel Roth</label>
                      <span>26 FEB 2020</span>
                    </div>
                  </div>
                </div>
                <div className="article-content">
                  <p>
                    Aenean eleifend ante maecenas pulvinar montes lorem et pede
                    dis dolor pretium donec dictum. Vici consequat justo enim.
                    Venenatis eget adipiscing luctus lorem. Adipiscing veni amet
                    luctus enim sem libero tellus viverra venenatis aliquam.
                    Commodo natoque quam pulvinar elit.
                  </p>
                  <p>
                    Eget aenean tellus venenatis. Donec odio tempus. Felis arcu
                    pretium metus nullam quam aenean sociis quis sem neque vici
                    libero. Venenatis nullam fringilla pretium magnis aliquam
                    nunc vulputate integer augue ultricies cras. Eget viverra
                    feugiat cras ut. Sit natoque montes tempus ligula eget vitae
                    pede rhoncus maecenas consectetuer commodo condimentum
                    aenean.
                  </p>
                  <h4>What are my payment options?</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <blockquote>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam.
                    </p>
                    <p className="blockquote-footer">
                      Someone famous in{" "}
                      <cite title="Source Title">Dick Grayson</cite>
                    </p>
                  </blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </article>
            </div>
            <div className="col-md-8">
              <div className="social-btn">
                <a
                  href="https://facebook.com/anampartho"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="social face">
                    <FaFacebook className="i" />
                    <span>Facebook</span>
                  </div>
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  <div className="social twi">
                    <FaTwitter className="i" />
                    <span>Twitter</span>
                  </div>
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  <div className="social in">
                    <FaLinkedin className="i" />
                    <span>Linked In</span>
                  </div>
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  <div className="social pin">
                    <FaPinterest className="i" />
                    <span>Pinterest</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsNews;
