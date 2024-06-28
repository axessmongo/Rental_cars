import React from "react";

const testimonialData = [
  {
    name: "Anjali S",
    image: "",
    description:
      "Smooth booking process and great cars. Highly recommend Velocity Car Rentals!",
    aosDelay: "0",
  },
  {
    name: "Rajesh P",
    image: "",
    description:
      "Excellent service, clean cars, and friendly staff. Always my first choice.",
    aosDelay: "300",
  },
  {
    name: "Priya R",
    image: "",
    description:
      "Reliable and affordable. Made my trip hassle-free. Will rent again!",
    aosDelay: "1000",
  },
];
const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              What Our Clients Say About Us
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
              A car rental, hire car or car hire agency is a company that rents
              automobiles for short periods of time to the public, generally
              ranging from a few hours to a few weeks. It is often organized
              with numerous local branches (which allow a user to return a
              vehicle to a different location), and primarily located near
              airports or busy city areas and often complemented by a website
              allowing online reservations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg "
              >
                <div className="grid place-items-center ">
                  <img
                    src="https://picsum.photos/200"
                    alt=""
                    className="rounded-full w-20 h-20"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{skill.description}</p>
                <p className="text-center font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
