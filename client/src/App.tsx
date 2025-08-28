import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import { useState } from 'react';

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? 'dark bg-gray-950 text-white min-h-screen' : 'bg-accent text-gray-900 min-h-screen'}>
      <header className="flex justify-between items-center px-8 py-6 shadow-lg bg-primary text-white rounded-b-3xl">
        <h1 className="text-3xl font-extrabold tracking-tight drop-shadow-lg">My Portfolio</h1>
        <button
          className="px-4 py-2 rounded-lg bg-white text-primary font-semibold shadow hover:bg-primary hover:text-white transition"
          onClick={() => setDark((d) => !d)}
        >
          {dark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-12">
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;