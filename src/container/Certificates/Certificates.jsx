import React, { useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Certificates.scss";
import { images } from "../../constants";

const certificates= [
{Name:"Mahmoud Chouchen", detail:"We worked together a lot, he is an excellent graphic designer and so talented in finding solutions fast.", organisation:"UI/UX Design", imgurl:images.mahmoud},
{Name:"Mahmoud Achref Ben Abdalh", detail:"His attention to detail is incredible - you catch even the smallest issues in your code", organisation:"Web devolper", imgurl:images.achref},
{Name:"Eya Lajimi", detail:"His ability to problem-solve and think critically is impressive - you come up with innovative solutions to complex challenges", organisation:"UI/UX Design", imgurl:images.eya},
{Name:"Aziz Belfeidi", detail:"His passion for development is infectious, and it motivates the rest of the team to do their best work.", organisation:"Vedio editor", imgurl:images.aziz},
{Name:"Mohamed Iheb Ounili", detail:"his communication skills are excellent - you're always clear and concise in your explanations and updates.", organisation:"Student", imgurl:images.iheb},

]
const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "certificates"]  | order(order asc)';

    
  }, []);

  return (
    <>
      {certificates.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={(certificates[currentIndex].imgurl)}
              alt={certificates[currentIndex].name}
            />
            <div className="app__testimonial-content">
              <p className="p-text">{certificates[currentIndex].detail}</p>
              <div>
                <h4 className="bold-text">{certificates[currentIndex].name}</h4>
                <h5 className="p-text">
                  {certificates[currentIndex].organisation}
                </h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? certificates.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === certificates.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Certificates, "app__testimonial"),
  "certificates",
  "app__primarybg"
);
