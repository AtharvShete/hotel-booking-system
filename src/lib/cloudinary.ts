import { v2 as cloudinary } from "cloudinary";

// Configure cloudinary once
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface UploadResult {
  secure_url: string;
  public_id: string;
  [key: string]: unknown; // For other properties that might be returned
}

/**
 * Uploads an image to Cloudinary and returns the URL
 * @param imagePath - Local or remote path of the image to upload
 * @param publicId - Optional public ID for the image
 * @returns The secure URL of the uploaded image
 */
export async function uploadImage(
  imagePath: string,
  publicId?: string,
): Promise<string> {
  try {
    const uploadOptions: { public_id?: string } = {};

    if (publicId) {
      uploadOptions.public_id = publicId;
    }

    const result = (await cloudinary.uploader.upload(
      imagePath,
      uploadOptions,
    )) as UploadResult;
    return result.secure_url;
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    throw error;
  }
}

/**
 * Optimizes an image URL with auto-formatting and quality
 * @param publicId - The public ID of the uploaded image
 * @returns Optimized Cloudinary URL
 */
export function getOptimizedUrl(publicId: string): string {
  return cloudinary.url(publicId, {
    fetch_format: "auto",
    quality: "auto",
  });
}

/**
 * Transforms an image to specified dimensions
 * @param publicId - The public ID of the uploaded image
 * @param width - Desired width
 * @param height - Desired height
 * @returns Transformed Cloudinary URL
 */
export function getTransformedUrl(
  publicId: string,
  width = 500,
  height = 500,
): string {
  return cloudinary.url(publicId, {
    crop: "auto",
    gravity: "auto",
    width,
    height,
  });
}
