import Image from "next/image";
import Header from "./components/Header";
import SignUpForm from "./components/SignUpForm";
import Footer from "./components/Footer";


function Home() {
  return (
    <div className="bg-[#f6fbfc] min-h-screen">
    <Header />
    <main className="container mx-auto px-4 py-8">
      <SignUpForm />
    </main>
    <Footer />
  </div>
  );
}
export default Home;
