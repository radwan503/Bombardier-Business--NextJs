import Image from "next/image";
import React from "react";
import secretary from "../../../public/image/profile/Secretary.jpg";

const SecretryMessage = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <Image
            style={{ maxWidth: "180px", maxHeight: "200px" }}
            alt="img1"
            className="message-profile-img"
            src={secretary}
            height={200}
            width={200}
          />
        </div>
        <div className="col-md-10">
          I am humbled, honored, and privileged to accept the role of President
          of bombardier jets for the
          next two years (2019-2020). My heartiest gratitude goes out to each
          and every member of this association who has inspired me and has put
          their faith in me to lead this association. I am extremely thankful to
          my predecessors for their leadership and outstanding contributions to
          bombardier jets during their tenure. Indeed, the growth of bombardier jets has been
          propelled collectively by the individuals and all the past Executive
          Committees and members. I along with the present Executive Committee
          look forward to continuing this important work towards fulfilling the
          mission of bombardier jets.
        </div>
      </div>
    </div>
  );
};

export default SecretryMessage;
