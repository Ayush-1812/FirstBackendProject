import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'
// fs is file system it comes by default under nodejs 
cloudinary.config({ 
  cloud_name: 'process.env.CLOUDINARY_CLOUD_NAME', 
  api_key: 'process.env.CLOUDINARY_API_KEY', 
  api_secret: 'process.env.CLOUDINARY_API_SECRET'  
});

const uploadOnCloudinary=async (localFilePath)=>{
  try {
    if(!localFilePath) return;
    //upload the file on couldinary
    const response=await cloudinary.uploader.upload(localFilePath,{
      resource_type:'auto'
    })
    //fi;e has been uploaded succesfully
    console.log("file is uploaded on cloudinary ",response.url)
    return response
  } catch (error) {
    fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
    return null
  }
}

export default uploadOnCloudinary