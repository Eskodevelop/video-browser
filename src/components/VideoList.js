import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoItem from "./VideoItem";

const KEY = process.env.REACT_APP_API_KEY;

function VideoList({ setSearch, search }) {
  const [data, setData] = useState([]);
  const [pictures, setPictures] = useState([]);
  const [titles, setTitles] = useState([]);
  const [descriptions, setDescriptions] = useState([]);

  var URL =
    "https://www.googleapis.com/youtube/v3/search?part=snippet&key=" +
    KEY +
    "&type=video&q=" +
    search +
    "&maxResults=5";

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        let links = response.data.items.map(
          (obj) => "https://www.youtube.com/embed/" + obj.id.videoId
        );
        setData(links);

        let newTitle = response.data.items.map((obj) => obj.snippet.title);
        setTitles(newTitle);

        let newDescription = response.data.items.map(
          (obj) => obj.snippet.description
        );
        setDescriptions(newDescription);

        let newPicture = response.data.items.map(
          (obj) => obj.snippet.thumbnails.medium.url
        );
        setPictures(newPicture);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [search]);

  const onClick = (tit) => {
    setSearch(tit);
  };

  return (
    <div>
      {" "}
      {data.map((urls, i) => {
        return (
          <VideoItem
            key={i}
            url={urls}
            img={pictures[i]}
            tit={titles[i]}
            desc={descriptions[i]}
            counter={i}
            onClick={onClick}
          />
        );
      })}
    </div>
  );
}

export default VideoList;
