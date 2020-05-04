import React from 'react';

import FilmDisplay from './FilmDisplay'
import SearchBar from './SearchBar';
import Filmdatabase from './Filmdatabase';
import '../css/App.scss';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filmList: [],
      activateFilmList: false,
    }

    /* Componenet Refs */
    this.searchBarRef = React.createRef();
    this.search = this.search.bind(this);
  }


  /* Search Film Database */
  search(term, disable) {
    /* disable film list if input is empty */
    if (disable == true) {
      return this.clearSearch()
    }
    /* state variables */
    var filmList = [];
    var activateFilmList = [];
    var activateList = [];
    /* search function */
    if (term.length > 0) {
      Filmdatabase.search(term).then(jsonResponse => {
        if (typeof jsonResponse.results != 'undefined') {
          if (jsonResponse.results.length > 0) {
            filmList = jsonResponse.results;
            activateFilmList = true;
            activateList = true;
          }
          else {
            filmList = [];
            activateFilmList = false;
          }
        }
        /* set State function */
        return this.settingData(filmList, activateFilmList, activateList)
      })
    }

  }


  /* Clear Search */
  clearSearch() {
    this.searchBarRef.current.clearInputValue();
    this.setState({
      activateFilmList: false,
    })
  }

  settingData(filmList, activateFilmList, activateList) {
    this.setState({
      filmList: filmList,
      activateFilmList: activateFilmList,
      activateList: activateList,
    })
  }


  /* Render */
  render() {

    return (
      <div className="main_content_wrapper" >

        <div className="main_content_wrapper_overlay">
          <div className="content_wrapper">

            {/* (Top Row) */}
            <div className="content_top_row">
              <div className="logo"> <p className="logo_words">POWERED BY</p><p className="logo_words bold_word">THE MOVIE DB</p> </div>
              < SearchBar
                ref={this.searchBarRef}
                onChange={(term, disable) => this.search(term, disable)} />
            </div>


            {/* (Bottom Row) */}
            <div className="content_bottom_row">
              < FilmDisplay
                changeBackground={(event) => this.changeBackground(event)}
                /* (Componenet functions) */
                clearSearch={(event) => this.clearSearch(event)}
                displayFilmList={this.state.activateFilmList}
                /* (Componenet Info) */
                filmList={this.state.filmList}
              />
           
        




            </div>
          </div>
        </div>

      </div>

    );
  }

}

export default App;


