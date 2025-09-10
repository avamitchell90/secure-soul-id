import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Zap, Award, Users, Globe, ArrowRight, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Promotion = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation variant="promotion" />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-passport-gold/20 text-passport-gold border-passport-gold/30">
            🔐 Fully Homomorphic Encryption Powered
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Private Reputation
            <span className="text-passport-gold block">NFTs</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Soulbound NFTs with encrypted attributes that preserve your privacy while building verifiable reputation. 
            Your credentials, encrypted. Your reputation, proven. Your identity, protected.
          </p>
          
          <div className="flex gap-4 justify-center mb-12">
            <Link to="/">
              <Button className="bg-gradient-gold text-passport-navy hover:bg-passport-gold-muted font-semibold px-8 py-3 text-lg">
                Get Started
              </Button>
            </Link>
            <Button variant="outline" className="border-passport-gold/30 text-passport-gold hover:bg-passport-gold/10 px-8 py-3 text-lg">
              Learn More
            </Button>
          </div>

          {/* Hero Visual */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-passport p-8 rounded-2xl border-2 border-passport-gold/30 shadow-passport">
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                  <CardContent className="p-4 text-center">
                    <Shield className="w-12 h-12 text-passport-gold mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">KYC Verified</h3>
                    <p className="text-sm text-muted-foreground">Identity encrypted with FHE</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                  <CardContent className="p-4 text-center">
                    <Award className="w-12 h-12 text-passport-gold mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Dev Reputation</h3>
                    <p className="text-sm text-muted-foreground">Skills proven privately</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/80 backdrop-blur-sm border-border/50">
                  <CardContent className="p-4 text-center">
                    <Users className="w-12 h-12 text-passport-gold mx-auto mb-3" />
                    <h3 className="font-semibold mb-2">Social Score</h3>
                    <p className="text-sm text-muted-foreground">Community trust built</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Revolutionary Privacy Technology
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built on cutting-edge Fully Homomorphic Encryption to keep your data private while proving your reputation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-passport-navy" />
                </div>
                <h3 className="text-xl font-semibold mb-3">FHE Encryption</h3>
                <p className="text-muted-foreground">
                  Your personal data is encrypted with Fully Homomorphic Encryption, allowing computations without revealing the underlying information.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-passport-navy" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Soulbound NFTs</h3>
                <p className="text-muted-foreground">
                  Non-transferable tokens that are permanently bound to your identity, ensuring authentic reputation building.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-passport-navy" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Universal Reputation</h3>
                <p className="text-muted-foreground">
                  Build a portable reputation that works across all Web3 applications and platforms.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Endless Possibilities
            </h2>
            <p className="text-xl text-muted-foreground">
              From identity verification to professional credentials, PrivateRep enables private reputation systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-passport-gold">Identity & Verification</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-passport-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">KYC Compliance</p>
                    <p className="text-sm text-muted-foreground">Meet regulatory requirements while maintaining privacy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-passport-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Age Verification</p>
                    <p className="text-sm text-muted-foreground">Prove you're over 18 without revealing your exact age</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-passport-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Citizenship Proof</p>
                    <p className="text-sm text-muted-foreground">Verify nationality for voting or services</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-passport-gold">Professional & Social</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-passport-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Developer Skills</p>
                    <p className="text-sm text-muted-foreground">Showcase coding abilities and project history</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-passport-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Social Reputation</p>
                    <p className="text-sm text-muted-foreground">Build trust through community participation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-passport-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Educational Credentials</p>
                    <p className="text-sm text-muted-foreground">Verify degrees and certifications privately</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-passport">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-passport-gold mb-4">
            Ready to Build Your Private Reputation?
          </h2>
          <p className="text-xl text-passport-silver/80 mb-8 max-w-2xl mx-auto">
            Join the future of identity and reputation systems. Start building your encrypted credential collection today.
          </p>
          <Link to="/">
            <Button className="bg-gradient-gold text-passport-navy hover:bg-passport-gold-muted font-semibold px-8 py-4 text-lg">
              Launch PrivateRep App
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            Built with privacy-first technology • Powered by FHE • Secured by blockchain
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Promotion;