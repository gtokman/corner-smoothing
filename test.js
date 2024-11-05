const plugin = require('./index.ts');

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
      utilities['.smooth-corners-md']['@supports (mask-border-width: 50px)'][
        'mask-border'
      ]
    ).toBe('url("./mask@1x.png") 49% fill / 60px');
  });
});
