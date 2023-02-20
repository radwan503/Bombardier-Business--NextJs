import Image from "next/image";
import React from "react";
import president from "../../../public/image/profile/president.jpg";
import secretary from "../../../public/image/profile/Secretary.jpg";

const committeList = [
  {
    src: president,
    name: "Saidur Rahman",
    designation: "President",
  },
  {
    src: secretary,
    name: "ABU NOMAN MD ZAKIR HOSSAIN",
    designation: "General Secretary",
  }
];

const CommitteeInfo = () => {
  return (
    <div id="team" className="committee-member-page section-padding">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title text-uppercase">Executive Committee</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="row text-center mt-5">
          {committeList.map((member, index) => {
            return (
              <div
                className={
                  index == 0
                    ? "col-md-12 col-sm-12 col-xs-12 wow fadeInUp"
                    : "col-md-4 col-sm-6 col-xs-12 wow fadeInUp"
                }
                data-wow-duration="1s"
                data-wow-delay="0.1s"
                data-wow-offset="0"
                key={index}
              >
                <div className="our-team">
                  <div className="team_img">
                    <Image
                      src={member.src}
                      alt="team-image"
                      style={{ height: "300px", width: "280px" }}
                      objectFit="fill"
                      height={300}
                      width={233}
                    />
                  </div>
                  <div className="team-content">
                    <h3 className="title">{member.name}</h3>
                    <span className="post">{member.designation}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CommitteeInfo;
