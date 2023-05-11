import React from "react";

function ImageItem({ image, mimeType, removeImage }) {
  return (
    <div
      className="flex flex-col justify-between items-center lg:w-1/5 w-5/12 border-2 border-[#48a9a6] p-2 rounded-lg relative"
      key={image.url}
    >
      <button
        onClick={() => {
          removeImage(image.path);
        }}
        className="bg-white rounded-full w-5 h-5 text-[#bb0a21] font-bold flex justify-center items-center absolute -top-2 -right-2 "
      >
        x
      </button>
      <p className="text-white my-1">{` Initial ${image.initialSize} KB`}</p>
      <img src={image.url} alt={image.size} />
      <p className="text-white my-1">{`Final ${image.finalSize} KB`}</p>
      <a
        className="text-white no-underline lg:text-md text-xs px-4 py-2 bg-[#48a9a6] rounded-lg"
        href={image.url}
        download={`${image.path}.${mimeType}`}
      >
        Download
      </a>
    </div>
  );
}

export default ImageItem;
