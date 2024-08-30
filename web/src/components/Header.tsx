// import { app } from '@neutralinojs/lib'
import { Link } from 'wouter'

// const shutdownApp = () => app.exit();

export default function Header() {
  return (
    <div className="w-full navbar">
      <div className="navbar-start">
        <Link className='btn btn-lg btn-ghost' href="/"><span className='i-simple-icons:neutralinojs' />Neutralino</Link>
      </div>
      <div className="navbar-end gap-x-2">
        <Link className='btn btn-ghost' href="/">Home</Link>
        <Link className='btn btn-ghost' href="/info">Info</Link>
        <Link className='btn btn-ghost' href="/settings">Settings</Link>
        <Link className='btn btn-ghost' href="/about">About</Link>
        <Link className='btn btn-ghost' href="/something">Not Found</Link>
        {/* <Link className='btn btn-secondary' href='#' onClick={shutdownApp}><span className='i-material-symbols-light:close-rounded' /></Link> */}
      </div>
    </div>
  );
}
