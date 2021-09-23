import "./styles.scss";
import React from "react";
import ProjectItem from "../ProjectItem";

export default function Projects() {
  return (
    <div className="projects">
      <h1>Проекты</h1>
      <div className="projects__container">
        <div className="projects__wrapper">
          <ul className="projects__items">
            <ProjectItem
              path="https://github.com/EtozheVladOS/project-mentor-search-1"
              text="Проект, цель которого помочь найти ментора для обучения в IT сфере."
              label="Mentor search"
              src="images/mentorSearch.png"
            />

            <ProjectItem
              path="https://github.com/EtozheVladOS/RedditNativeChallenge-1"
              text="Мобильное приложение для обмена новостями с возможностью создания и добавления контента."
              label="Reddit Native Challenge"
              src="images/RNC.jpeg"
            />
          </ul>

          <ul className="projects__items">
            <ProjectItem
              path="https://github.com/EtozheVladOS/YoutubeTelegramBot"
              text="Проект, написанный на старой-доброй Java. Данный бот в ответ на ссылку из Youtube отправляет вам аудиофайл из данного видео"
              label="YoutubeTelegramBot"
              src="images/youtubeBot.jpeg"
            />

            <ProjectItem
              path="https://github.com/EtozheVladOS"
              text="Мой gitHub"
              label="Мой gitHub"
              src="../../../public/images/git.png"
            />

            <ProjectItem
              path="https://github.com/EtozheVladOS/gif-lirics-bot"
              text="Бот, помогающий найти название песни по тексту, а также отправляющий веселые гифки. "
              label="Gif lirics bot"
              src="images/lyrics.jpeg"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}
