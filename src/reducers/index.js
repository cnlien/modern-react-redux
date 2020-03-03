import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        {
            artist: 'Brand New',
            title: 'The Quiet Things that No One Ever Knows',
            album: 'Deja Entendu',
            year: "2003",
            duration: "4:01"
        },

        {
            artist: 'Taking Back Sunday',
            title: 'Cute Without The E',
            album: 'Tell All Your Friends',
            year: "2002",
            duration: "3:32"
        },

        {
            artist: 'Underoath',
            title: 'Reinventing Your Exit',
            album: 'They\'re Only Chasing Safety',
            year: "2005",
            duration: "4:24"
        },
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return (action.payload);
    } else {
        return (selectedSong);
    }
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})