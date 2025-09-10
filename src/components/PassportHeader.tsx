import { Shield, CheckCircle } from "lucide-react";

const PassportHeader = () => {
  return (
    <header className="relative w-full bg-gradient-passport border-b border-passport-gold/30 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-stamp opacity-50" />
      
      <div className="relative z-10 container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          {/* Left side - Official stamp design */}
          <div className="flex items-center gap-6">
            {/* Stamp circle */}
            <div className="relative">
              <div className="w-20 h-20 rounded-full border-4 border-passport-gold bg-gradient-gold flex items-center justify-center shadow-stamp animate-stamp-glow">
                <Shield className="w-8 h-8 text-passport-navy" strokeWidth={2.5} />
              </div>
              {/* Stamp text around circle */}
              <div className="absolute -inset-4">
                <svg className="w-28 h-28 text-passport-gold/80" viewBox="0 0 100 100">
                  <defs>
                    <path id="circle" d="M 50, 50 m -20, 0 a 20,20 0 1,1 40,0 a 20,20 0 1,1 -40,0" />
                  </defs>
                  <text className="text-[6px] font-bold tracking-wide fill-current">
                    <textPath href="#circle">
                      • FULLY HOMOMORPHIC ENCRYPTION • SECURE •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
            
            {/* Badge title */}
            <div className="animate-passport-slide">
              <h1 className="text-4xl font-bold text-passport-gold tracking-wide">
                FHE Secure Badge
              </h1>
              <p className="text-passport-silver/80 text-sm font-medium tracking-wider mt-1">
                PRIVATE REPUTATION SYSTEM
              </p>
            </div>
          </div>

          {/* Right side - Status indicator */}
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="flex items-center gap-2 px-4 py-2 bg-passport-navy/50 border border-passport-gold/30 rounded-lg backdrop-blur-sm">
              <CheckCircle className="w-5 h-5 text-passport-gold" />
              <span className="text-passport-gold font-medium text-sm">AUTHENTICATED</span>
            </div>
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-6 h-px bg-gradient-to-r from-transparent via-passport-gold to-transparent opacity-50" />
      </div>
    </header>
  );
};

export default PassportHeader;