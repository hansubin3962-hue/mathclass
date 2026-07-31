import { Terminal, Code2 } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full max-w-3xl flex flex-col items-center justify-center space-y-12">
      <div className="text-center space-y-6">
        <div className="inline-flex items-center justify-center p-4 rounded-full neon-border mb-4 bg-green-500/10">
          <Terminal size={48} className="text-green-500 neon-text" />
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold neon-text mb-4 uppercase tracking-widest">
          어서와
        </h2>
        
        <p className="text-lg md:text-xl text-green-400/80 max-w-2xl mx-auto leading-relaxed">
          System Initialized. <br/>
          Next.js App Router, TypeScript, Tailwind CSS <br/>
          Vercel Deployment Ready. No Errors Found.
        </p>
      </div>

      <div className="w-full p-6 border border-green-500/50 rounded bg-black/40 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-green-500/20"></div>
        <div className="flex items-start space-x-4">
          <span className="text-magenta-500 font-bold mt-1">&gt;_</span>
          <div className="flex-1 space-y-2">
            <p className="text-sm opacity-80">// 새로운 기능을 추가하려면 아래 버튼을 클릭하세요.</p>
            <p className="text-green-300">Execute command: <span className="text-white">init_module</span></p>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
          <button className="group relative px-8 py-3 bg-transparent border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all duration-300 flex items-center space-x-3 font-bold uppercase tracking-widest neon-border">
            <Code2 size={20} />
            <span>기능 추가 (Placeholder)</span>
            {/* Cursor Blink Effect */}
            <span className="inline-block w-2 h-5 bg-current ml-2 animate-pulse"></span>
          </button>
        </div>
      </div>
    </div>
  );
}
