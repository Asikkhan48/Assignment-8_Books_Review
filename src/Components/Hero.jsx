import { Link } from "react-router-dom";


const Hero = () => (
  <div>
    {/* Hero Section */}

    <div className="hero -mt-17">
      <div className="hero-content bg-base-200 p-10 flex-col gap-10 lg:flex-row-reverse rounded-lg shadow-lg">
        <img
          src="/src/assets/Cover.jpg"
          className="max-auto rounded-lg shadow-2xl" />
        <div className="text-center">
          <h1 className="text-5xl font-bold text-[#131313]">Books to freshen up
            your bookshelf!</h1>
          <Link to="/books"><button className="btn btn-primary mt-7">View the List</button></Link>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;