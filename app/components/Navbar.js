export default function Navbar() {
    return (
      <nav className="bg-primary text-background p-4 flex justify-between">
        <h1 className="font-header text-2xl">Logo</h1>
        <ul className="flex gap-6">
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#mailing-list">Join Mailing List</a></li>
        </ul>
      </nav>
    );
  }
  