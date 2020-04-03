import React from 'react';
import logo from './logo.svg';
import SearchBar from './SearchBar';
import FilmInfo from './FilmInfo';
import Filmdatabase from './Filmdatabase';
import '../css/App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      film_list: [],
      activate_film_list: false,
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
    var film_list = [];
    var activate_film_list = [];
    var activate_list = [];
    /* search function */
    if (term.length > 0) {
      Filmdatabase.search(term).then(jsonResponse => {
        if (typeof jsonResponse.results != 'undefined') {
          if (jsonResponse.results.length > 0) {
            film_list = jsonResponse.results;
            activate_film_list = true;
            activate_list = true;
          }
          else {
            film_list = [];
            activate_film_list = false;
          }
        }
        /* set State function */
        return this.settingData(film_list, activate_film_list, activate_list)
      })
    }

  }


  /* Clear Search */
  clearSearch() {
    this.searchBarRef.current.clearInputValue();
    this.setState({
      activate_film_list: false,
    })
  }

  settingData(film_list, activate_film_list, activate_list) {
    this.setState({
      film_list: film_list,
      activate_film_list: activate_film_list,
      activate_list: activate_list,
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
              < FilmInfo
                changeBackground={(event) => this.changeBackground(event)}
                /* (Componenet functions) */
                clearSearch={(event) => this.clearSearch(event)}
                display_film_list={this.state.activate_film_list}
                /* (Componenet Info) */
                film_list={this.state.film_list} />
            </div>
          </div>
        </div>

      </div>

    );
  }

}

export default App;


