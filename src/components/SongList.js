import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
import { Button } from 'reactstrap';

class SongList extends React.Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title} style={{marginTop: "10px"}}>
                    <div className="right floated content">
                        <Button
                            onClick={()=>this.props.selectSong(song)}
                        >
                            Select
                        </Button>
                    </div>
                    <div className="content">
                        <h4>{song.title}</h4>
                    </div>
                </div>
            );
        });
    }

    render() {

        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong })(SongList);