import React from "react";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      <div>
        <div className="definition">{props.meanings.definition}</div>
        <div className="example">{props.meanings.example}</div>
      </div>
    </div>
  );
}
