import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wallet, ChevronDown, Copy, ExternalLink, CheckCircle } from "lucide-react";
import { useAccount, useConnect, useDisconnect } from 'wagmi';

const WalletConnector = () => {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const copyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
    }
  };

  const formatAddress = (address: string) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-card">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
              <Wallet className="w-6 h-6 text-passport-navy" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Wallet Connection</h3>
              <p className="text-sm text-muted-foreground">
                {isConnected ? "Connected to MetaMask" : "Connect your wallet to access badges"}
              </p>
            </div>
          </div>

          {!isConnected ? (
            <div className="flex gap-2">
              {connectors.map((connector) => (
                <Button
                  key={connector.uid}
                  onClick={() => connect({ connector })}
                  className="bg-gradient-gold text-passport-navy hover:bg-passport-gold-muted font-semibold px-6"
                >
                  Connect {connector.name}
                </Button>
              ))}
            </div>
          ) : (
            <div className="relative">
              <Button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                variant="outline"
                className="border-passport-gold/30 text-passport-gold hover:bg-passport-gold/10 font-mono"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                {formatAddress(address)}
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>

              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-passport z-50 animate-fade-in">
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Address:</span>
                      <div className="flex items-center gap-2">
                        <code className="text-xs font-mono text-foreground">{formatAddress(address)}</code>
                        <Button
                          onClick={copyAddress}
                          size="sm"
                          variant="ghost"
                          className="h-6 w-6 p-0"
                        >
                          <Copy className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Status:</span>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm font-medium text-green-500">Connected</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-border space-y-2">
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-sm text-muted-foreground hover:text-foreground"
                        onClick={() => window.open(`https://etherscan.io/address/${address}`, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View on Etherscan
                      </Button>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-sm text-red-500 hover:text-red-600"
                        onClick={() => {
                          disconnect();
                          setIsDropdownOpen(false);
                        }}
                      >
                        Disconnect
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {isConnected && (
          <div className="mt-4 p-3 bg-gradient-stamp rounded-lg border border-passport-gold/20">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-passport-gold" />
              <span className="text-sm text-passport-gold font-medium">
                Ready to view and manage your private reputation badges
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WalletConnector;