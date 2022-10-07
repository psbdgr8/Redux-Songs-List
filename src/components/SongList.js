import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const SongList = (props) => {
  function RenderList() {
    return props.songs.map((song) => {
      return (
        <div key={song.title} className="item">
          <div className="right floated content">
            <button
              onClick={() => props.selectSong(song)}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  return (
    <div className="ui divided list">
      <RenderList />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    songs: state.songs,
  };
}

export default connect(mapStateToProps, { selectSong })(SongList);
