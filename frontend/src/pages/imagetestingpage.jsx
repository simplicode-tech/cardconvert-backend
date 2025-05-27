import { useState } from 'react';
import axios from 'axios';
import Button from '../components/Button';

export const UploadImage = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [uploadURL, setUploadURL] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!image) return alert("Please select an image!");

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post("http://localhost:5000/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setUploadURL(response.data.url);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {preview && <img src={preview} alt="Preview" width="200" />}
     <Button handleClick={handleUpload} value={'Submit'}/>
      {uploadURL && <p>Image uploaded: <a href={uploadURL} target="_blank">{uploadURL}</a></p>}
    </div>
  );
}