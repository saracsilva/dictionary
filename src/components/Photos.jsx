import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
/* import { motion } from "framer-motion"; */
import { useParams } from "react-router-dom";
const pexelsApiKey = process.env.REACT_APP_API_KEY;

function Photos() {
  const [isLoading, setIsloading] = useState(true);
  const [photos, setPhotos] = useState(null);
  const { searchWord } = useParams();
  console.log(searchWord);
  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${pexelsApiKey}`,
        };
        const response = await axios.get(
          `https://api.pexels.com/v1/search?query=${searchWord}&per_page=6`,
          { headers }
        );
        const value = await response;
        setPhotos(value.data.photos);
        setIsloading(false);
      } catch (error) {
        console.log(error);
      }
    };

    setTimeout(() => {
      fetchPhoto();
    }, 100); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchWord]);

  return (
    <>
      {" "}
      {!isLoading && (
        <div className=" flex flex-col   md:grid  md:grid-cols-7  h-[500px] w-screen border-t-[1px] border-solid border-dark-blue">
          <div className="text-xl  font-black flex  justify-center md:justify-end md:justify-self-end  py-3  border-b-[1px] text-center md:col-span-2 bg-none md:border-r-[1px] md:border-b-0  md:pr-8 md:pt-8 border-solid border-dark-blue">
            Pictures
          </div>
          <div className="flex flex-col md:flex-row md:col-span-3 object-cover h-full ">
            {photos.map((photo, index) => {
              return (
                /*  <motion.div
                  whileHover={{ scaleX: 1.2 }}
                  style={{ originX: 0, scale: 1 }}
                  key={index}
                  className="w-full md:w-36 h-40 md:h-full  md:grid-flow-row object-scale-down "
                > */
                <div className="w-full md:w-36 h-40 md:h-full  md:grid-flow-row object-scale-down ">
                  <img
                    src={photo.src.original}
                    alt={searchWord}
                    className="object-cover hover:object-cover h-[500px]"
                  />
                </div>

                /*  </motion.div> */
              );
            })}
          </div>
        </div>
      )}
      {isLoading && <Loading />}
    </>
  );
}

export default Photos;
