"use client";

import React, { useState } from 'react';
import { Moon, Sun, Menu, X, ArrowRight, ExternalLink, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import { toast } from 'sonner';

export default function RobDeVriesPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    
    toast.success(`Bedankt ${name}! Ik neem binnenkort contact met je op.`, {
      description: "Je bericht is succesvol verzonden.",
    });
    
    form.reset();
  };

  const projects = [
    {
      title: "Project Naam 1",
      description: "Korte beschrijving van dit project. Wat heb je gebouwd en wat was het resultaat? [Pas dit aan met je eigen project]",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
      image: "https://picsum.photos/id/1015/600/400"
    },
    {
      title: "Project Naam 2",
      description: "Korte beschrijving van dit project. Wat heb je gebouwd en wat was het resultaat? [Pas dit aan met je eigen project]",
      tech: ["React", "Node.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      image: "https://picsum.photos/id/160/600/400"
    },
    {
      title: "Project Naam 3",
      description: "Korte beschrijving van dit project. Wat heb je gebouwd en wat was het resultaat? [Pas dit aan met je eigen project]",
      tech: ["Python", "FastAPI", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      image: "https://picsum.photos/id/201/600/400"
    }
  ];

  const skills = [
    "TypeScript", "React", "Next.js", "Node.js", "Python", 
    "Tailwind CSS", "Framer Motion", "PostgreSQL", "AWS", "Docker"
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-lg border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[var(--accent)] flex items-center justify-center text-white font-semibold text-lg">
              R
            </div>
            <div>
              <div className="font-semibold text-xl tracking-tight">Rob de Vries</div>
              <div className="text-xs text-[var(--muted)] -mt-1">[Jouw titel]</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <button onClick={() => scrollToSection('about')} className="nav-link cursor-pointer">Over mij</button>
            <button onClick={() => scrollToSection('skills')} className="nav-link cursor-pointer">Vaardigheden</button>
            <button onClick={() => scrollToSection('projects')} className="nav-link cursor-pointer">Projecten</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link cursor-pointer">Contact</button>
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="theme-toggle p-2.5 rounded-full hover:bg-[var(--card)] border border-[var(--border)] transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && (theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />)}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 rounded-full hover:bg-[var(--card)] border border-[var(--border)]"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-[var(--border)] bg-[var(--background)] px-6 py-6 flex flex-col gap-4 text-sm font-medium"
            >
              <button onClick={() => scrollToSection('about')} className="text-left py-2">Over mij</button>
              <button onClick={() => scrollToSection('skills')} className="text-left py-2">Vaardigheden</button>
              <button onClick={() => scrollToSection('projects')} className="text-left py-2">Projecten</button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2">Contact</button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border)] bg-[var(--card)] text-sm mb-8">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Beschikbaar voor freelance &amp; projecten
        </div>

        <h1 className="text-7xl md:text-8xl font-semibold tracking-tighter mb-4">
          Rob de Vries
        </h1>
        <p className="text-2xl md:text-3xl text-[var(--muted)] tracking-tight mb-6">
          [Program Manager]
        </p>
        
        <p className="max-w-xl mx-auto text-lg text-[var(--muted)] mb-10">
          Ik bouw moderne digitale producten met aandacht voor detail, 
          gebruikservaring en schone code. [Pas deze korte bio aan]
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => scrollToSection('projects')}
            className="btn-primary flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium"
          >
            Bekijk mijn projecten <ArrowRight size={18} />
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-secondary flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium"
          >
            Neem contact op
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-20 border-t border-[var(--border)]">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="aspect-[4/3] bg-[var(--card)] rounded-2xl border border-[var(--border)] overflow-hidden">
              <img 
                src="https://picsum.photos/id/1005/800/600" 
                alt="Rob de Vries" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:col-span-7">
            <div className="uppercase tracking-[3px] text-xs font-medium text-[var(--accent)] mb-3">OVER MIJ</div>
            <h2 className="text-5xl font-semibold tracking-tighter mb-8 section-heading">Hallo, ik ben Rob</h2>
            
            <div className="space-y-6 text-lg leading-relaxed text-[var(--muted)]">
              <p>
                [Schrijf hier een persoonlijke bio van 4-6 zinnen. Vertel wie je bent, 
                wat je drijft en wat je momenteel doet. Maak het menselijk en specifiek.]
              </p>
              <p>
                Ik werk graag aan projecten waar technologie en design samenkomen. 
                Of het nu gaat om een webapp, een AI-tool of een volledig digitaal product — 
                ik zorg dat het er niet alleen mooi uitziet, maar ook écht goed werkt.
              </p>
            </div>

            <div className="flex items-center gap-6 mt-8 text-sm">
              <div className="flex items-center gap-2 text-[var(--muted)]">
                <MapPin size={16} /> [Stad, Nederland]
              </div>
              <div className="flex items-center gap-2 text-[var(--muted)]">
                <Mail size={16} /> rob@jouwdomein.nl
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-20 border-t border-[var(--border)] bg-[var(--card)]/50">
        <div className="text-center mb-12">
          <div className="uppercase tracking-[3px] text-xs font-medium text-[var(--accent)] mb-3">EXPERTISE</div>
          <h2 className="text-5xl font-semibold tracking-tighter">Vaardigheden &amp; Tools</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="skill-pill px-6 py-3 rounded-full border border-[var(--border)] bg-[var(--background)] text-sm font-medium cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 border-t border-[var(--border)]">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div className="uppercase tracking-[3px] text-xs font-medium text-[var(--accent)] mb-3">WERK</div>
            <h2 className="text-5xl font-semibold tracking-tighter">Uitgelichte projecten</h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-[var(--accent)] transition-colors">
            Bekijk alle projecten <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -4 }}
              className="project-card group rounded-2xl overflow-hidden bg-[var(--card)] flex flex-col"
            >
              <div className="relative aspect-video bg-zinc-900">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />
              </div>
              
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-semibold text-2xl tracking-tight mb-3">{project.title}</h3>
                <p className="text-[var(--muted)] flex-1 leading-relaxed mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-[var(--background)] border border-[var(--border)]">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium rounded-full border border-[var(--border)] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-all"
                  >
                    Live demo <ExternalLink size={15} />
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    className="flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium rounded-full border border-[var(--border)] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-all"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl mx-auto px-6 py-20 border-t border-[var(--border)] text-center">
        <div className="uppercase tracking-[3px] text-xs font-medium text-[var(--accent)] mb-3">Laten we praten</div>
        <h2 className="text-5xl font-semibold tracking-tighter mb-4">Klaar voor een nieuw project?</h2>
        <p className="text-xl text-[var(--muted)] max-w-md mx-auto mb-12">
          Ik werk graag samen aan interessante uitdagingen. Stuur me een bericht!
        </p>

        <form onSubmit={handleContactSubmit} className="max-w-xl mx-auto text-left space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Naam</label>
              <input 
                type="text" 
                name="name" 
                required 
                className="w-full px-5 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--card)] focus:outline-none focus:border-[var(--accent)] transition-colors" 
                placeholder="Je naam"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">E-mailadres</label>
              <input 
                type="email" 
                name="email" 
                required 
                className="w-full px-5 py-3.5 rounded-xl border border-[var(--border)] bg-[var(--card)] focus:outline-none focus:border-[var(--accent)] transition-colors" 
                placeholder="je@email.com"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Bericht</label>
            <textarea 
              name="message" 
              required 
              rows={6} 
              className="w-full px-5 py-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-y" 
              placeholder="Vertel me over je project of idee..."
            />
          </div>

          <button 
            type="submit" 
            className="btn-primary w-full md:w-auto px-12 py-4 rounded-full font-medium text-base flex items-center justify-center gap-3 mx-auto"
          >
            Verstuur bericht <ArrowRight size={18} />
          </button>
        </form>

        <div className="mt-16 text-sm text-[var(--muted)]">
          Of mail me direct op <a href="mailto:rob@jouwdomein.nl" className="underline hover:text-[var(--foreground)]">rob@jouwdomein.nl</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
          <div>© {new Date().getFullYear()} Rob de Vries. Alle rechten voorbehouden.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[var(--foreground)] transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-[var(--foreground)] transition-colors">Github</a>
            <a href="#" className="hover:text-[var(--foreground)] transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
