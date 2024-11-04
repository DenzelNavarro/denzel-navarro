/*
 * @copyright 2024 Denzel Navarro
 * @license Apache-2.0
 */

const experiences = [
  {
    yearRange: "September 2023 — May 2024",
    position: "IT Intern",
    company: "ELRO Retail Corporation",
    description:
      "Maintain the Magento components used on the ipanemaphilippines.com frontend across all products. Collaborate with cross-functional teams, including developers, designers, and product managers, to develop and support best practices in web accessibility.",
    skills: ["PHP", "JavaScript", "Magento", "Adobe Photoshop"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 text-sky-400 reveal-up">Experience</h2>
        {experiences.map(
          ({ yearRange, position, company, description, skills }, key) => (
            <div key={key} className="mb-8 reveal-up">
              <div className="mb-2 text-sm font-medium text-sky-400">
                {yearRange}
              </div>
              <h3 className="text-lg font-semibold text-white">{position}</h3>
              <p className="text-base font-medium text-zinc-300 mb-2">
                {company}
              </p>
              <p className="text-zinc-400 mb-4">{description}</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-block bg-sky-600/50 text-xs px-2 py-1 rounded-full text-zinc-100 reveal-up"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Experience;