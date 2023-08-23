import Image from "next/image";
import Button from "../components/Button";
import iphone from "../public/iphone-13.jpeg";

// https://tailwindcss.com/docs/installation

// run npm install

//  create the component for the product details

const Hero = () => {
  return (
    <div>
      <Button
        className="bg-purple-600 text-white px-6 margin-left: 0;"
        onClick={() => console.log("clicked")}
      >
        Hire Me!
      </Button>
      <Image src={iphone} alt="iphone" />
    </div>
  );
};

export default Hero;
