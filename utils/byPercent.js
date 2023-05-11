import Compressor from "compressorjs";

async function byPercent(images, compressionPercentage) {
  const compressedImages = [];

  for (const image of images) {
    try {
      const compressedImage = await new Promise((resolve, reject) => {
        new Compressor(image, {
          quality: (100 - compressionPercentage) / 100,
          mimeType: "image/jpeg",
          success(result) {
            resolve(result);
          },
          error(err) {
            reject(err);
          },
        });
      });

      const compressedImageData = {
        url: URL.createObjectURL(compressedImage),
        initialSize: (image.size / 1024).toFixed(2),
        finalSize: (compressedImage.size / 1024).toFixed(2),
        compressedFile: compressedImage,
        path: image.path,
      };

      compressedImages.push(compressedImageData);
    } catch (error) {
      console.error(`Error compressing image ${image.name}: ${error}`);
    }
  }

  return compressedImages;
}

export default byPercent;
