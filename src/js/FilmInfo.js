import React from 'react';
import FilmItem from "./FilmItem"
import Filmdatabase from './Filmdatabase';
import '../css/FilmInfo.css';




class FilmInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            /* defualt information display */
            film_language: "English",
            main_banner: 'http://www.warnerbros.it/blog2/wp-content/uploads/2014/10/FL-17686.jpg',
            poster_image: 'http://fo4mw16y1z42edr6j2m4n6vt.wpengine.netdna-cdn.com/wp-content/uploads/interstellar-imaxv11.jpg',
            film_title: 'INTERSTELLAR',
            adult: 'true',
            film_detailed_description: 'Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.',
            film_genre: 'Adventure, Drama, Science Fiction',
            film_genre_descriprion: 'Legendary Entertainment, Syncopy, Lynda Obst Productions',
            film_release: '2014-11-05',
            vote_count: '24456',
            vote: '8.3 / 10',
        }
    }



    /*Film List Change*/
    retrieveFilmData(info) {
        /* storing new data  */
        var film_genre = [];
        var languages = [];
        /* genreating language string*/
        Filmdatabase.generateLanguageStrings().then(response => {
             response.map(value1 => {
                if (value1.iso_639_1 === info.original_language) {
                   languages.push(value1.english_name)
                }
            })
             /* genreating genre string*/
            Filmdatabase.generateGenreString().then(response => {
                info.genre_ids.map(value => {
                    response.genres.map(value2 => {
                        if(value == value2.id){
                            film_genre.push(`${value2.name}  `)
                        }
                    })
                    })
                    /* clearing search */
                    this.props.clearSearch();
                     /* returning new data */
                    return this.setState({
                        film_language: languages,
                        film_genre: film_genre,
                        main_banner: "https://image.tmdb.org/t/p/original" + info.backdrop_path,
                        poster_image: "https://image.tmdb.org/t/p/w500" + info.poster_path,
                        adult: "" + info.adult + "",
                        film_title: info.original_title,
                        film_detailed_description: info.overview,
                        film_release: info.release_date,
                        vote_count: info.vote_count,
                        vote: info.vote_average
                    })
                })
        })
    }





    render() {

        /* Render Film Data Into DOM */
        var film_list = [];
        if (typeof this.props.film_list != 'undefined') {
            if (this.props.film_list.length > 0) {
                this.props.film_list.map(value => {
                    film_list.push(< FilmItem
                        onClick={(info) => this.retrieveFilmData(info)}
                        info={value} key={value.id}
                        title={value.original_title} />);
                })
            }
        }

        return (

            <div className="film_info_wrapper">

                {/*Film Ineer Wrapper*/}
                <div className="film_info_inner_wrapper">

                    {/*Film Ineer Wrapper Left*/}
                    <div className="film_info_inner_wrapper_left">
                        <img className="film_image" src={this.state.poster_image} />
                    </div>

                    {/*Film Inner Wrapper Right*/}
                    <div className="film_info_inner_wrapper_right">
                        <div className={this.props.display_film_list == true ? "film_list active" : "film_list"}>
                            {film_list}
                        </div>

                        {/*Film Introduction*/}
                        <div className="film_introduction">
                            <p className="film_introduction_title" style={{ fontFamily: "Lato" }} > {this.state.film_title} </p>

                            <p className="film_introduction_story" style={{ fontFamily: "Oswald" }} > {this.state.film_detailed_description} </p>

                        </div>

                        {/*Film Information*/}
                        <div className="film_information">
                            <div id="film_genre"> <h2 style={{ fontFamily: "Oswald" }}>Genre:</h2> <h4 style={{ fontFamily: "Oswald" }}>{this.state.film_genre}</h4> </div>
                            <div className="film_information_addittional_row1">
                                <div className="row1_item1">
                                    <p style={{ fontFamily: "Lato" }}>Original Release:</p>
                                    <h2 style={{ fontFamily: "Oswald" }} className="aqua">{this.state.film_release}</h2>
                                </div>
                                <div className="row1_item2">
                                    <p style={{ fontFamily: "Lato" }}>Adult:</p>
                                    <h2 style={{ fontFamily: "Oswald" }} className="aqua">{this.state.adult}</h2>
                                </div>
                            </div>
                            <div className="film_information_addittional_row2">
                                <div className="row2_item1"> 
                                <p style={{ fontFamily: "Lato" }}>Original Language:</p> 
                                <h2 style={{ fontFamily: "Oswald" }} className="aqua">{this.state.film_language}</h2> 
                                </div>
                                <div className="row2_item2">
                                     <p style={{ fontFamily: "Lato" }}>Vote Average:</p>
                                      <h2 style={{ fontFamily: "Oswald" }} className="aqua">{this.state.vote}</h2>
                                       </div>


                            </div>
                        </div>
                    </div>


                </div>
                {/* Background Tint */}
                <div style={{ background: `url("${this.state.main_banner}") no-repeat`, backgroundSize: "cover" }} className="background"> <div className="background_tint"></div> </div>
            </div>



        );
    }


}

export default FilmInfo;
