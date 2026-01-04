import React, { useState, useEffect } from 'react';
import { greeting, socialMediaLinks, skillsSection } from './portfolio';

export default function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/saadpasta/repos?per_page=6&sort=updated`)
      .then(res => res.json())
      .then(data => setRepos(data || []));
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* NAVIGATION */}
      <nav className="flex justify-between items-center px-10 py-6 sticky top-0 bg-white z-50">
        <div className="text-2xl font-bold text-indigo-600 cursor-pointer">
          &lt; {greeting.username} /&gt;
        </div>
        <ul className="hidden md:flex space-x-8 font-medium text-gray-600">
          <li className="hover:text-indigo-600 cursor-pointer">Skills</li>
          <li className="hover:text-indigo-600 cursor-pointer">Experience</li>
          <li className="hover:text-indigo-600 cursor-pointer">Open Source</li>
          <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center px-10 py-20 max-w-7xl mx-auto">
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{greeting.title}</h1>
          <p className="text-xl text-gray-500 mb-8 leading-relaxed">{greeting.subTitle}</p>
          <div className="flex space-x-4 mb-10">
            <a href={socialMediaLinks.github} className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl hover:scale-110 transition"><i className="fab fa-github"></i></a>
            <a href={socialMediaLinks.linkedin} className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl hover:scale-110 transition"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <div className="flex space-x-4">
            <button className="bg-indigo-700 text-white px-8 py-3 rounded font-bold hover:bg-indigo-800 transition">CONTACT ME</button>
            <button className="bg-indigo-700 text-white px-8 py-3 rounded font-bold hover:bg-indigo-800 transition">MY RESUME</button>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img src="https://raw.githubusercontent.com/saadpasta/developerFolio/master/src/assets/lottie/build.svg" alt="developer" className="w-full max-w-md" />
        </div>
      </section>

      {/* WHAT I DO SECTION */}
      <section className="py-20 px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex justify-center">
            <img src="https://raw.githubusercontent.com/saadpasta/developerFolio/master/src/assets/lottie/developer.svg" alt="skills" className="w-3/4" />
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <h2 className="text-4xl font-bold mb-4">{skillsSection.title}</h2>
            <p className="text-indigo-600 font-bold tracking-widest mb-8 uppercase text-xs">{skillsSection.subTitle}</p>
            <div className="flex flex-wrap gap-8 mb-8">
              {skillsSection.softwareSkills.map((s, i) => (
                <i key={i} className={`${s.fontClass} text-5xl hover:scale-110 transition`} style={{color: s.color}}></i>
              ))}
            </div>
            {skillsSection.skills.map((text, i) => (
              <p key={i} className="text-lg text-gray-600 mb-2">{text}</p>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN SOURCE SECTION */}
      <section className="py-20 px-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Open Source Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {repos.map(repo => (
            <a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer" className="p-6 border rounded shadow-sm hover:shadow-xl transition block">
              <h4 className="font-bold text-indigo-600 mb-2 truncate">{repo.name}</h4>
              <p className="text-sm text-gray-500 mb-4 h-10 overflow-hidden">{repo.description}</p>
              <div className="flex justify-between text-xs text-gray-400">
                <span>{repo.language}</span>
                <span>⭐ {repo.stargazers_count}</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
