import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3 className="partOfSpeech">{props.meanings.partOfSpeech}</h3>
      <div>
        <div className="definition">{props.meanings.definition}</div>

        <div className="example">{props.meanings.example}</div>

        <Synonyms synonyms={props.meanings.synonyms} />
      </div>
    </div>
  );
}
