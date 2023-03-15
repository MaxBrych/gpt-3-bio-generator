import { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const Home = () => {
  const [responseImage, setResponseImage] = useState<string | null>(null);

  const onDrop = async (acceptedFiles: File[]) => {
    if (!acceptedFiles.length) return;

    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append("size", "auto");
    formData.append("image_file", file, file.name);

    try {
      const response = await axios({
        method: "post",
        url: "https://api.remove.bg/v1.0/removebg",
        data: formData,
        responseType: "arraybuffer",
        headers: {
          "X-Api-Key": process.env.NEXT_PUBLIC_REMOVE_BG_API_KEY,
        },
      });

      if (response.status !== 200) {
        console.error("Error:", response.status, response.statusText);
        return;
      }

      const base64Image = Buffer.from(response.data, "binary").toString(
        "base64"
      );
      setResponseImage(`data:image/png;base64,${base64Image}`);
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      image: ["*"],
    },
  });

  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full md:max-w-[90vw]  min-h-screen px-4 pt-6 text-center md:h-full bg-cyan-95 md:flex-auto md:px-12 md:rounded-3xl ">
      <div
        {...getRootProps()}
        className="flex items-center justify-center w-64 h-64 border-4 border-gray-300 border-dashed rounded-md cursor-pointer bg-cyan-95"
      >
        <input {...getInputProps()} />
        <p className="text-center">
          Bild per Drag & Drop oder Klick hier hochladen
        </p>
      </div>
      {responseImage && (
        <div className="mt-8">
          <img src={responseImage} alt="Processed" />
        </div>
      )}
    </div>
  );
};

export default Home;
