
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [connected, setConnected] = useState(false);

  const handleConnectWallet = () => {
    // In a real implementation, this would connect to a Solana wallet
    setConnected(!connected);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-solana-darkblue/50 border-b border-solana-purple/20">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <Icons.logo className="h-8 w-8 text-solana-purple" />
            <span className="font-bold text-xl solana-gradient-text">Agent Forge</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link to="/create" className="text-foreground/70 hover:text-foreground transition-colors">
            Create
          </Link>
          <Link to="/marketplace" className="text-foreground/70 hover:text-foreground transition-colors">
            Marketplace
          </Link>
          <Link to="/dashboard" className="text-foreground/70 hover:text-foreground transition-colors">
            Dashboard
          </Link>
          <Link to="/learn" className="text-foreground/70 hover:text-foreground transition-colors">
            Learn
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button 
            variant={connected ? "outline" : "default"}
            className={connected ? "border-solana-purple text-solana-green" : "bg-solana-purple hover:bg-solana-purple/80"}
            onClick={handleConnectWallet}
          >
            <div className="flex items-center gap-2">
              {connected ? (
                <>
                  <div className="h-2 w-2 rounded-full bg-solana-green mr-1"></div>
                  <span>Connected</span>
                </>
              ) : (
                <>
                  <Icons.wallet className="h-4 w-4" />
                  <span>Connect Wallet</span>
                </>
              )}
            </div>
          </Button>
        </div>
      </div>
    </header>
  );
}
