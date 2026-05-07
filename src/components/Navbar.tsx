export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-zinc-800 bg-black/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="font-semibold tracking-wide">
          JN
        </h1>

        <div className="flex gap-6 text-sm text-zinc-400">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#">Publications</a>
          <a href="#">Consulting</a>
          <a href="#">Tutorials</a>
          <a href="#">Gallery</a>
        </div>

      </div>
    </nav>
  );
}