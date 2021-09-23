import "./styles.scss";
import "../../App.scss"
import React from "react";
import { Button } from "../Button";

export default function MainSection() {
  return (
    <div className="main-container">
      <h1>Ого, это написано на реакте? &#129488;</h1>
      <p>Да, именно на нём &#128526;</p>
      <div className="main-btns">
        <a
          href="https://github.com/EtozheVladOS"
          target="_blank"
          rel="noreferrer"
          className="btns"
        >
          <Button
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Мой GitHub
            <i class="fab fa-github" style={{ marginLeft: "10px" }} />
          </Button>
        </a>

        <a
          href="https://hh.ru/resume/5b8946eeff094a290c0039ed1f553468767141"
          target="_blank"
          rel="noreferrer"
          className="btns"
        >
          <Button
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Открыть резюме на HH
          </Button>
        </a>

      </div>
    </div>
  )
}
