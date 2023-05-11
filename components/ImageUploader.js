import byPercent from "../utils/byPercent";
import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

function ImageUploader({ setSelectedFiles, rounded, selectedFiles }) {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    const validFiles = acceptedFiles.filter((file) =>
      file.type.startsWith("image/")
    );
    console.log(validFiles);
    if (validFiles) {
      if (selectedFiles) {
        console.log("fdv");
        return setSelectedFiles((p) => [...p, ...validFiles]);
      }
      setSelectedFiles(validFiles);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/png",
    // acceptFiles: "image/png",
    maxFiles: 10,
    onError: () => {
      setError("vcx");
    },
    onDropRejected: () => {
      setError("vcx2");
    },
  });

  if (rounded) {
    return (
      <div
        {...getRootProps()}
        className={`dropzone ${
          isDragActive ? "active" : ""
        } w-2/3 bg-[#212d40] aspect-square rounded-full flex flex-col items-center justify-center`}
      >
        <input {...getInputProps()} accept="image/*" />
        <p className="text-white mb-0">+</p>
        <p className="text-white mb-0 text-sm">Add more</p>
      </div>
    );
  }

  return (
    <div
      {...getRootProps()}
      className={`dropzone ${
        isDragActive ? "active" : ""
      } lg:h-64 h-72 border-2 border-[#48a9a6] bg-[#212d40] rounded-lg mb-4 flex justify-evenly items-center flex-col`}
    >
      <input {...getInputProps()} accept="image/*" />
      <p className=" text-white">
        {isDragActive
          ? "Drop the Images here ..."
          : "Drop Images here to start compression"}
      </p>
      <p className="text-white px-4 py-2 bg-[#48a9a6] rounded-lg">
        or click here to browse
      </p>
    </div>
  );
}

export default ImageUploader;
