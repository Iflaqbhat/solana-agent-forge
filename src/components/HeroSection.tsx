
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-no-repeat bg-cover">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(153,69,255,0.15),transparent_50%)]"></div>
      <div className="container mx-auto px-4 py-24 flex flex-col items-center text-center">
        <div className="inline-block p-3 mb-6 bg-solana-purple/10 rounded-full">
          <Icons.sparkles className="h-10 w-10 text-solana-purple" />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
          <span className="solana-gradient-text">Create, Deploy, & Monetize</span>
          <br />
          <span className="text-white">AI Agents on Solana</span>
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-gray-400 mb-8">
          Agent Forge allows you to build AI agents with real utility, deploy them to the Solana blockchain,
          and participate in the growing decentralized AI economy.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-solana-purple hover:bg-solana-purple/80">
            <Link to="/create" className="flex items-center">
              <span>Start Building</span>
              <Icons.arrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-solana-purple text-white hover:bg-solana-purple/10">
            <Link to="/marketplace">
              Explore Marketplace
            </Link>
          </Button>
        </div>
        
        <div className="mt-16 p-1 rounded-xl gradient-border">
          <div className="p-4 rounded-lg w-full max-w-5xl bg-solana-darkblue/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-4xl font-bold solana-gradient-text mb-2">500+</div>
                <div className="text-gray-400">AI Agents Deployed</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold solana-gradient-text mb-2">10k+</div>
                <div className="text-gray-400">Monthly Transactions</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold solana-gradient-text mb-2">$2M+</div>
                <div className="text-gray-400">Total Agent Value</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
