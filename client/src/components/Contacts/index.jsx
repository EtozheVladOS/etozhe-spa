import "./styles.scss";
import React from 'react';

export default function ContactItem() {
  return (
    <div className="contacts">
      <h1>Контакты</h1>
      <div className="contacts-container">
        <div className="contact-item">
          <div className="left-content">
            <i class="fab fa-telegram" />
          </div>
          <div className="right-content">
            <h6>Telegram</h6>
            <p>@etozhevlados</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="left-content">
            <i class="fas fa-envelope" />
          </div>
          <div className="right-content">
            <h6>Почта</h6>
            <p>faustus15@mail.ru</p>
          </div>
        </div>
      </div>
    </div>
  )
}
