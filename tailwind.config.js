/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './node_modules/tw-elements/dist/js/**/*.js'
    ],
    content: ["./node_modules/flowbite.{js,ts}"],
    theme: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin', 'tw-elements/dist/plugin.cjs')
    ],
}