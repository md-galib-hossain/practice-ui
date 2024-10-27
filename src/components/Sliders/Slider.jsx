import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true,
    centerPadding: "90px",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "30px",
        },
      },
    ],
  };

  return (
    <div className="mt-8 mx-auto">
      <div className="mx-auto w-full mt-16">
        <Slider {...settings}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((el) => (
            <div key={el} className="max-w-[350px] px-2">
              <div
                className={
                  el % 2 === 0
                    ? `flex justify-center items-center h-96 bg-cyan-100 border border-black`
                    : `flex justify-center items-center h-96 bg-cyan-400 border border-black`
                }
              >
                {el}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MainSlider;
