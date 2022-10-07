import React from "react";
import SongDetail from "./components/SongDetail";
import SongList from "./components/SongList";

export default function App() {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
}
