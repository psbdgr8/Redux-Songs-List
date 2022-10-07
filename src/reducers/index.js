import React from "react";
import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "Love me like you do", duration: "4:05" },
    { title: "Ride", duration: "2:35" },
    { title: "Back to you", duration: "5:25" },
    { title: "Hey Mama", duration: "3:05" },
    { title: "Thunder", duration: "5:35" },
    { title: "Believer", duration: "4:55" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});
