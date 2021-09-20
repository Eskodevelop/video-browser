import React, { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import VideoList from "./VideoList";

function VideoBrowser() {
  const [search, setSearch] = useState("Motivational videos");

  return (
    <div>
      <Header />
      <Search setSearch={setSearch} />
      <VideoList setSearch={setSearch} search={search}/>
    </div>
  );
}

export default VideoBrowser;
