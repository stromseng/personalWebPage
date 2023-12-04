/** @type {import("tailwindcss").Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")["light"],
                },
                dark: {
                    ...require("daisyui/src/theming/themes")["dark"],
                    // "neutral-content": "#ffffff",
                    "base-content": "#ffffff",
                },
            },
        ],
    },
    darkMode: ["class", '[data-theme="dark"]'],
};
