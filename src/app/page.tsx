import About from "@/components/About";
import { ModalProvider } from "@/components/CreateContext";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Modal from "@/components/Modal";
import Navbar from "@/components/Navbar";
import News from "@/components/News";
import Partners from "@/components/Partners";
import Products from "@/components/Products";
import Services from "@/components/Services";

export default function page() {
  return (
    <>
      <ModalProvider>
        <Modal />
        <header className="bg-[url('../assets/images/hospital-bg.png')] bg-cover  bg-no-repeat bg-center h-screen bg-gray-100 max-h-[900px]">
          <div className="container-custom mx-auto">
            <Navbar />
            <Hero />
          </div>
        </header>
        <main>
          <div className="container-custom">
            <Products />
          </div>
          <div>
            <h2 className="text-2xl text-center py-10">УСЛУГИ</h2>
            <div className="relative">
              <div className="bg-[url('../assets/images/hospital-bg.png')] bg-image absolute top-0 left-0 w-full h-full"></div>
              <div className="container-custom">
                <Services />
              </div>
            </div>
          </div>
          <div className="container-custom">
            <About />
            <News />
            <Partners />
          </div>
        </main>
        <footer className="bg-[url('../assets/images/hospital-bg.png')] bg-cover bg-center">
          <div className="container-custom">
            <Footer />
          </div>
        </footer>
      </ModalProvider>
    </>
  );
}
