import React from "react";
import Meanings from "./Meanings";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          <h3 className="Phonetic">{props.results.phonetic}</h3>
        </section>
        {props.results.meanings?.map(function (meanings, index) {
          return (
            <section key={index}>
              <Meanings meanings={meanings} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
