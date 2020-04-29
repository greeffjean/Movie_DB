import React from 'react';
import '../css/SearchBar.scss';




class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputField: [],
      typingTimeout: 0
    }
    this.inputFieldRef = React.createRef();
  }



  /* Handle Input Change */
  handleInputChange(event) {
    /* disable list FilmInfo.js*/
    var disableList = null;
    /*( call search render smoothly )*/
    const self = this;
    const e = event.target.value;
    if (self.state.typingTimeout) {
      clearTimeout(self.state.typingTimeout);
    }
    self.setState({
      typingTimeout: setTimeout(function () {
        if (e.length == 0) {
          disableList = true;
        }
          self.props.onChange(e, disableList);
          self.setState({ inputField: e })
      }, 200)
    });



  }

  /* Clear Input Value */
  clearInputValue() {
    this.inputFieldRef.current.value = '';
  }

  /* Render */
  render() {
    return (
      <div className="search_bar_wrapper">
        <div className="input_field"> <input
          ref={this.inputFieldRef}
          defaultValue={this.inputField}
          placeholder="Search Movie Title..."
          onChange={(e) => this.handleInputChange(e)}></input>
        </div>
      </div>



    );
  }


}

export default SearchBar;