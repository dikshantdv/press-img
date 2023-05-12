import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfinity,
  faPersonRunning,
  faFileShield,
  faFile,
  faDumbbell,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

function FeaturesTab() {
  const features = [
    {
      icon: <FontAwesomeIcon icon={faFileShield} classNameName="text-9xl" />,
      title: "Secure",
      description:
        "We ensure that your Images are very secure. Why because we don't upload any Image anywhere on the Server.",
    },
    {
      icon: <FontAwesomeIcon icon={faPersonRunning} classNameName="text-9xl" />,
      title: "Fast",
      description:
        "Its compression processing is powerful. So, It takes less time to compress all the selected images.",
    },
    {
      icon: <FontAwesomeIcon icon={faInfinity} classNameName="text-9xl" />,
      title: "Unlimited",
      description:
        "This Image Compressor is free and provides you to use it unlimited times and compress image size online.",
    },
    {
      icon: <FontAwesomeIcon icon={faFile} classNameName="text-9xl" />,
      title: "Mutiple files",
      description:
        "On the tool, you can easily compress multiple images at a time. You can simply compress images and save them.",
    },
    {
      icon: <FontAwesomeIcon icon={faUsers} classNameName="text-9xl" />,
      title: "Easy to use",
      description:
        "This tool is designed for all users, advanced knowledge is not required. So, It's easy to compress image size.",
    },
    {
      icon: <FontAwesomeIcon icon={faDumbbell} classNameName="text-9xl" />,
      title: "Powerful",
      description:
        "You can access or use the Image Compressor online on the Internet using any browser from any operating system.",
    },
  ];

  return (
    <>
      <h2 className="text-center text-white text-bold text-2xl">
        Features of PressIMG
      </h2>
      <div className="flex flex-wrap justify-center items-center p-4 gap-2 md:gap-2 lg:gap-5">
        {features.map((item) => (
          <div
            key={item.title}
            className="w-full sm:w-1/2 md:w-1/3 lg:max-w-xs xl:max-w-sm flex-col gap-2 py-2 px-4 mb-4 flex justify-center items-center"
          >
            <div className="text-[#48a9a6] text-2xl">{item.icon}</div>
            <h3 className="text-white text-xl font-bold">{item.title}</h3>
            <p className="text-white/80 text-justify">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default FeaturesTab;
