const purgecss = require('@fullhuman/postcss-purgecss')
const cssnano = require('cssnano');

const dev = [
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),
]

const prod = [
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),
    cssnano({
        preset: 'default'
    }),
    purgecss({
        content: ['./src/**/*.html'],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
]

module.exports = env => ({
    // Add you postcss configuration here
    // Learn more about it at https://github.com/webpack-contrib/postcss-loader#config-files
    plugins: env.mode === 'production' ? prod : dev,
});