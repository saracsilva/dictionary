import React, { useEffect, useState } from "react";
import axios from "axios";

import Phonetic from "./Phonetic";
import Title from "./Title";
import { useNavigate, useParams } from "react-router-dom";

import Info from "./Info";
import Photos from "./Photos";
import Loading from "./Loading";

function SearchWord() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [isLoading, setIsloading] = useState(true);
  const [photos, setPhotos] = useState(null);
  const { searchWord } = useParams();

  const pexelsApiKey = process.env.REACT_APP_API_KEY;

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
      } catch (error) {
        console.log(error);
      }
    };
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
        );
        const value = await response.data[0];
        setIsloading(false);
        setData(value);
      } catch (error) {
        navigate(`/sorry`, { state: { search: searchWord } });
      }
    };
    setTimeout(() => {
      fetchData();
      fetchPhoto();
    }, 100); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {!isLoading && (
        <div className=" flex flex-col  items-center h-full ">
          <div className="flex flex-col md:flex-row gap-6  md:gap-36 items-center">
            <Title title={data.word} />
            <div>
              {data.phonetics.map((phonetic, index) => {
                return (
                  <div className=" p-3 " key={index}>
                    <Phonetic audio={phonetic.audio} text={phonetic.text} />
                  </div>
                );
              })}
            </div>
          </div>
          {data.meanings.map((meaning, index) => {
            return (
              <div className="h-full" key={index}>
                <Info data={meaning} />
              </div>
            );
          })}
          {photos && <Photos photos={photos} word={searchWord} />}
        </div>
      )}
      {isLoading && <Loading />}
    </>
  );
}

export default SearchWord;
