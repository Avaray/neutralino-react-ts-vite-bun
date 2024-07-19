import Centered from "../components/Centered"

type TechnologiesType = { name: string, logo: string, url: string, color?: boolean }

const technologies = [
  { name: 'Neutralinojs', logo: 'i-simple-icons:neutralinojs', url: 'https://neutralino.js.org/docs/', color: true },
  { name: 'React', logo: 'i-devicon:react', url: 'https://reactjs.org/' },
  { name: 'Wouter', logo: 'i-pajamas:severity-unknown', url: 'https://github.com/molefrog/Wouter', color: true },
  { name: 'TypeScript', logo: 'i-logos:typescript-icon', url: 'https://www.typescriptlang.org/' },
  { name: 'TailwindCSS', logo: 'i-logos:tailwindcss-icon', url: 'https://tailwindcss.com/docs/installation' },
  { name: 'UnoCSS', logo: 'i-vscode-icons:file-type-unocss', url: 'https://unocss.dev/' },
  { name: 'daisyUI', logo: 'i-logos:daisyui', url: 'https://daisyui.com/' },
  { name: 'Vite', logo: 'i-logos:vitejs', url: 'https://vitejs.dev/guide/why.html' },
  { name: 'BUN', logo: 'i-logos:bun', url: 'https://bun.sh/' },
  { name: 'Iconify', logo: 'i-line-md:iconify2', url: 'https://iconify.design/' },
]

const techDiv = (tech: TechnologiesType) => (
  <div key={tech.name} className='flex flex-row items-center m-4 aspect-square rounded-2xl h-32'>
    {/* two divs in column. first take space available, second is at bottom*/}
    <a href={tech.url} className={`flex flex-col items-center w-full h-full rounded-2xl`}>
      <span className={`flex-grow w-full h-full text-5xl text-white ${tech.logo} ${tech.color && 'bg-red'}`}></span>
      <span className='text-lg text-white self-center'>{tech.name}</span>
    </a>
  </div>
)

export default function Home() {
  return (
    <Centered>
      <div className="flex flex-row flex-wrap">
        {technologies.map(tech => techDiv(tech))}
      </div>
    </Centered>
  )
}
