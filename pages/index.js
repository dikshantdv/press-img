import { Tabs } from "../components/Tabs";
import ImageUploader from "../components/ImageUploader";
import { useEffect, useState } from "react";
import ImageList from "../components/ImageList";
import byPercent from "../utils/byPercent";
import downloadZip from "../utils/downloadZip";
import FeaturesTab from "../components/FeaturesTab";

export default function Home() {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [compressedFiles, setCompressedFiles] = useState(null);
  const [compressPercent, setCompressPercent] = useState(70);
  const [mimeType, setMimeType] = useState("jpeg");

  const compress = async () => {
    if (selectedFiles) {
      const images = await byPercent(selectedFiles, compressPercent);
      setCompressedFiles(images);
    }
  };
  const removeImage = (path) => {
    console.log(selectedFiles);
    const files = [...selectedFiles];
    const filteredFiles = files.filter((img) => img.path != path);
    console.log(filteredFiles);
    if (filteredFiles.length === 0) {
      return setSelectedFiles(null);
    }
    setSelectedFiles(filteredFiles);
  };

  useEffect(() => {
    compress();
  }, [selectedFiles]);

  return (
    <div className="lg:m-12 bg-[#11151c]">
      <div className=" h-20 bg-white"> ads</div>
      <h1 className="text-white font-bold text-3xl text-center mt-2">
        Compress Image
      </h1>
      <div className="p-8">
        {selectedFiles && compressedFiles ? (
          <ImageList
            selectedFiles={compressedFiles}
            mimeType={mimeType}
            removeImage={removeImage}
            setSelectedFiles={setSelectedFiles}
            originalFiles={selectedFiles}
          />
        ) : (
          <ImageUploader
            setSelectedFiles={setSelectedFiles}
            selectedFiles={selectedFiles}
          />
        )}
        <div className="flex gap-10">
          <div className="flex-1">
            <label
              htmlFor="range"
              className="form-label text-white text-scss font-bold"
            >
              Compression Percent
            </label>
            <input
              type="range"
              className="form-range"
              id="range"
              value={compressPercent}
              onChange={(e) => setCompressPercent(e.target.value)}
              min={0}
              max={100}
              step={5}
            ></input>
          </div>
          <p className="border-[#48a9a6] border-2 bg-[#212d40] text-white text-lg font-bold px-4 py-2 rounded-lg">
            {`${compressPercent}%`}
          </p>
        </div>
        <Tabs setMimeType={setMimeType} mimeType={mimeType} />
        <div className="d-grid gap-2 mt-4">
          <button
            className="text-white px-4 py-2 bg-[#48a9a6] rounded-lg"
            type="button"
            onClick={compress}
          >
            Compress
          </button>
          {selectedFiles && (
            <div className="flex gap-2">
              <button
                className="text-white flex-1 px-4 py-2 bg-[#48a9a6] rounded-lg"
                type="button"
                onClick={() => {
                  downloadZip(compressedFiles, mimeType);
                }}
              >
                Download all
              </button>
              <button
                className="text-white flex-1 px-4 py-2 bg-[#bb0a21] rounded-lg"
                type="button"
                onClick={() => {
                  setSelectedFiles(null);
                  setCompressedFiles(null);
                  setCompressPercent(70);
                }}
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </div>
      <FeaturesTab />
    </div>
  );
}
