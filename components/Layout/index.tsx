import Footer from "../Footer";
import NavbarMenu from "../Navbar";
import TopHeading from "../TopHeading";

const Layout = ({ children }: DashboardLayoutProps) => {
  return (
    <div>
      <TopHeading />
      <NavbarMenu />
      <main> {children}</main>
      <Footer />
    </div>
  );
};

type DashboardLayoutProps = {
  children: React.ReactNode;
};
export default Layout;
