const { html } = require("common-tags");

function Card({ title, link, linkText, raised }) {
  return html`
    <div class="${`card_container ${raised ? `card_container_raised` : ``}`}">
      <h2 class="card_title">${title}</h2>
      <a class="card_link" href="${link}">${linkText}</a>
    </div>
  `;
}

module.exports = Card;
