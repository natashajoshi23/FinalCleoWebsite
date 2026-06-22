import { logA11yViolations } from '../support/a11y-helpers';

const pages = [
  '/',
  '/apply',
  '/blogs',
  '/contact',
  '/health-services',
  '/managed-services',
  '/privacy-policy',
  '/projects',
  '/sitemap',
  '/social-responsibility',
  '/team',
];

const modes = ['dark', 'light'];

modes.forEach((mode) => {
  describe(`Accessibility audit — ${mode} mode`, () => {
    pages.forEach((path) => {
      it(`has no a11y violations on ${path}`, () => {
        cy.visit(`http://localhost:3000${path}`);
        cy.get('html').invoke('attr', 'data-theme', mode);
        cy.injectAxe();
        cy.wait(1000);
        cy.window().then((win) => {
          cy.log('data-theme is: ' + win.document.documentElement.getAttribute('data-theme'));
          cy.log('page title is: ' + win.document.title);
        });
        cy.checkA11y(null, null, logA11yViolations, true);
      });
    });
  });
});