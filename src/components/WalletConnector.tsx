import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Wallet, ChevronDown, Copy, ExternalLink, CheckCircle, Loader2 } from "lucide-react";
import { useAccount, useConnect, useDisconnect } from 'wagmi';

const WalletConnector = () => {
  const { address, isConnected, connector } = useAccount();
  const { connect, connectors, isPending, error } = useConnect();
  const { disconnect } = useDisconnect();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const copyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
    }
  };

  const formatAddress = (address: string) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const handleConnect = (selectedConnector: any) => {
    connect({ connector: selectedConnector });
    setIsDialogOpen(false);
  };

  if (isConnected && address) {
    return (
      <Card className="bg-white border border-gray-200 shadow-sm">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">Wallet Connected</h3>
                <p className="text-xs text-gray-500">
                  {connector?.name || 'Wallet'}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Address:</span>
                <div className="flex items-center gap-2">
                  <code className="text-xs font-mono text-gray-700 bg-gray-100 px-2 py-1 rounded">
                    {formatAddress(address)}
                  </code>
                  <Button
                    onClick={copyAddress}
                    size="sm"
                    variant="ghost"
                    className="h-6 w-6 p-0 hover:bg-gray-100"
                  >
                    <Copy className="w-3 h-3" />
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Status:</span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-xs font-medium text-green-600">Connected</span>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-200 space-y-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start text-xs text-gray-600 hover:text-gray-900 h-8"
                  onClick={() => window.open(`https://etherscan.io/address/${address}`, '_blank')}
                >
                  <ExternalLink className="w-3 h-3 mr-2" />
                  View on Etherscan
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-start text-xs text-red-600 hover:text-red-700 hover:bg-red-50 h-8"
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
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white border border-gray-200 shadow-sm">
      <CardContent className="p-6">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto">
            <Wallet className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">Connect Wallet</h3>
            <p className="text-xs text-gray-500 mt-1">
              Connect your wallet to access your badges
            </p>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 font-medium"
              >
                <Wallet className="w-4 h-4 mr-2" />
                Connect Wallet
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Connect Wallet</DialogTitle>
                <DialogDescription>
                  Choose a wallet to connect to Secure Soul ID
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-3">
                {connectors.map((connector) => (
                  <Button
                    key={connector.uid}
                    variant="outline"
                    className="w-full justify-start h-auto p-4"
                    onClick={() => handleConnect(connector)}
                    disabled={isPending}
                  >
                    <div className="flex items-center space-x-3">
                      {isPending ? (
                        <Loader2 className="h-5 w-5 animate-spin" />
                      ) : (
                        <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center">
                          <Wallet className="h-3 w-3 text-blue-600" />
                        </div>
                      )}
                      <div className="text-left">
                        <div className="font-medium">{connector.name}</div>
                        <div className="text-xs text-gray-500">
                          {connector.type === 'injected' ? 'Browser Extension' : 
                           connector.type === 'walletConnect' ? 'Mobile & Desktop' :
                           'Hardware Wallet'}
                        </div>
                      </div>
                    </div>
                  </Button>
                ))}
                
                {error && (
                  <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="text-sm text-red-600">
                      {error.message}
                    </span>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  );
};

export default WalletConnector;