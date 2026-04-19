import { SectionWrapper } from '../layout/SectionWrapper';
import { Container } from '../layout/Container';
import { Card } from '../ui/Card';
import { GraduationCap, Code, Briefcase } from 'lucide-react';

const targets = [
  {
    title: "Students",
    description: "Optimize study schedules and avoid burnout by tracking focus and energy dips during intense semesters.",
    icon: GraduationCap,
  },
  {
    title: "Developers",
    description: "Understand the toll of deep work vs context switching, maintaining peak cognitive function for complex problem solving.",
    icon: Code,
  },
  {
    title: "Professionals",
    description: "Maximize career performance without sacrificing well-being by finding the perfect equilibrium of effort and rest.",
    icon: Briefcase,
  }
];

export function WhoFor() {
  return (
    <SectionWrapper id="about" className="bg-aivra-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-aivra-neon-green/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />
      <Container>
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Who Is This For?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Built for anyone whose performance depends on their mental and physical battery.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {targets.map((target, i) => (
            <Card key={i} className="flex flex-col items-center text-center p-8 bg-black/40 border-white/5">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 text-white">
                <target.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">{target.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed text-balance">
                {target.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
