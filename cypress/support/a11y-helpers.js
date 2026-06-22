export function logA11yViolations(violations) {
  violations.forEach(({ id, impact, description, nodes }) => {
    cy.log(`❌ [${impact.toUpperCase()}] Rule: ${id}`);
    cy.log(`   ${description}`);

    nodes.forEach(({ target, html, failureSummary }) => {
      cy.log(`   → Selector: ${target.join(' > ')}`);
      cy.log(`     HTML: ${html.substring(0, 100)}`);
      cy.log(`     Fix:  ${failureSummary}`);
    });
  });

  console.table(
    violations.flatMap(({ id, impact, nodes }) =>
      nodes.map(({ target }) => ({
        rule: id,
        impact,
        selector: target.join(' > ')
      }))
    )
  );
}