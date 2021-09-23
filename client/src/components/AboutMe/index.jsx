import "./styles.scss";
import React from "react";

export default function AboutMe() {
  return (
    <div className="aboutMe">
      <h1>Обо мне</h1>
      <div className="aboutMe__container">
        <div className="photo">
          <img src="../../images/vlados.jpg" alt="MyPhoto" />
        </div>
        <div className="text-container">
          <p className="text-item">
            Занимаюсь программированием уже больше года. Начинал с самостоятельного изучение Java, но спустя некоторое время осознал, что мне нравится, когда есть визуализация собственных действий, поэтому начал смотреть в сторону Frontend разработки.
            Довольно быстро обучаюсь, люблю работать в команде и писать код.
            Планы на год: изучить Typescript, Docker, и полностью освоить Webpack.
          </p>
        </div>
      </div>
    </div>
  )
}
