const animation = 'slide-up';
const delay = 300;
const duration = 800;
const easing = 'ease-out-sine';

module.exports = {
  buildTime: new Date(),
  title: 'Stefan Imhoff',
  description: 'Front-End Web Developer from Hamburg, Germany',
  url: 'https://www.stefanimhoff.de',
  author: 'Stefan Imhoff',
  tagline: 'Front-End Web Developer • Designer • Minimalist • Japanophile',
  faviconPath: '/assets/images/branding/favicons/',
  twitter: '@kogakure',
  external: 'rel="nofollow noopener noreferrer" target="_blank"',
  animationDelay: `data-sal=${animation} data-sal-duration=${duration} data-sal-delay=${delay} data-sal-easing=${easing}`,
  animation: `data-sal=${animation} data-sal-duration=${duration} data-sal-easing=${easing}`,
};
