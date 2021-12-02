import React from "react";
import "./App.css";
import { SearchBar, ImageList } from "./Components";

function App() {
  const [imageList, setImageList] = React.useState([]);
  const [isSearched, setIsSearched] = React.useState(false);
  const onSearchImage = (imageList) => {
    setIsSearched(true);
    setImageList(imageList);
  };
  const numberOfImages = imageList.length;
  return (
    <div className="App-body">
      <SearchBar isCenter={true} onSearchImage={onSearchImage} />
      {isSearched && (
        <div style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          {numberOfImages === 0
            ? "No Result"
            : `Found ${numberOfImages} results`}
        </div>
      )}
      <ImageList images={imageList} />
    </div>
  );
}

export default App;
