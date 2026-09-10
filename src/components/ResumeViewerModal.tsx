import React, { useState } from 'react';
import {
  X,
  Printer,
  Copy,
  Check,
  Download,
  FileText,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Globe,
  Sparkles,
} from 'lucide-react';
import {
  profileData,
  experiencesData,
  projectsData,
  skillCategoriesData,
  educationData,
  certificationsData,
  achievementsData,
} from '../data/portfolioData';

interface ResumeViewerModalProps {
  isOpen: boolean;
  darkMode: boolean;
  onClose: () => void;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({
  isOpen,
  darkMode,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const plainText = `
${profileData.name}
${profileData.title}
${profileData.contact.phone}
${profileData.contact.email}
abduljaweed.in
github.com/Abdul-Jaweed
https://www.linkedin.com/in/abdul-jaweed-datascientist/
${profileData.contact.location}

Profile
${profileData.summary}

Skills
${skillCategoriesData.map((cat) => `${cat.title}: ${cat.skills.map((s) => s.name).join(', ')}`).join('\n')}

My Personal Projects Turn into Open Source Contributions
${projectsData.slice(0, 2).map((p) => `${p.title} — ${p.subtitle}\nStatus: ${p.status}\n\n${p.description}\n\nTech Used: ${p.techStack.join(', ')}\n\n${p.contributions.map((c) => `• ${c}`).join('\n')}`).join('\n\n')}

Achievement
${achievementsData[0].title}
${achievementsData[0].description}
${achievementsData[0].date}
${achievementsData[0].location}

Professional Experience
${experiencesData.map((e) => `${e.company}. ${e.role}\n${e.period}\n${e.location}\n${e.responsibilities.map((r) => `• ${r}`).join('\n')}`).join('\n\n')}

Courses
${certificationsData.map((c) => `${c.title}, ${c.issuer} from ${c.platform}\n${c.period}`).join('\n')}

Education
${educationData.map((ed) => `${ed.degree}, ${ed.institution}\n• Cumulative CGPA: ${ed.cgpa}\n${ed.period}\n${ed.location}`).join('\n')}
    `;

    navigator.clipboard.writeText(plainText.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className={`relative w-full max-w-5xl rounded-2xl border shadow-2xl overflow-hidden my-6 transition-all flex flex-col max-h-[92vh] ${
          darkMode
            ? 'bg-neutral-950 border-neutral-800 text-white'
            : 'bg-white border-neutral-300 text-black'
        }`}
      >
        {/* Top Control Bar */}
        <div className={`p-4 sm:p-5 border-b flex flex-wrap items-center justify-between gap-4 print:hidden ${
          darkMode ? 'bg-black border-neutral-800' : 'bg-neutral-100 border-neutral-300'
        }`}>
          <div className="flex items-center gap-2 font-mono text-xs font-bold">
            <FileText className="w-4 h-4" />
            <span>ABDUL JAWEED — OFFICIAL RESUME</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 border cursor-pointer ${
                darkMode ? 'bg-neutral-900 text-white border-neutral-800 hover:bg-neutral-800' : 'bg-white text-black border-neutral-300 hover:bg-neutral-200'
              }`}
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleCopyText}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 border cursor-pointer ${
                darkMode ? 'bg-white/10 text-white border-white/20 hover:bg-white/20' : 'bg-black/10 text-black border-black/20 hover:bg-black/20'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Text!' : 'Copy Resume Text'}</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close"
              className={`p-1.5 rounded-lg cursor-pointer border ${
                darkMode ? 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white' : 'bg-neutral-200 border-neutral-300 text-neutral-600 hover:text-black'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Formatted Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-left print:p-0 print:overflow-visible font-sans">
          {/* Resume Header */}
          <div className={`text-center space-y-2 pb-6 border-b ${darkMode ? 'border-neutral-800' : 'border-neutral-200'}`}>
            <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight uppercase ${darkMode ? 'text-white' : 'text-black'}`}>
              {profileData.name}
            </h1>
            <p className="text-sm font-semibold text-emerald-500 font-mono tracking-wide">
              {profileData.title}
            </p>
            <div className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono font-bold ${
              darkMode ? 'text-neutral-300' : 'text-neutral-700'
            }`}>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                {profileData.contact.phone}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                {profileData.contact.email}
              </span>
              <a
                href={profileData.contact.website}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-emerald-500 transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                abduljaweed.in
              </a>
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-emerald-500 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                github.com/Abdul-Jaweed
              </a>
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-emerald-500 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                abdul-jaweed-datascientist
              </a>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {profileData.contact.location}
              </span>
            </div>
          </div>

          {/* Profile Section */}
          <div className="space-y-2">
            <h2 className={`text-xs font-mono font-bold uppercase tracking-widest border-b pb-1 ${
              darkMode ? 'text-white border-neutral-800' : 'text-black border-neutral-200'
            }`}>
              PROFILE
            </h2>
            <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
              {profileData.summary}
            </p>
          </div>

          {/* Skills Section */}
          <div className="space-y-2">
            <h2 className={`text-xs font-mono font-bold uppercase tracking-widest border-b pb-1 ${
              darkMode ? 'text-white border-neutral-800' : 'text-black border-neutral-200'
            }`}>
              SKILLS
            </h2>
            <div className={`space-y-2 text-xs ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
              {skillCategoriesData.map((cat) => (
                <div key={cat.id} className="leading-relaxed">
                  <span className={`font-bold ${darkMode ? 'text-white' : 'text-black'}`}>{cat.title}: </span>
                  <span>
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Projects & Open Source */}
          <div className="space-y-4">
            <h2 className={`text-xs font-mono font-bold uppercase tracking-widest border-b pb-1 ${
              darkMode ? 'text-white border-neutral-800' : 'text-black border-neutral-200'
            }`}>
              PERSONAL PROJECTS TURN INTO OPEN SOURCE CONTRIBUTION
            </h2>

            {projectsData.slice(0, 2).map((proj) => (
              <div key={proj.id} className="space-y-1.5 text-xs">
                <div className={`flex justify-between items-baseline font-bold text-sm ${darkMode ? 'text-white' : 'text-black'}`}>
                  <span>{proj.title} — {proj.subtitle}</span>
                  <span className="text-[11px] font-mono text-emerald-500 font-bold">{proj.status}</span>
                </div>
                <div className="font-mono text-[11px] font-bold text-neutral-400">
                  Tech Stack: {proj.techStack.join(' • ')}
                </div>
                <ul className={`list-disc list-inside space-y-1 pl-1 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                  {proj.contributions.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Professional Experience */}
          <div className="space-y-4">
            <h2 className={`text-xs font-mono font-bold uppercase tracking-widest border-b pb-1 ${
              darkMode ? 'text-white border-neutral-800' : 'text-black border-neutral-200'
            }`}>
              PROFESSIONAL EXPERIENCE
            </h2>

            {experiencesData.map((exp) => (
              <div key={exp.id} className="space-y-1.5 text-xs">
                <div className={`flex justify-between items-baseline font-bold text-sm ${darkMode ? 'text-white' : 'text-black'}`}>
                  <span>{exp.role} @ {exp.company}</span>
                  <span className="font-mono text-neutral-400 font-bold">{exp.period} | {exp.location}</span>
                </div>
                {exp.projectTitle && (
                  <div className="font-mono text-[11px] text-neutral-400 italic">
                    Project: {exp.projectTitle}
                  </div>
                )}
                <div className="font-mono text-[11px] font-bold text-neutral-400">
                  Tech: {exp.techStack.join(' • ')}
                </div>
                <ul className={`list-disc list-inside space-y-1 pl-1 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                  {exp.responsibilities.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Achievements & Courses */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <h2 className={`text-xs font-mono font-bold uppercase tracking-widest border-b pb-1 ${
                darkMode ? 'text-white border-neutral-800' : 'text-black border-neutral-200'
              }`}>
                ACHIEVEMENT
              </h2>
              {achievementsData.slice(0, 2).map((a) => (
                <div key={a.id} className={`text-xs ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                  <div className={`font-bold ${darkMode ? 'text-white' : 'text-black'}`}>{a.title} ({a.date})</div>
                  <p className="text-[11px] text-neutral-400">{a.description}</p>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <h2 className={`text-xs font-mono font-bold uppercase tracking-widest border-b pb-1 ${
                darkMode ? 'text-white border-neutral-800' : 'text-black border-neutral-200'
              }`}>
                EDUCATION & COURSES
              </h2>
              {educationData.map((ed) => (
                <div key={ed.id} className={`text-xs ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                  <div className={`font-bold ${darkMode ? 'text-white' : 'text-black'}`}>{ed.degree}</div>
                  <div>{ed.institution} ({ed.period}) | CGPA: {ed.cgpa}</div>
                </div>
              ))}
              {certificationsData.map((cert) => (
                <div key={cert.id} className={`text-xs pt-1 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                  <span className={`font-bold ${darkMode ? 'text-white' : 'text-black'}`}>{cert.title}</span> - {cert.issuer} ({cert.period})
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
