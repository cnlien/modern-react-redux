import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

// COMPONENTS
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {

    return (
      <div className="ui container grid" style={{marginTop: "30px"}}>
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

export default App;