import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if(song === null) {
        return(
            <div>
                <h4>Song Details</h4>
                <p><strong>Select Song</strong></p>
            </div>
        );
    } else {
        return (
            <div>
                <h4>Song Details</h4>
                <p>
                    <strong>Artist: </strong>{song.artist}
                    <br />
                    <strong>Song: </strong>{song.title}
                    <br />
                    <strong>Album: </strong>{song.album}
                    <br />
                    <strong>Year: </strong>{song.year}
                    <br />
                    <strong>Duration: </strong>{song.duration}
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)