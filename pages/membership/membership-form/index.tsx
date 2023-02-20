import React from "react";
import { FaDownload } from "react-icons/fa";

const MemberShipForm = () => {
  const downloadForm = () => {
    fetch("Membership-Form.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Membership-Form.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 fw-normal">Membership Form</h1>
          <p className="lead fw-normal">
            Welcome To Immigration and Passport Officers Association Trade Union
            Registration No: B-1834, ITF Affiliate No. BAN 014
          </p>
          <div className="d-flex d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-primary btn-lg rounded-0"
              onClick={downloadForm}
            >
              <FaDownload className="me-1" /> Download Form
            </button>
          </div>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>
    </>
  );
};

export default MemberShipForm;
