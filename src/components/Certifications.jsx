import React from "react";

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Developer",
      organization: "Amazon Web Services",
      date: "2023",
      credential: "Credencial: AWS-DEV-123456"
    },
    {
      title: "Professional Scrum Master I",
      organization: "Scrum.org",
      date: "2023",
      credential: "Credencial: PSM-I-123456"
    },
    {
      title: "Angular Developer Certificate",
      organization: "Google",
      date: "2022",
      credential: "Credencial: GCP-ANG-123456"
    }
  ];

  return (
    <section className="min-w-screen py-16 bg-[#1a1a1a] text-white" id="certifications">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Certificaciones</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div key={cert.title} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-yellow-300">{cert.title}</h3>
              <p className="text-gray-300">{cert.organization}</p>
              <p className="text-gray-400 text-sm mb-2">{cert.date}</p>
              <p className="text-blue-400 text-sm">{cert.credential}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
