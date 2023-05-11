import { useState } from "react";
import { motion } from "framer-motion";

let tabs = ["jpeg", "png", "webp"];

export const Tabs = ({ mimeType, setMimeType }) => {
  const [activeTab, setActiveTab] = useState(mimeType);

  const handleChange = (tab) => {
    setActiveTab(tab);
    setMimeType(tab);
  };
  return (
    <>
      <p className=" mt-2 form-label text-white text-scss font-bold">
        Output format
      </p>
      <div className="flex justify-between bg-[#1c1c27] rounded-l-lg rounded-r-lg">
        {tabs.map((tab) => (
          <div key={tab} className="flex-1">
            <button
              onClick={() => handleChange(tab)}
              className={`lg:text-xl text-md font-medium px-4 py-2 relative w-full text-white/80 ${
                activeTab == tab ? "text-white" : "hover:text-white/60"
              }`}
            >
              {activeTab == tab && (
                <motion.div
                  layoutId="bubble"
                  className="absolute inset-0 w-full border-[#48a9a6] border-2 [#212d40]  rounded-lg"
                  transition={{ type: "spring", duration: 0.2 }}
                ></motion.div>
              )}
              {tab.toUpperCase()}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
