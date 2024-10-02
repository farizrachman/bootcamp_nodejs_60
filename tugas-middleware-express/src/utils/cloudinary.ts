import { v2 as cloudinary } from "cloudinary";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
} from "./env";

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

// cloudinary.config({
//   cloud_name: "druuy0ht8", // silahkan pakai menggunakan cloud name kalian
//   api_key: "126745977758778", // silahkan pakai menggunakan api key kalian
//   api_secret: "CRXFCMqv6RAjmgMClU7y62_b9SQ", // silahkan pakai menggunakan api secret kalian
// });

export const handleUpload = async (file: string) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      file,
      {
        resource_type: "auto",
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
};

export default cloudinary;
