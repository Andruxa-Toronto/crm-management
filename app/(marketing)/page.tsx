import Footer from "./_components/footer";
import Heading from "./_components/heading";
import Heroes from "./_components/heroes";
import Logo from "./_components/logo";

const MargetingPage = () => {
  return (
  <div className=" min-h-full flex flex-col">
    <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Heading />
        <Heroes />
    </div>
    <Footer/>
  </div>
  );
};

export default MargetingPage;