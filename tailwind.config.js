tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    black: 'var(--brand-black, #FFF3DE)',
                    red: 'var(--brand-red, #2660A4)',
                    white: '#FFFFFF',
                }
            },
            fontFamily: {
                serif: ['"Uncut Sans"', '"Midnight Sans Regular"', 'sans-serif'],
                display: ['"Uncut Sans"', '"Midnight Sans Bold"', 'sans-serif'],
                mono: ['"Uncut Sans"', 'sans-serif'],
            }
        }
    }
}
