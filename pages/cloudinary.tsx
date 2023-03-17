import { CldImage } from "next-cloudinary";
import Image from "next/image";

const transformedSrc =
  "https://res.cloudinary.com/dkcl1igvd/image/upload/e_bgremoval/c_thumb,g_faces,w_987,h_987,e_tint:40:253f8c/v1679037973/samples/people/smiling-man.jpg";

const Cloudi = () => {
  return (
    <>
      <h1>YOur Image</h1>
      <CldImage
        src={transformedSrc}
        alt={""}
        text={{
          text: "Next Cloudinary",
          color: "white",
          font_size: 10,
        }}
        sizes="50vw"
        width="987"
        height="987"
        crop="thumb"
        gravity="faces"
      />
    </>
  );
};

export default Cloudi;
