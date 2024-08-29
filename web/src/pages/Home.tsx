// import Centered from "../components/Centered"

// import WouterLogo from '../assets/wouter.svg'

type TechnologiesType = { name: string, logo: string, url: string, color?: string }

const technologies = [
  { name: 'Neutralinojs', logo: 'i-simple-icons:neutralinojs', url: 'https://neutralino.js.org/docs/', },
  { name: 'React', logo: 'i-devicon:react', url: 'https://reactjs.org/' },
  { name: 'Wouter', logo: 'i-wouter', url: 'https://github.com/molefrog/Wouter' },
  { name: 'TypeScript', logo: 'i-logos:typescript-icon', url: 'https://www.typescriptlang.org/' },
  { name: 'TailwindCSS', logo: 'i-logos:tailwindcss-icon', url: 'https://tailwindcss.com/docs/installation' },
  { name: 'UnoCSS', logo: 'i-vscode-icons:file-type-unocss', url: 'https://unocss.dev/' },
  { name: 'daisyUI', logo: 'i-daisyui', url: 'https://daisyui.com/' },
  { name: 'Vite', logo: 'i-logos:vitejs', url: 'https://vitejs.dev/guide/why.html' },
  { name: 'BUN', logo: 'i-logos:bun', url: 'https://bun.sh/' },
  { name: 'Iconify', logo: 'i-line-md:iconify2', url: 'https://iconify.design/' },
]

const techDiv = (tech: TechnologiesType) => (
  <div key={tech.name} className='w-1/5 min-w-[100px] max-w-[200px] aspect-square m-2 hover:animate-fade-in'>
    <a href={tech.url} className={"flex flex-col w-full h-full rounded-2xl"}>
      <span className={`flex-grow w-full h-full text-5xl text-white ${tech.logo}`} />
      <span className='text-lg text-white self-center'>{tech.name}</span>
    </a>
  </div>
)

export default function Home() {
  return (
    <>
      {/* <div className="flex flex-row flex-wrap"> */}
      <div className="max-w-640px flex flex-wrap justify-center items-center gap-0">
        {technologies.map(tech => techDiv(tech))}
      </div>
    </>
  )
}
