import React from 'react'

export const selectSong = (state) => {
    return{
        type: "SONG_SELECTED",
        payload: state
    };
};
