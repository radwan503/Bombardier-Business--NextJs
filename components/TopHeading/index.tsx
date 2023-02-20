import Image from "next/image";
import Link from "next/link";
import logo from "../../public/image/logo.svg";

const TopHeading = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center py-2">
        <div>
          <Link href="/">
          <Image
            src={logo}
            className="brand-logo"
            alt="Picture of the author"
            height={50}
            width={100}
            style={{width:"190px"}}
          />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeading;
