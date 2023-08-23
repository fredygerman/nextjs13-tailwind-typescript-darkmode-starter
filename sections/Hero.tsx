import Button from "../components/Button";
import iphone from "../public/iphone-13.jpeg"

const Hero = () => {
  return (
    <section className="mt-16">
      <h1 className="text-7xl font-bold">
        Hi Im <span className="dark:text-purple-600">Fredy</span>
      </h1>
      <h3 className="text-4xl my-3">I am Web Designer</h3>
      <p className="text-700 mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        quibusdam autem doloremque beatae iure, nihil fugit doloribus cum soluta
        modi!
      </p>
      
      
      <Button
        className="bg-purple-600 text-white px-6 margin-left: 0;"
        onClick={() => console.log("clicked")}
      >
        Hire Me!
      </Button>
      <img></img>

      <div className="flex-container">
                <nav className="nav-bar">
                    <ul>
                        <li>
                          
                          <img src="resources/Home.svg"></li>
                        <li><img src="resources/Orders.svg"></li>
                        <li><img src="resources/Products.svg"></li>
                        <li><img src="resources/profile.svg"></li>
                        <li><img src="resources/Statistics.svg"></li>
                    </ul>
                </nav>
                <div className="">Lorem  rijgnerngkdjgrgrgr</div>
                <div className="">uenhfunhwrjbgr3</div>
            </div>
    </section>
  );
};

export default Hero;
