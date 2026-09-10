import React from 'react';
import { Award, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationData, certificationsData } from '../data/portfolioData';

interface EducationCertificationsProps {
  darkMode: boolean;
}

export const EducationCertifications: React.FC<
  EducationCertificationsProps
> = ({ darkMode }) => {
  return (
    <section id="education" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded text-[10px] font-mono uppercase tracking-[0.25em] border font-bold ${
            darkMode ? 'bg-white/10 text-white border-white/20' : 'bg-black/10 text-black border-black/20'
          }`}>
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS & SPECIALIZATIONS</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black ${darkMode ? 'text-white' : 'text-black'}`}>
            Education & Specializations
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              darkMode ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            Academic groundwork in computer applications paired with professional specializations from DeepLearning.AI and Duke University.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {/* Left Column: Education */}
          <div className="space-y-6">
            <div className={`flex items-center gap-3 border-b pb-3 ${
              darkMode ? 'border-neutral-800' : 'border-neutral-200'
            }`}>
              <div className={`p-2 rounded border ${
                darkMode ? 'bg-white/10 text-white border-white/20' : 'bg-black/10 text-black border-black/20'
              }`}>
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Formal Education</h3>
            </div>

            {educationData.map((edu) => (
              <div
                key={edu.id}
                className={`p-6 rounded-xl border transition-all ${
                  darkMode
                    ? 'bg-neutral-950 border-neutral-800'
                    : 'bg-white border-neutral-300 shadow-xs'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className={`px-2.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider border font-bold ${
                      darkMode ? 'bg-white/10 text-white border-white/20' : 'bg-black/10 text-black border-black/20'
                    }`}>
                      CGPA {edu.cgpa}
                    </span>
                    <div className="flex items-center gap-1 text-[10px] font-mono text-neutral-400 font-bold">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
                    {edu.degree}
                  </h4>

                  <div className={`text-sm font-semibold ${darkMode ? 'text-neutral-200' : 'text-neutral-800'}`}>
                    {edu.institution}
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-400 font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{edu.location}</span>
                  </div>

                  <ul className={`pt-3 border-t space-y-1.5 text-xs ${
                    darkMode ? 'border-neutral-800 text-neutral-300' : 'border-neutral-200 text-neutral-700'
                  }`}>
                    {edu.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 opacity-80" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Specializations & Courses */}
          <div className="space-y-6">
            <div className={`flex items-center gap-3 border-b pb-3 ${
              darkMode ? 'border-neutral-800' : 'border-neutral-200'
            }`}>
              <div className={`p-2 rounded border ${
                darkMode ? 'bg-white/10 text-white border-white/20' : 'bg-black/10 text-black border-black/20'
              }`}>
                <Award className="w-5 h-5" />
              </div>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Professional Specializations</h3>
            </div>

            <div className="space-y-4">
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  className={`p-5 rounded-xl border transition-all ${
                    darkMode
                      ? 'bg-neutral-950 border-neutral-800 hover:border-white'
                      : 'bg-white border-neutral-300 shadow-xs hover:border-black'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h4 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
                        {cert.title}
                      </h4>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold">
                        {cert.issuer} ({cert.platform})
                      </p>
                    </div>

                    <div className="text-[10px] font-mono text-neutral-400 text-right uppercase tracking-wider font-bold">
                      <span>{cert.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
