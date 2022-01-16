module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", ],
    theme: {
        extend: {
            fontFamily: {
                Poppins: ['Poppins', 'sans-serif'],
                OpenSans: ['Open Sans', 'sans-serif'],
            },
            colors: {
                ColorPink: "hsl(322, 100%, 66%)",
                VeryPaleCyan: "hsl(193, 100%, 96%)",
                GrayishBlue: "hsl(208, 11%, 55%)",
                VeryDarkCyan: "hsl(192, 100%, 9%)",
                black: "#000"
            },
            backgroundImage: {
                'mobile-pattern': "url('./images/bg-hero-mobile.svg')",
                'desktop-pattern': "url('./images/bg-hero-desktop.svg')"
            }
        },
    },
    plugins: [],
}