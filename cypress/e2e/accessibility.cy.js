const pages = [
  { name: 'Home', path: '/' },
  { name: 'Apply', path: '/apply' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'Contact', path: '/contact' },
  { name: 'Health Services', path: '/health-services' },
  { name: 'Managed Services', path: '/managed-services' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Projects', path: '/projects' },
  { name: 'Sitemap', path: '/sitemap' },
  { name: 'Social Responsibility', path: '/social-responsibility' },
  { name: 'Team', path: '/team' },
];

pages.forEach(({ name, path }) => {
  describe(`WCAG Accessibility [dark mode] - ${name}`, () => {
    it(`Has no accessibility violations on ${name} page`, () => {
      cy.visit(`http://localhost:3000${path}`);
      cy.injectAxe();
      cy.checkA11y(null, {
        runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa'] }
      });
    });
  });

  describe(`WCAG Accessibility [light mode] - ${name}`, () => {
    it(`Has no accessibility violations on ${name} page`, () => {
      cy.visit(`http://localhost:3000${path}`);
      cy.get('button[aria-label="Toggle dark and light mode"]').click({ force: true });
      cy.injectAxe();
      cy.checkA11y(null, {
        runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa'] }
      });
    });
  });
});
