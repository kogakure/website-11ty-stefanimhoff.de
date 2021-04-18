const outdent = require('outdent')({ newline: ' ' });

module.exports = {
  affiliate: function (text, asin) {
    const affiliateLink = `http://www.amazon.de/gp/product/${asin}?ie=UTF8&tag=stefanimhoffde-21&linkCode=as2&camp=1638&creative=6742&creativeASIN=${asin}`;

    const html = outdent`
    <a rel="nofollow noopener noreferrer" target="_blank" href="${affiliateLink}">${text}</a>`;

    return html;
  },
  book: function (asin, alt = '') {
    const amazonImageUrl = `https://images-na.ssl-images-amazon.com/images/P/${asin}.01.LZZZZZZZ.jpg`;
    const affiliateUrl = `http://www.amazon.de/gp/product/${asin}?ie=UTF8&tag=stefanimhoffde-21&linkCode=as2&camp=1638&creative=6742&creativeASIN=${asin}`;

    const html = outdent`
    <a class="book" href="${affiliateUrl}" rel="nofollow noopener noreferrer external" target="_blank">
      <img
        alt="${alt}"
        class="book-cover"
        src="${amazonImageUrl}"
      />
    </a>`;

    return html;
  },
  bookshelf: function (content) {
    return outdent`
    <div class="book-shelf">
      ${content}
    </div>`;
  },
  banner: function (content, summary, open = false) {
    let isOpen;

    if (open) {
      isOpen = 'open';
    } else {
      isOpen = '';
    }

    return outdent`
    <aside>
      <details ${isOpen} class="banner">
        <summary>${summary}</summary>
        ${content}
      </details>
    </aside>`;
  },
  flag: function (label, href) {
    let html;

    if (href) {
      html = outdent`
        <a
          rel="nofollow noopener noreferrer external" 
          target="_blank" 
          href="${href}" 
          class="flag" 
          title="${label}"
        >
          <span class="flag-hidden" aria-hidden="true">[</span>${label}<span class="flag-hidden" aria-hidden="true">]</span></a>`;
    } else {
      html = outdent`
      <span class="flag" title="${label}">
        <span class="flag-hidden" aria-hidden="true">[</span>${label}<span class="flag-hidden" aria-hidden="true">]</span></span>`;
    }

    return html;
  },
  netflix: function (id) {
    const html = outdent`
      <a 
        rel="nofollow noopener noreferrer external" 
        target="_blank" 
        href="https://www.netflix.com/title/${id}" 
        class="flag flag-netflix" 
        title="Netflix"
      >
        <span class="flag-hidden" aria-hidden="true">[</span>N<span class="flag-hidden" aria-hidden="true">]</span></a>`;

    return html;
  },
  primevideo: function (id) {
    const html = outdent`
    <a 
      rel="nofollow noopener noreferrer external" 
      target="_blank" 
      href="https://www.amazon.de/gp/video/detail/${id}" 
      class="flag flag-prime-video" 
      title="Prime Video"
    >
      <span class="flag-hidden" aria-hidden="true">[</span>P<span class="flag-hidden" aria-hidden="true">]</span></a>`;

    return html;
  },
  color: function (color, title = false, description = false) {
    const activeClass = 'color-swatch--is-active';
    let clickHandler;
    let descriptionHeadline;
    let descriptionText;
    let hasBackside;
    let titleHtml;

    if (description) {
      clickHandler = `onClick="this.classList.toggle('${activeClass}')"`;
      descriptionHeadline = 'Description';
      descriptionText = description;
      hasBackside = 'has-backside';
    } else {
      clickHandler = '';
      descriptionHeadline = '';
      descriptionText = '';
      hasBackside = '';
    }

    if (title) {
      titleHtml = `<h2 class="color-swatch-title">${title}</h2>`;
    } else {
      titleHtml = '';
    }

    const html = outdent`
    <div class="color-swatch ${hasBackside}" ${clickHandler}>
      <div class="color-swatch-flipper">
        <div class="color-swatch-front">
          <div class="color-swatch-color" style="background-color: ${color};"></div>
          <div class="color-swatch-info">
            ${titleHtml}
            <p class="color-swatch-value">${color}</p>
          </div>
        </div>
        <div class="color-swatch-back">
          <h2 class="color-swatch-back-title">${descriptionHeadline}</h2>
          <p>${descriptionText}</p>
        </div>
      </div>
    </div>`;

    return html;
  },
  colorstack: function (content) {
    return outdent`
    <div class="color-stack">
      ${content}
    </div>`;
  },
  more: function (text, url, external = false) {
    let externalLink;

    if (external) {
      externalLink =
        'rel="nofollow noopener noreferrer external" target="_blank"';
    } else {
      externalLink = '';
    }

    const html = outdent`
    <a href="${url}" ${externalLink}>${text}<span class="more-icon">
        <svg viewBox="0 0 24 24" width="1em" height="1em">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
        </svg>
      </span>
    </a>`;

    return html;
  },
  download: function (text, url) {
    const html = outdent`
    <a href="${url}">${text}<span class="download-icon">
        <svg viewBox="0 0 24 24" width="1em" height="1em">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3 19h18v2H3v-2zm10-5.828L19.071 7.1l1.414 1.414L12 17 3.515 8.515 4.929 7.1 11 13.17V2h2v11.172z" />
        </svg>
      </span></a>`;

    return html;
  },
  email: function (text, key = false) {
    const downloadText = 'Download public key (ProtonMail/GPG)';
    const link = outdent`
    <a id="email" class="objuscated" href="mailto:hey (at) imhoff (dot) name">
      ${text}
    </a>`;
    const keyDownload = outdent`
    <span id="lock-box" class="about-lock-box hidden">
      <a
        title="${downloadText}"
        aria-label="${downloadText}"
        href="/downloads/publickey.hey@imhoff.name-9cb867d4ccd2c1d7d9fde82f4b649797f3e007a9.asc"
      >
      <svg class="about-lock-icon" viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true">
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M19 10h1a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V11a1 1 0 011-1h1V9a7 7 0 1114 0v1zM5 12v8h14v-8H5zm6 2h2v4h-2v-4zm6-4V9A5 5 0 007 9v1h10z" />
        </svg>
      </a></span>`;

    return `${link} ${key ? keyDownload : ''}`;
  },
  youtube: function (id) {
    return outdent`
    <div class="video-wrapper">
      <iframe src="https://www.youtube.com/embed/${id}"
        frameborder="0" allowfullscreen       
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
      </iframe>
    </div> `;
  },
};
