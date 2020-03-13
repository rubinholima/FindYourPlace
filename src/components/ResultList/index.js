import React from "react";
import "./style.css";


function ResultList(props) {
  return (

    <div className="slider">
      <figure className = "side">
        {props.results.map(result => (
          <img alt={result.title} key={result.id} src={result.images.original.url} />
        ))}
        </figure>
    </div>


  );
}



export default ResultList;
