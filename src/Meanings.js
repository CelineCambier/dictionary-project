import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      <div>
        <div className="definition"><strong>Definitions: </strong>{props.meanings.definition}</div>
        <br/>
        <div className="example"><strong>Example: </strong>{props.meanings.example}</div>
        <br/>
        <Synonyms synonyms={props.meanings.synonyms}/>
      </div>
    </div>
  );
}
