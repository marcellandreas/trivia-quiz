import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const MainLayout = ({ children }) => {
  return (
    <>
      <main>
        <Navbar />
        <section style={{ minHeight: "100vh" }}>{children}</section>
        <Footer />
      </main>
    </>
  );
};
