
import slider1 from '../assets/slider1.png'
import slider2 from '../assets/slide2.png'
import slider3 from '../assets/slider3.png'

const Slider = () => {

  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src={slider2}
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src={slider3}
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src={slider1}
            className="w-full"
          />
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default Slider;
