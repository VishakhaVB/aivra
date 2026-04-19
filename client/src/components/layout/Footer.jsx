import { Container } from './Container';

export function Footer() {
  return (
    <footer className="bg-black/80 border-t border-white/10 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-white tracking-tight block mb-4">
              Aivra <span className="text-aivra-neon-green">⚡</span>
            </span>
            <p className="text-gray-400 max-w-sm">
              An AI-powered system that transforms daily habits into actionable energy insights. Understand your life, decode your energy.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3 flex flex-col text-sm text-gray-400">
              <a href="#features" className="hover:text-white transition-colors w-fit">Features</a>
              <a href="#preview" className="hover:text-white transition-colors w-fit">App Preview</a>
              <a href="#pricing" className="hover:text-white transition-colors w-fit">Pricing</a>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-3 flex flex-col text-sm text-gray-400">
              <a href="mailto:hello@aivra.com" className="hover:text-white transition-colors w-fit">hello@aivra.com</a>
              <a href="https://github.com/VishakhaVB/aivra" target="_blank" rel="noreferrer" className="hover:text-white transition-colors w-fit">GitHub</a>
              <a href="#support" className="hover:text-white transition-colors w-fit">Support</a>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Aivra. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
