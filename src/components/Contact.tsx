import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  Github,
  Linkedin,
  Globe,
  MessageSquare,
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface ContactProps {
  darkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Full-Time AI Engineering Opportunity',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: 'Full-Time AI Engineering Opportunity',
        message: '',
      });
    }, 4000);
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded text-[10px] font-mono uppercase tracking-[0.25em] border font-bold ${
            darkMode ? 'bg-white/10 text-white border-white/20' : 'bg-black/10 text-black border-black/20'
          }`}>
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black ${darkMode ? 'text-white' : 'text-black'}`}>
            Let's Build Intelligent Platforms Together
          </h2>
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              darkMode ? 'text-neutral-400' : 'text-neutral-600'
            }`}
          >
            Available for full-time AI Engineer roles and open-source collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left items-start">
          {/* Left Direct Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div
              className={`p-6 sm:p-8 rounded-xl border space-y-6 transition-all ${
                darkMode
                  ? 'bg-neutral-950 border-neutral-800'
                  : 'bg-white border-neutral-300 shadow-xs'
              }`}
            >
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
                Direct Contact Information
              </h3>

              <div className="space-y-4 text-xs sm:text-sm font-sans">
                {/* Email Item */}
                <div className={`p-4 rounded border flex items-center justify-between gap-3 ${
                  darkMode ? 'bg-black border-neutral-800' : 'bg-neutral-100 border-neutral-300'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded border ${
                      darkMode ? 'bg-white/10 text-white border-white/20' : 'bg-black/10 text-black border-black/20'
                    }`}>
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[9px] font-mono uppercase tracking-wider text-neutral-400 font-bold">EMAIL ADDRESS</div>
                      <div className={`font-bold ${darkMode ? 'text-white' : 'text-black'}`}>{profileData.contact.email}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(profileData.contact.email, 'email')}
                    className={`p-2 rounded border cursor-pointer ${
                      darkMode ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white' : 'bg-white border-neutral-300 text-neutral-700 hover:text-black'
                    }`}
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className={`p-4 rounded border flex items-center justify-between gap-3 ${
                  darkMode ? 'bg-black border-neutral-800' : 'bg-neutral-100 border-neutral-300'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded border ${
                      darkMode ? 'bg-white/10 text-white border-white/20' : 'bg-black/10 text-black border-black/20'
                    }`}>
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[9px] font-mono uppercase tracking-wider text-neutral-400 font-bold">PHONE NUMBER</div>
                      <div className={`font-bold ${darkMode ? 'text-white' : 'text-black'}`}>{profileData.contact.phone}</div>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(profileData.contact.phone, 'phone')}
                    className={`p-2 rounded border cursor-pointer ${
                      darkMode ? 'bg-neutral-900 border-neutral-800 text-neutral-300 hover:text-white' : 'bg-white border-neutral-300 text-neutral-700 hover:text-black'
                    }`}
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className={`p-4 rounded border flex items-center gap-3 ${
                  darkMode ? 'bg-black border-neutral-800' : 'bg-neutral-100 border-neutral-300'
                }`}>
                  <div className={`p-2 rounded border ${
                    darkMode ? 'bg-white/10 text-white border-white/20' : 'bg-black/10 text-black border-black/20'
                  }`}>
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[9px] font-mono uppercase tracking-wider text-neutral-400 font-bold">BASE LOCATION</div>
                    <div className={`font-bold ${darkMode ? 'text-white' : 'text-black'}`}>{profileData.contact.location} (Remote / Global Relocation)</div>
                  </div>
                </div>
              </div>

              {/* Social Profiles Grid */}
              <div className={`pt-4 border-t space-y-3 ${darkMode ? 'border-neutral-800' : 'border-neutral-200'}`}>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-400 font-bold block">
                  PROFILES & PLATFORMS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <a
                    href={profileData.contact.website}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-3 rounded border font-mono text-xs flex items-center justify-center gap-2 transition-all uppercase font-bold tracking-wider ${
                      darkMode
                        ? 'bg-neutral-900 border-neutral-800 text-white hover:border-white'
                        : 'bg-neutral-100 border-neutral-300 text-black hover:border-black'
                    }`}
                  >
                    <Globe className="w-4 h-4" />
                    <span>Website</span>
                  </a>

                  <a
                    href={profileData.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-3 rounded border font-mono text-xs flex items-center justify-center gap-2 transition-all uppercase font-bold tracking-wider ${
                      darkMode
                        ? 'bg-neutral-900 border-neutral-800 text-white hover:border-white'
                        : 'bg-neutral-100 border-neutral-300 text-black hover:border-black'
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={profileData.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-3 rounded border font-mono text-xs flex items-center justify-center gap-2 transition-all uppercase font-bold tracking-wider ${
                      darkMode
                        ? 'bg-neutral-900 border-neutral-800 text-white hover:border-white'
                        : 'bg-neutral-100 border-neutral-300 text-black hover:border-black'
                    }`}
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Interactive Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className={`p-6 sm:p-8 rounded-xl border space-y-5 transition-all ${
                darkMode
                  ? 'bg-neutral-950 border-neutral-800'
                  : 'bg-white border-neutral-300 shadow-xs'
              }`}
            >
              <h3 className={`text-xl font-bold flex items-center gap-2 ${darkMode ? 'text-white' : 'text-black'}`}>
                <MessageSquare className="w-5 h-5" />
                <span>Send Direct Message</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold">YOUR NAME *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded text-xs border focus:outline-none ${
                      darkMode
                        ? 'bg-neutral-900 border-neutral-800 text-white focus:border-white'
                        : 'bg-neutral-100 border-neutral-300 text-black focus:border-black'
                    }`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold">YOUR EMAIL *</label>
                  <input
                    type="email"
                    required
                    placeholder="s.jenkins@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded text-xs border focus:outline-none ${
                      darkMode
                        ? 'bg-neutral-900 border-neutral-800 text-white focus:border-white'
                        : 'bg-neutral-100 border-neutral-300 text-black focus:border-black'
                    }`}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold">SUBJECT</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded text-xs border focus:outline-none ${
                    darkMode
                      ? 'bg-neutral-900 border-neutral-800 text-white focus:border-white'
                      : 'bg-neutral-100 border-neutral-300 text-black focus:border-black'
                  }`}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold">MESSAGE *</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your AI platform requirements, technical stack, or project vision..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded text-xs border focus:outline-none ${
                    darkMode
                      ? 'bg-neutral-900 border-neutral-800 text-white focus:border-white'
                      : 'bg-neutral-100 border-neutral-300 text-black focus:border-black'
                  }`}
                />
              </div>

              <button
                type="submit"
                disabled={formSubmitted}
                className={`w-full py-3 rounded font-bold text-xs font-mono uppercase tracking-wider border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  darkMode
                    ? 'bg-white text-black border-white hover:bg-neutral-200'
                    : 'bg-black text-white border-black hover:bg-neutral-800'
                }`}
              >
                {formSubmitted ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Message Dispatched to Abdul Jaweed!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Dispatch Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
