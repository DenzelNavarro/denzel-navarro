/*
 * @copyright 2024 Denzel Navarro
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/src/images/project-1.png",
    title: "Random Quote",
    tags: ["API", "SPA"],
    projectLink: "https://random-quote-machine-three-mu.vercel.app/",
  },
  {
    imgSrc: "/src/images/project-2.png",
    title: "Markdown Previewer",
    tags: ["SPA"],
    projectLink: "https://markdown-previewer-three-beige.vercel.app/",
  },
  {
    imgSrc: "/src/images/project-3.png",
    title: "Pokédex",
    tags: ["Development", "API", "SPA"],
    projectLink: "https://denzelnavarro.github.io/Pokedex/",
  },
];

const Work = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">Projects</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;