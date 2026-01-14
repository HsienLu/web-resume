import { Github, Mail, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Section } from "@/components/Section";
import { resumeData } from "@/data/resume";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <main className="max-w-[1120px] mx-auto bg-white shadow-xl rounded-2xl overflow-hidden min-h-[1000px] border border-slate-200/60">

        {/* Hero Section */}
        <header className="bg-white p-8 md:p-12 border-b border-slate-100 relative">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-bl-full opacity-50 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight text-slate-900">{resumeData.name}</h1>
              <p className="text-xl md:text-2xl text-slate-600 font-medium">{resumeData.title}</p>
            </div>
            <div className="flex flex-col gap-3 text-sm md:text-base text-slate-600">
              <a href={`mailto:${resumeData.email}`} className="flex items-center gap-2 hover:text-slate-900 transition-colors group">
                <div className="p-2 bg-slate-50 rounded-full group-hover:bg-slate-100 transition-colors">
                  <Mail className="h-4 w-4 text-slate-500 group-hover:text-slate-800" />
                </div>
                {resumeData.email}
              </a>
              <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-slate-900 transition-colors group">
                <div className="p-2 bg-slate-50 rounded-full group-hover:bg-slate-100 transition-colors">
                  <Github className="h-4 w-4 text-slate-500 group-hover:text-slate-800" />
                </div>
                GitHub Profile
              </a>
              <div className="flex items-center gap-2 group">
                <div className="p-2 bg-slate-50 rounded-full transition-colors">
                  <MapPin className="h-4 w-4 text-slate-500" />
                </div>
                {resumeData.location}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 max-w-3xl">
            <p className="text-slate-600 leading-relaxed text-lg border-l-4 border-slate-200 pl-4 italic">
              "{resumeData.tagline}"
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-0">

          {/* Left Column (Sticky Sidebar) */}
          <aside className="lg:col-span-4 bg-slate-50/80 p-8 md:p-10 border-r border-slate-100">
            <div className="lg:sticky lg:top-8 space-y-10">
              <Section title="Info">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Education</h3>
                    {resumeData.education.map((edu, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-slate-800 font-bold text-base">{edu}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Section>

              <Section title="Skills">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.frontend.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-white border-slate-200 text-slate-700 hover:bg-slate-100 shadow-sm border">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Backend & DB</h3>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.backend.concat(resumeData.skills.database).map((skill) => (
                        <Badge key={skill} variant="outline" className="border-slate-300 text-slate-600 bg-transparent">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Other</h3>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.ai.concat(resumeData.skills.devops).map((skill) => (
                        <Badge key={skill} variant="outline" className="border-slate-300 text-slate-600 bg-transparent">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Section>

              <Section title="Core Highlights">
                <ul className="space-y-4">
                  {resumeData.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-slate-600 leading-relaxed flex items-start group">
                      <span className="mr-3 text-slate-400 text-lg group-hover:text-slate-600 transition-colors">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Section>
            </div>
          </aside>

          {/* Right Column (Main Content) */}
          <div className="lg:col-span-8 p-8 md:p-12 bg-white">

            <Section title="Experience">
              <div className="space-y-12">
                {resumeData.experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-slate-100 pb-2 last:pb-0 group">
                    <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-white border-[3px] border-slate-200 group-hover:border-slate-400 transition-colors"></div>

                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                      <h3 className="text-xl font-bold text-slate-900">{exp.company}</h3>
                      <Badge variant="outline" className="w-fit mt-1 sm:mt-0 text-slate-500 font-normal bg-slate-50 border-slate-200">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-lg font-semibold text-slate-700 mb-4 flex items-center gap-2">
                      {exp.role}
                    </p>
                    <ul className="space-y-3">
                      {exp.desc.map((d, i) => (
                        <li key={i} className="text-slate-600 flex items-start text-[15px] leading-relaxed">
                          <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-300"></span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Featured Projects">
              <div className="grid gap-8">
                {resumeData.projects.map((project, idx) => (
                  <Card key={idx} className="group border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="bg-slate-50/50 border-b border-slate-100">
                      <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-lg font-bold text-slate-800">{project.title}</CardTitle>
                          {/* @ts-ignore */}
                          {project.repo && (
                            <a
                              href={project.repo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-slate-400 hover:text-slate-700 transition-colors"
                              aria-label="View Source Code"
                            >
                              <Github className="h-5 w-5" />
                              <span>GitHub Repo</span>
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                          <Badge key={t} variant="secondary" className="text-xs font-medium bg-white border border-slate-200 text-slate-600 group-hover:border-slate-300 transition-colors">{t}</Badge>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <ul className="space-y-2.5">
                        {project.desc.map((d, i) => (
                          <li key={i} className="text-sm text-slate-600 flex items-start leading-relaxed">
                            <span className="mr-3 mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-slate-400 group-hover:bg-slate-600 transition-colors"></span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Section>

          </div>
        </div>
      </main>

      <footer className="text-center text-slate-400 text-sm mt-16 mb-8 flex flex-col gap-2">
        <p>© {new Date().getFullYear()} {resumeData.name}</p>
        <p className="text-xs text-slate-300">Builts with React, Tailwind, and shadcn/ui</p>
      </footer>
    </div>
  )
}

export default App
