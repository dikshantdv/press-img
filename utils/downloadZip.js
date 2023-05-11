import JSZip from "jszip";

function downloadZip(images, mimeType) {
  // Create a new instance of JSZip
  const zip = new JSZip();

  // Add each image to the zip file
  images
    .forEach((image, index) => {
      // Fetch the image as a blob
      // Add the blob to the zip file with a unique filename
      zip.file(`${image.path}.${mimeType}`, image.compressedFile);

      // If this is the last image, offer the zip file for download
      if (index === images.length - 1) {
        zip.generateAsync({ type: "blob" }).then((content) => {
          const link = document.createElement("a");
          link.download = "images.zip";
          link.href = URL.createObjectURL(content);
          link.click();
        });
      }
    })
    .catch((error) => {
      console.error(`Error downloading image ${index + 1}: ${error}`);
    });
}

export default downloadZip;
