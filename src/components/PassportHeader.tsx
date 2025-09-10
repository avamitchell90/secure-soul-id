import { Shield, CheckCircle, Lock } from "lucide-react";

const PassportHeader = () => {
  return (
    <header className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between">
          {/* Left side - Brand and title */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Secure Soul ID
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Private Reputation System with FHE Protection
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Status and features */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">Authenticated</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg">
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