import React from "react";
import ImageItem from "./ImageItem";
import ImageUploader from "./ImageUploader";

function ImageList({
  selectedFiles,
  mimeType,
  removeImage,
  setSelectedFiles,
  originalFiles,
}) {
  return (
    <div className="flex justify-center gap-5 flex-wrap pb-4">
      {selectedFiles?.map((file) => (
        <ImageItem image={file} mimeType={mimeType} removeImage={removeImage} />
      ))}
      <div className="flex flex-col justify-center items-center lg:w-1/5 w-5/12 p-2 rounded-lg text-white cursor-pointer">
        <ImageUploader
          rounded
          setSelectedFiles={setSelectedFiles}
          selectedFiles={originalFiles}
        />
      </div>
    </div>
  );
}

export default ImageList;
