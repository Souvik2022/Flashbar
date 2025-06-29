module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/globals.css",
  ],
  safelist: [
    'animate-shimmer-slide',
    'animate-spin-around',
    '[container-type:size]',
    '[aspect-ratio:1]',
    '[background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]',
    '[mask:none]',
    '[border-radius:0]',
    'blur-[2px]',
    '-inset-full',
    'h-[100cqh]',
    'size-full',
    'rounded-2xl',
    'px-4',
    'py-1.5',
    'text-sm',
    'font-medium',
    'shadow-[inset_0_-8px_10px_#ffffff1f]',
    'group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]',
    'group-active:shadow-[inset_0_-10px_10px_#ffffff3f]',
    '-z-30',
    '-z-20',
    'z-0',
    'z-10',
    'z-20',
    'z-30',
    'absolute',
    'relative',
    'overflow-hidden',
    'overflow-visible',
    'inset-0',
    'w-auto',
    'rotate-0',
    'flex',
    'items-center',
    'justify-center',
    'cursor-pointer',
    'whitespace-nowrap',
    'border',
    'border-white/10',
    'px-6',
    'py-3',
    'text-white',
    'dark:text-black',
    'transition-transform',
    'duration-300',
    'ease-in-out',
    'active:translate-y-px',
    'group',
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['Bricolage Grotesque', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
  		},
  		backgroundImage: {
  			gradient: 'linear-gradient(60deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82)'
  		},
  		animation: {
  			opacity: 'opacity 0.25s ease-in-out',
  			appearFromRight: 'appearFromRight 300ms ease-in-out',
  			wiggle: 'wiggle 1.5s ease-in-out infinite',
  			popup: 'popup 0.25s ease-in-out',
  			shimmer: 'shimmer 3s ease-out infinite alternate'
  		},
  		keyframes: {
  			opacity: {
  				'0%': {
  					opacity: 0
  				},
  				'100%': {
  					opacity: 1
  				}
  			},
  			appearFromRight: {
  				'0%': {
  					opacity: 0.3,
  					transform: 'translate(15%, 0px);'
  				},
  				'100%': {
  					opacity: 1,
  					transform: 'translate(0);'
  				}
  			},
  			wiggle: {
  				'0%, 20%, 80%, 100%': {
  					transform: 'rotate(0deg)'
  				},
  				'30%, 60%': {
  					transform: 'rotate(-2deg)'
  				},
  				'40%, 70%': {
  					transform: 'rotate(2deg)'
  				},
  				'45%': {
  					transform: 'rotate(-4deg)'
  				},
  				'55%': {
  					transform: 'rotate(4deg)'
  				}
  			},
  			popup: {
  				'0%': {
  					transform: 'scale(0.8)',
  					opacity: 0.8
  				},
  				'50%': {
  					transform: 'scale(1.1)',
  					opacity: 1
  				},
  				'100%': {
  					transform: 'scale(1)',
  					opacity: 1
  				}
  			},
  			shimmer: {
  				'0%': {
  					backgroundPosition: '0 50%'
  				},
  				'50%': {
  					backgroundPosition: '100% 50%'
  				},
  				'100%': {
  					backgroundPosition: '0% 50%'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("daisyui"), require("tailwindcss-animate")],
  daisyui: {
    themes: ["business", "dark"],
    base: "business",
  },
};
