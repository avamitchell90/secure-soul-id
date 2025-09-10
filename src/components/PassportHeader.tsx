import { Shield, CheckCircle, Lock } from "lucide-react";

const PassportHeader = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Left side - App title */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Digital Passport
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Manage your private reputation badges
            </p>
          </div>

          {/* Right side - Status indicators */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">Authenticated</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-lg">
              <Lock className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">FHE Encrypted</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PassportHeader;