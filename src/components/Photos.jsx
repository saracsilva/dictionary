import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
const pexelsApiKey = process.env.REACT_APP_API_KEY;

function Photos({ word }) {
  const [isLoading, setIsloading] = useState(true);
  const [photos, setPhotos] = useState(null);
  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${pexelsApiKey}`,
        };
        const response = await axios.get(
          `https://api.pexels.com/v1/search?query=${word}&per_page=6`,
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
  }, []);

  return (
    <>
      {" "}
      {!isLoading && (
        <div className=" flex flex-col   md:grid  md:grid-cols-7  h-[500px] w-screen border-t-[1px] border-solid border-dark-blue">
          <div className="text-xl  font-black flex w-screen justify-center md:justify-end md:justify-self-end  py-3  border-b-[1px] text-center md:col-span-2 bg-none md:border-r-[1px] md:border-b-0  md:pr-8 md:pt-8 border-solid border-dark-blue">
            Pictures
          </div>
          <div className="flex w-screen">
            {photos.map((photo, index) => {
              return (
                <img
                  key={index}
                  src={photo.src.original}
                  alt={word}
                  className=" w-36 h-[500px] object-cover"
                />
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
