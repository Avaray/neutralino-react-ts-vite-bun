import { app } from '@neutralinojs/lib'
import { Link } from 'wouter'

const shutdownApp = () => app.exit();

export default function Header() {
  return (
    // <header className='navbar'>
    //   <Link href="/">Home</Link>
    //   <Link href="/info">Info</Link>
    //   <Link href="/settings">Settings</Link>
    //   <Link href='#' onClick={shutdownApp}>Exit</Link>
    // </header>
    <div className="navbar">
      <div className="navbar-start">
        <Link className='btn btn-lg btn-ghost' href="/">Neutralino</Link>
      </div>
      <div className="navbar-end gap-x-2">
        <Link className='btn btn-ghost' href="/">Home</Link>
        <Link className='btn btn-ghost' href="/info">Info</Link>
        <Link className='btn btn-ghost' href="/settings">Settings</Link>
        <Link className='btn btn-secondary' href='#' onClick={shutdownApp}>Exit App</Link>
      </div>
    </div>
  );
}
