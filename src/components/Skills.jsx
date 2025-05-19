import React from 'react';
import { skills } from '../data/skills';

const Skills = () => {
  return (
    <section className="w-full py-6 sm:py-8 bg-[#1a1a1a] text-white px-4" id="skills">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white-300 mb-6 sm:mb-8">Skills</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
          {skills.map((group) => (
            <div key={group.group} className="bg-gray-800 rounded-xl p-4 sm:p-6 shadow-md ">
              <h3 className={`text-center text-xl sm:text-3xl  font-semibold mb-4 sm:mb-6 ${group.color}`}>{group.group}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                {group.items.map((item) => (
                  <div key={item.name} className="flex flex-col items-center">
                    <span className="text-5xl sm:text-4xl mb-1 sm:mb-2">{item.icon}</span>
                    <span className="text-xs sm:text-sm text-gray-300 text-center">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
