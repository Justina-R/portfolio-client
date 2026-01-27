import Header from "../header/Header";
import { Hero } from "../hero/Hero";
import AboutMe from "../aboutMe/AboutMe";
import MyProjects from "../myProjects/MyProjects";
import DevTools from "../devTools/DevTools";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import "./MainLayout.css";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MainLayout({ children }) {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover 
        theme="light"
        transition={Bounce}
      />
      <Header />
      <main className="main-layout">
        <Hero />
        <AboutMe />
        <MyProjects />
        <DevTools />
        <Contact />
        <Footer />
        {children}
      </main>
    </>
  );
}
