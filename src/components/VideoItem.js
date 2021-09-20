import React from "react";

function VideoItem({ url, img, tit, desc, counter, onClick }) {
  const clickHandler = (e) => {
    onClick(tit);
  };

  return (
    <div>
      {counter === 0 ? (
        <div className="main-video">
          <iframe
            width="560"
            height="315"
            src={url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="main-video-title">
            {tit}
          </p>
          <p className="main-video-description">{desc}</p>
        </div>
      ) : (
        <div className="video-pictures-">
          <img src={img} alt="Image" onClick={clickHandler} />
          <p className="video-titles" > {tit}
          </p>
        </div>
      )}
    </div>
  );
}

export default VideoItem;
