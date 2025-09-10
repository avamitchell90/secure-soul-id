import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, Users, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "FHE Encryption",
      description: "Fully Homomorphic Encryption ensures your data remains private even during computation"
    },
    {
      icon: Lock,
      title: "Soulbound NFTs",
      description: "Non-transferable badges that represent your authentic digital identity"
    },
    {
      icon: Eye,
      title: "Privacy First",
      description: "Your personal data is encrypted and only you can control access"
    },
    {
      icon: Users,
      title: "Reputation System",
      description: "Build and maintain your digital reputation across platforms"
    }
  ];

  const benefits = [
    "Zero-knowledge verification",
    "Cross-platform compatibility",
    "Decentralized identity management",
    "Tamper-proof records",
    "User-controlled data",
    "Enterprise-grade security"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation variant="home" />
      
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Secure Soul ID
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              The future of digital identity with Fully Homomorphic Encryption. 
              Own your data, control your privacy, build your reputation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/app">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 font-medium px-8 py-3"
                >
                  Launch App
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-8 py-3"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">Privacy Protected</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">FHE</div>
                <div className="text-sm text-gray-600">Encrypted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">∞</div>
                <div className="text-sm text-gray-600">Soulbound</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Secure Soul ID?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built with cutting-edge technology to protect your digital identity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Your Data, Your Control
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With Fully Homomorphic Encryption, your personal data is encrypted at all times. 
                Even when being processed, your information remains completely private.
              </p>
              
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Card className="bg-gradient-to-br from-blue-600 to-purple-600 border-0 shadow-lg">
                <CardContent className="p-8 text-white">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mx-auto mb-6">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                    <p className="text-blue-100 mb-6">
                      Join the future of digital identity with Secure Soul ID
                    </p>
                    <Link to="/app">
                      <Button 
                        size="lg"
                        className="bg-white text-blue-600 hover:bg-gray-100 font-medium px-6 py-3"
                      >
                        Launch App Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Start Building Your Digital Identity Today
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Experience the power of privacy-first digital identity with FHE encryption
          </p>
          <Link to="/app">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 font-medium px-8 py-3"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Soul ID</h3>
            <p className="text-gray-600 text-sm">
              Privacy-first digital identity with FHE encryption
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
