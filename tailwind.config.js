module.exports = {
    // Uncomment the line below to enable the experimental Just-in-Time ("JIT") mode.
    // https://tailwindcss.com/docs/just-in-time-mode
    // mode: "jit",
    theme: {
        screens: {
            "xl": "1366px",
            // => @media (min-width: 1366px) { ... }
            "1xl": "1440px",
            "2xl": "1920px",
            // => @media (min-width: 1920px) { ... }
        },
        fontFamily: {
            'sans': ['sans-serif'],
            title: "Playfair Display",
        },
    },
    variants: {},
    plugins: [],
    purge: {
        // Filenames to scan for classes
        content: [
            "./src/**/*.html",
            "./src/**/*.js",
            "./src/**/*.jsx",
            "./src/**/*.ts",
            "./src/**/*.tsx",
            "./src/**/**/*.tsx",
            "./public/index.html",
        ],
        // Options passed to PurgeCSS
        options: {
            // Whitelist specific selectors by name
            // safelist: [],
        },
    },
};