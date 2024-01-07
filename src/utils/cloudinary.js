import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
// fs is file system -- it is in nodejs --- there are many methods in this
// here we need file path
// unlink ===

// make a method if i made a successful upload then we

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file has been uploaded successfully

    console.log(`file is uploaded on cloudinary`, response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file
    return null;
  }
};

export { uploadOnCloudinary };
