import React, { useState } from "react";
import { Input } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

function Search({ setSearch }) {
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const clickHandler = (e) => {
    if (input === "") {
      return alert("Please fill the box");
    }

    setSearch(input);
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") clickHandler();
  };

  return (
    <div className="input-btn">
      <Input
        type="text"
        placeholder="Search..."
        onChange={changeHandler}
        onKeyDown={enterHandler}/>
      
      <Button type="button" onClick={clickHandler}>
        <i className="fa fa-search"></i>
      </Button>
    </div>
  );
}

export default Search;
