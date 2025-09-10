import PassportHeader from "@/components/PassportHeader";
import WalletConnector from "@/components/WalletConnector";
import PassportInterface from "@/components/PassportInterface";
import Navigation from "@/components/Navigation";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation variant="app" />
      
      {/* Header */}
      <PassportHeader />
      
      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Wallet Connector - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <WalletConnector />
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            <PassportInterface />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;