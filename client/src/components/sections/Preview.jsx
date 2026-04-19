import { SectionWrapper } from '../layout/SectionWrapper';
import { Container } from '../layout/Container';

export function Preview() {
  return (
    <SectionWrapper id="product" className="bg-black/80 border-y border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-aivra-neon-blue/5 to-transparent pointer-events-none" />
      
      <Container className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">See Aivra in Action</h2>
          <p className="text-gray-400 text-lg">Designed for absolute clarity and focus.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
          {/* Main Dashboard Panel */}
          <div className="md:col-span-8 glass-card rounded-[2rem] p-6 lg:p-8 flex flex-col gap-6 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-600" />
                <div className="w-3 h-3 rounded-full bg-gray-600" />
                <div className="w-3 h-3 rounded-full bg-gray-600" />
              </div>
              <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-xs text-gray-400 font-medium">
                Overview
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
              {/* Chart Side */}
              <div className="col-span-1 lg:col-span-2 flex flex-col gap-4">
                {/* Big Chart Area */}
                <div className="flex-1 bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <p className="text-gray-400 text-sm">Average Energy</p>
                      <p className="text-2xl font-bold text-white">78%</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="w-8 h-1 bg-aivra-neon-green rounded-full" />
                      <span className="w-8 h-1 bg-white/20 rounded-full" />
                      <span className="w-8 h-1 bg-white/20 rounded-full" />
                    </div>
                  </div>
                  
                  {/* Fake Bar Chart */}
                  <div className="flex items-end justify-between gap-2 h-32 mt-auto">
                    {[40, 60, 30, 80, 100, 70, 90].map((h, i) => (
                      <div key={i} className="w-full bg-white/5 rounded-t-md relative group">
                        <div 
                          className="absolute bottom-0 w-full bg-gradient-to-t from-aivra-neon-green/20 to-aivra-neon-green rounded-t-md transition-all duration-300 group-hover:from-aivra-neon-blue/20 group-hover:to-aivra-neon-blue"
                          style={{ height: `${h}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Insight Side Elements */}
              <div className="col-span-1 flex flex-col gap-4">
                <div className="bg-aivra-neon-green/5 border border-aivra-neon-green/20 rounded-2xl p-5 flex-1 flex flex-col justify-center">
                  <div className="w-10 h-10 rounded-full bg-aivra-neon-green/20 flex items-center justify-center mb-4">
                    <span className="text-aivra-neon-green">✦</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">Prime Time</h4>
                  <p className="text-xs text-gray-400">Your peak focus window is between <span className="text-white font-medium">9 AM - 11 AM</span>.</p>
                </div>
                
                <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 flex-1 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex flex-col justify-center">
                  <p className="text-gray-400 text-sm mb-1">Sleep Debt</p>
                  <p className="text-2xl font-semibold text-white">1hr 15m</p>
                  <div className="w-full h-1.5 bg-white/10 rounded-full mt-4 overflow-hidden">
                    <div className="w-3/4 h-full bg-yellow-400 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Cards */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="flex-1 glass-card rounded-[2rem] p-8 flex flex-col justify-center hover:bg-white/10 transition-colors cursor-pointer group">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-white font-semibold">Integrations</h4>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-aivra-neon-green/50 transition-colors">
                  <span className="text-white/50 text-xs">+</span>
                </div>
              </div>
              <div className="flex gap-4">
                {/* Fake App icons */}
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shadow-lg"><span className="text-xl">🍏</span></div>
                <div className="w-12 h-12 rounded-xl bg-[#000] border border-white/10 flex items-center justify-center shadow-lg"><span className="text-xl">⌚</span></div>
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-500 border border-blue-600/30 flex items-center justify-center shadow-lg"><span className="font-bold">O</span></div>
              </div>
            </div>
            
            <div className="flex-1 glass-card rounded-[2rem] p-8 bg-gradient-to-br from-aivra-neon-blue/10 to-transparent flex flex-col justify-center">
              <div className="h-0.5 w-full bg-gradient-to-r from-aivra-neon-blue to-transparent mb-6 opacity-30" />
              <p className="text-gray-300 text-sm font-medium leading-relaxed">
                "Aivra accurately diagnosed why my Friday afternoons were unproductive. It's like having a cognitive coach."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 overflow-hidden"><img src="https://i.pravatar.cc/100?img=33" alt="" /></div>
                <p className="text-xs text-gray-400">Sarah J., Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
}
