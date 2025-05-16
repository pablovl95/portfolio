import React from "react";

const Skills = () => {
  const skills = [
    { category: "Frontend", items: ["React", "Angular", "TypeScript", "Tailwind CSS", "Material UI"] },
    { category: "Backend", items: ["Node.js", "Express", "Spring Boot", "Java", "PostgreSQL"] },
    { category: "Herramientas", items: ["Git", "Docker", "AWS", "Jira", "Postman"] },
  ];

  return (
    <section className="min-w-screen py-16 bg-[#1a1a1a] text-white" id="skills">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Habilidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-yellow-300">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="text-gray-300">
                    • {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
