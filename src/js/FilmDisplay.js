import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

import FilmInfo from "./FilmInfo"
import '../css/FilmInfo.scss';




class FilmDisplay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }


    clearSearch() {
        this.props.clearSearch()
    }



    render() {

        return (
            <Switch>
                <Route path="/" >
                < FilmInfo 
                        changeBackground={(event) => this.changeBackground(event)}
                        /* (Componenet functions) */
                        clearSearch={(event) => this.clearSearch(event)}
                        displayFilmList={this.props.displayFilmList}
                        retrieveFilmData={(info) => this.retrieveFilmData(info)}
                        /* (Componenet Info) */
                        filmList={this.props.filmList}  />
                  />
                  <Redirect to="/film/157336" />
                </Route>
                  
               
            </Switch>

        );
    }


}

export default FilmDisplay;
