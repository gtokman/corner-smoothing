const plugin = require('./index.ts');

const svgMask1x = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 150 150'%3E%3Crect width='150' height='150' rx='50' fill='black'/%3E%3C/svg%3E`;

describe('Smooth Corners Plugin', () => {
  it('should generate basic utilities with default sizes', () => {
    const utilities = {};
    const addUtilities = jest.fn(utils => {
      Object.assign(utilities, utils);
    });

    plugin.handler({ addUtilities, theme: () => ({}) });

    // Test presence of utility classes
    expect(Object.keys(utilities)).toContain('.smooth-corners-sm');
    expect(Object.keys(utilities)).toContain('.smooth-corners-md');
    expect(Object.keys(utilities)).toContain('.smooth-corners-lg');

    // Test mask-border properties
    expect(
      utilities['.smooth-corners-sm']['@supports (mask-border-width: 60px)'][
        'mask-border'
      ]
    ).toBe(`url("${svgMask1x}") 49% fill / 25px`);
  });
});
