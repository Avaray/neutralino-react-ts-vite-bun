import { app } from '@neutralinojs/lib'
import { Link } from 'wouter'

const shutdownApp = () => app.exit();

export default function Header() {
  return (
    <header>
      <Link href="/">Home</Link>
      <Link href="/info">Info</Link>
      <Link href="/settings">Settings</Link>
      <Link href='#' onClick={shutdownApp}>Exit</Link>
    </header>
  );
}
