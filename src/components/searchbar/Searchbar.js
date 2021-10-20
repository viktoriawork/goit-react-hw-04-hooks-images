import { useState } from "react";
import PropTypes from "prop-types";
import { SearchbarStyled } from "./SearchbarStyled";

const Searchbar = ({ onSubmit }) => {
  const [searchImg, searchImgState] = useState("");

  const onHandleChange = (e) => {
    const { value } = e.target;
    searchImgState(value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchImg);
    searchImgState("");
  };

  return (
    <SearchbarStyled>
      <form className="SearchForm" onSubmit={onHandleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchImg"
          value={searchImg}
          onChange={onHandleChange}
        />
      </form>
    </SearchbarStyled>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;

// const initialState = {
//   searchImg: '',
// }

// class Searchbar extends Component {
//   state = {
//     ...initialState,
//   }

//   onHandleChange = (e) => {
//     const {name,value} = e.target;
//     this.setState({
//       [name]:value,
//     })
//   }

//   onHandleSubmit = (e) => {
//     e.preventDefault()
//     this.props.onSubmit(this.state.searchImg);
//     this.setState({
//       ...initialState
//     })
//   }

//   render() {
//     return (
//       <SearchbarStyled>
//       <form className="SearchForm" onSubmit={this.onHandleSubmit}>
//        <button type="submit" className="SearchForm-button">
//         <span className="SearchForm-button-label">Search</span>
//        </button>

//       <input
//         className="SearchForm-input"
//         type="text"
//         autoComplete="off"
//         autoFocus
//         placeholder="Search images and photos"
//         name='searchImg'
//         value={this.state.searchImg}
//         onChange={this.onHandleChange}
//       />
//       </form>
//     </SearchbarStyled>
//     );
//   }
// }

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func,
// };

// export default Searchbar;
