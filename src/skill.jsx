import { useState } from "react";
const Skill = () => {
  // State to track whether to show all items or not
  const [showAll, setShowAll] = useState(false);

  // Function to toggle showAll state
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Data for your images and their corresponding names
  const imagesWithNames = [
    { src: "/pngegg (1).png", name: "React" },
    { src: "/pngegg (13).png", name: "Github" },
    { src: "/pngegg (3).png", name: "Java" },
    { src: "/pngegg (4).png", name: "NodeJS" },
    { src: "/pngegg (5).png", name: "Javascript" },
    { src: "/pngegg (11).png", name: "HTML" },
    { src: "/pngegg (7).png", name: "SQL" },
    { src: "/pngegg (8).png", name: "MongoDB" },
    { src: "/pngegg (9).png", name: "Python" },
    { src: "/pngegg (12).png", name: "CSS" },
    { src: "/pngegg (6).png", name: "Docker" },
    { src: "/pngegg (10).png", name: "Figma" },
    { src: "/aws.png", name: "AWS" },
    { src: "/pngegg (14).png", name: "Postman" },
    { src: "/pngegg (14).png", name: "DSA" },
  ];

  // Render only the first 8 items if showAll is false, otherwise render all items
  const renderImages = showAll ? imagesWithNames : imagesWithNames.slice(0, 10);

  return (
    <div className=" pt-5 pb-1 pr-10 pl-5 ml-5 mr-5  lg:pt-20 lg:pb-20 lg:pr-40 lg:pl-40 lg:ml-20 lg:mr-20 text-center">
      <ul className="flex  flex-wrap justify-between lg:justify-around items-center gap-14 lg:gap-28">
        {renderImages.map((image, index) => (
          <div key={index}>
            <li className="lg:border-none lg:rounded-lg bg-gray-800">
              <img src={image.src} alt="" className="lg:h-20 lg:w-20 h-12 w-12 " />
            </li>
            <div className="lg:mt-10 mt-5">
              <span className="text-white font-medium lg:text-xl ">
                {image.name}
              </span>
            </div>
          </div>
        ))}
      </ul>
      {/* Show "View All" button if there are more than 8 items */}
      {imagesWithNames.length > 8 && (
        <button
          onClick={toggleShowAll}
          className="bg-[#B700FB] text-white px-8 py-2 mt-16 mb-12 rounded lg:font-lg text-xl hover:bg-[#b800fbad] ">
          {showAll ? "Show Less" : "View All"}
        </button>
      )}
    </div>
  );
};

export default Skill;