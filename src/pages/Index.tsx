import PassportHeader from "@/components/PassportHeader";
import WalletConnector from "@/components/WalletConnector";
import PassportInterface from "@/components/PassportInterface";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation variant="app" />
      
      {/* Header and Wallet in one row */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between gap-6 mb-8 animate-fade-in">
          <div className="flex-1">
            <PassportHeader />
          </div>
          <div className="flex-shrink-0">
            <WalletConnector />
          </div>
        </div>
      </div>
      
      <main className="container mx-auto px-6">
        <PassportInterface />
      </main>
      
      {/* Background pattern overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--passport-gold)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
    </div>
  );
};

export default Index;