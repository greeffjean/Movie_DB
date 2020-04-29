import React from 'react';
import "../css/FilmItem.scss";



class FilmItem extends React.Component {
  /* Onclick Fetch Data */
  onClick() {
    this.props.onClick(this.props.info);
  }


  render() {
    return (
      <div  onClick={(e) => this.onClick()} className="film_item_wrapper">
        <div className="film_item"> <a> {this.props.title} </a> </div>
      </div>
    );
  }


}

export default FilmItem;