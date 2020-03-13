import React from "react";

function SearchForm(props) {
  return (


    <form>
      <div className="form-group">
        
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a Gif"
          id="search"
        </div>

      </div>
    </form>
  );
}

export default SearchForm;
