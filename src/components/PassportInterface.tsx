import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye, Calendar, Award, Users, Zap, Globe, Plus } from "lucide-react";
import { useAccount, useReadContract } from 'wagmi';
import { CONTRACT_CONFIG } from '@/lib/contracts';
import { useState, useEffect } from 'react';

interface SoulBadge {
  id: number;
  title: string;
  type: string;
  issued: string;
  encrypted: boolean;
  icon: any;
  description: string;
  attributes: string[];
  reputationScore: number;
  verificationLevel: number;
  isActive: boolean;
  metadataHash: string;
}

const PassportInterface = () => {
  const { address } = useAccount();
  const [badges, setBadges] = useState<SoulBadge[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Read user badges from contract
  const { data: userBadges } = useReadContract({
    ...CONTRACT_CONFIG,
    functionName: 'getUserBadges',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  });

  // Read user reputation from contract
  const { data: userReputation } = useReadContract({
    ...CONTRACT_CONFIG,
    functionName: 'getUserReputation',
    args: address ? [address] : undefined,
    query: {
      enabled: !!address,
    },
  });

  useEffect(() => {
    if (userBadges && Array.isArray(userBadges)) {
      // Fetch badge details for each badge ID
      const fetchBadgeDetails = async () => {
        const badgePromises = userBadges.map(async (badgeId: bigint) => {
          // This would be a contract call to getBadgeInfo
          // For now, we'll use mock data
          return {
            id: Number(badgeId),
            title: "KYC Verified",
            type: "Identity",
            issued: "2024-01-15",
            encrypted: true,
            icon: Shield,
            description: "Identity verification completed with encrypted personal data",
            attributes: ["Name", "Date of Birth", "Nationality", "Document Hash"],
            reputationScore: 85,
            verificationLevel: 3,
            isActive: true,
            metadataHash: "0x1234567890abcdef"
          };
        });
        
        const badgeDetails = await Promise.all(badgePromises);
        setBadges(badgeDetails);
        setIsLoading(false);
      };

      fetchBadgeDetails();
    } else {
      setIsLoading(false);
    }
  }, [userBadges]);

  const mockBadges = [
    {
      id: 1,
      title: "KYC Verified",
      type: "Identity",
      issued: "2024-01-15",
      encrypted: true,
      icon: Shield,
      description: "Identity verification completed with encrypted personal data",
      attributes: ["Name", "Date of Birth", "Nationality", "Document Hash"]
    },
    {
      id: 2,
      title: "Developer Reputation",
      type: "Professional",
      issued: "2024-02-20",
      encrypted: true,
      icon: Award,
      description: "Proven track record in blockchain development",
      attributes: ["GitHub Score", "Commit History", "Project Count", "Skill Level"]
    },
    {
      id: 3,
      title: "Community Member",
      type: "Social",
      issued: "2024-03-10",
      encrypted: false,
      icon: Users,
      description: "Active participant in blockchain communities",
      attributes: ["Forum Activity", "Event Attendance", "Contribution Score"]
    }
  ];

  const displayBadges = badges.length > 0 ? badges : mockBadges;

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
      {/* Passport Document Header */}
      <div className="bg-gradient-passport p-8 rounded-2xl border-2 border-passport-gold/30 shadow-passport animate-passport-slide">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold text-passport-gold mb-2">DIGITAL PASSPORT</h2>
            <p className="text-passport-silver/80 text-sm font-medium tracking-wide">
              SOULBOUND NFT COLLECTION • PRIVATE REPUTATION SYSTEM
            </p>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-passport-gold" />
                <span className="text-xs text-passport-gold font-mono">FHE ENCRYPTED</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-passport-gold" />
                <span className="text-xs text-passport-gold font-mono">SOULBOUND</span>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-xs text-passport-silver/60 font-mono">ISSUED</div>
            <div className="text-passport-gold font-mono text-sm">2024.01.15</div>
            <div className="text-xs text-passport-silver/60 font-mono mt-2">HOLDER ID</div>
            <div className="text-passport-gold font-mono text-sm">0x742...4D21</div>
          </div>
        </div>
      </div>

      {/* Badge Collection */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <div className="col-span-full text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-passport-gold mx-auto"></div>
            <p className="text-muted-foreground mt-2">Loading badges...</p>
          </div>
        ) : (
          displayBadges.map((badge) => {
          const IconComponent = badge.icon;
          
          return (
            <Card key={badge.id} className="bg-card/80 backdrop-blur-sm border-border/50 shadow-card hover:shadow-passport transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center group-hover:animate-stamp-glow">
                      <IconComponent className="w-6 h-6 text-passport-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{badge.title}</h3>
                      <Badge variant="secondary" className="text-xs mt-1">
                        {badge.type}
                      </Badge>
                    </div>
                  </div>
                  
                  {badge.encrypted && (
                    <div className="flex items-center gap-1 px-2 py-1 bg-passport-gold/20 rounded-full">
                      <Lock className="w-3 h-3 text-passport-gold" />
                      <span className="text-xs text-passport-gold font-medium">FHE</span>
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {badge.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>Issued: {badge.issued}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground">Encrypted Attributes:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {badge.attributes.map((attr, index) => (
                      <div key={index} className="flex items-center gap-1 text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-passport-gold rounded-full" />
                        <span>{attr}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1 border-passport-gold/30 text-passport-gold hover:bg-passport-gold/10">
                    <Eye className="w-3 h-3 mr-1" />
                    View
                  </Button>
                  <Button size="sm" variant="outline" className="border-passport-gold/30 text-passport-gold hover:bg-passport-gold/10">
                    <Globe className="w-3 h-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })
        )}
      </div>

      {/* Statistics */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card className="bg-gradient-stamp border-passport-gold/20">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-passport-gold">{displayBadges.length}</div>
            <div className="text-xs text-muted-foreground">Total Badges</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-stamp border-passport-gold/20">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-passport-gold">{displayBadges.filter(b => b.encrypted).length}</div>
            <div className="text-xs text-muted-foreground">Encrypted</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-stamp border-passport-gold/20">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-passport-gold">100%</div>
            <div className="text-xs text-muted-foreground">Privacy Score</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-stamp border-passport-gold/20">
          <CardContent className="p-4 text-center">
            <div className="text-2xl font-bold text-passport-gold">∞</div>
            <div className="text-xs text-muted-foreground">Soulbound</div>
          </CardContent>
        </Card>
      </div>

      {/* Add Badge Button */}
      {address && (
        <div className="text-center">
          <Button 
            className="bg-gradient-gold text-passport-navy hover:bg-passport-gold-muted font-semibold px-8 py-3"
            onClick={() => {
              // This would open a modal to mint a new badge
              console.log('Mint new badge');
            }}
          >
            <Plus className="w-5 h-5 mr-2" />
            Mint New Badge
          </Button>
        </div>
      )}
    </div>
  );
};

export default PassportInterface;