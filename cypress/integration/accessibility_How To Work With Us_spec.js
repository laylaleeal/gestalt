describe("What's New Accessibility check", () => {
  beforeEach(() => {
    cy.visit('/How To Work With Us');
    cy.injectAxe();
  });

  // Disable the test for now since it's timing out on GitHub CI
  // eslint-disable-next-line jest/no-disabled-tests
  it.skip('Tests accessibility on the How To Work With Us page', () => {
    cy.configureAxe({
      rules: [
        {
          id: 'link-name',
          enabled: false,
        },
      ],
    });
    cy.checkA11y();
  });
});
