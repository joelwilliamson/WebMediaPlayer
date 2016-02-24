"use strict";

function sel(selector){
    return document.querySelector(selector);
}

function getPreviousSongHolder(){
    return document.querySelector("#previousSongHolder")
}

function getCurrentSongHolder(){
    return document.querySelector("#currentSongHolder")
}

function getNextSongHolder(){
    return document.querySelector("#nextSongHolder")
}

function loadNextSong() {
    const nextSongUri = "file:///home/joel/Music/portal_still_alive.webm";
    const nextSongSource = document.createElement("source");
    nextSongSource.setAttribute("src", nextSongUri);
    nextSongSource.id = "nextSongSource";
    sel("#nextSong").appendChild(nextSongSource);
}

function play() {
    const cs = sel('#currentSong');
    if (cs) {
        cs.play();
    }
}

function pause() {
    const cs = sel('#currentSong');
    if (cs) {
        cs.pause();
    }
}

function advanceSong(){
    const nextSong = sel('#nextSong');
    const currentSong = sel('#currentSong');
    const previousSong = sel('#previousSong');
    pause();
    if (nextSong) {
        nextSong.remove();
        sel('#currentSongHolder').appendChild(nextSong);
        nextSong.id = 'currentSong';
    }
    if (currentSong) {
        currentSong.remove();
        sel('#previousSongHolder').appendChild(currentSong);
        currentSong.id = 'previousSong';
    }
    if (previousSong) {
        previousSong.remove();
    }
    play();
}
