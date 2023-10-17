/* eslint-disable no-unused-vars */
import { useState } from "react";
import questions from "./Questions";

export default function Flashcards() {
  const [selectedId, setSelectedId] = useState("null");
  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <>
      <div className="flashcards">
        {questions.map((question) => (
          <div
            key={question.id}
            onClick={() => handleClick(question.id)}
            className={question.id === selectedId ? "selected" : ""}
          >
            <p>
              {question.id === selectedId ? question.answer : question.question}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
