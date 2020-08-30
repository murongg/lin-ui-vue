'use strict';

module.exports = function (modules) {
  const plugins = [
    require.resolve('@ant-design-vue/babel-plugin-jsx'),
    require.resolve('@babel/plugin-proposal-optional-chaining'),
    require.resolve('@babel/plugin-transform-object-assign'),
    require.resolve('@babel/plugin-proposal-object-rest-spread'),
    require.resolve('@babel/plugin-proposal-export-default-from'),
    require.resolve('@babel/plugin-proposal-class-properties'),
    require.resolve('@babel/plugin-syntax-dynamic-import'),
  ];
  plugins.push([
    require.resolve('@babel/plugin-transform-runtime'),
    {
      helpers: false,
    },
  ]);
  plugins.push([
    "@babel/plugin-transform-typescript",
    {
      isTSX: true,
    },
  ])
  return {
    presets: [
      [
        require.resolve('@babel/preset-env'),
        {
          modules,
          targets: {
            browsers: [
              'last 2 versions',
              'Firefox ESR',
              '> 1%',
              'ie >= 11',
              'iOS >= 8',
              'Android >= 4',
            ],
          },
        },
      ],
    ],
    plugins,
    env: {
      test: {
        plugins: [require.resolve('babel-plugin-istanbul')],
      },
    },
  };
};