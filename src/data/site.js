const animation = 'slide-up';
const delay = 300;
const duration = 800;
const easing = 'ease-out-sine';

module.exports = {
  buildTime: new Date(),
  homepageTitle: 'Front-End Web Developer from Hamburg, Germany',
  owner: 'Stefan Imhoff',
  tagline: 'Front-End Web Developer • Designer • Minimalist • Japanophile',
  external: 'rel="nofollow noopener noreferrer" target="_blank"',
  animationDelay: `data-sal=${animation} data-sal-duration=${duration} data-sal-delay=${delay} data-sal-easing=${easing}`,
  animation: `data-sal=${animation} data-sal-duration=${duration} data-sal-easing=${easing}`,
};
