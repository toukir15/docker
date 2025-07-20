import { v2 as cloudinary } from 'cloudinary';
import config from '.';

cloudinary.config({
  cloud_name: "dtjvevtww",
  api_key: "879417483354127",
  api_secret: "M2McuD2YsAcH12F8olPXNAVOGAg",
  // cloud_name: config.cloudinary_cloud_name,
  // api_key: config.cloudinary_api_key,
  // api_secret: config.cloudinary_api_secret,
});

export const cloudinaryUpload = cloudinary;
