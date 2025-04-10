
import { AgentCard } from "@/components/AgentCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Sample data for popular agents
const popularAgents = [
  {
    id: "1",
    name: "MarketSense AI",
    description: "Real-time market analysis and trading signals for DeFi platforms on Solana.",
    price: 2.5,
    type: "DeFi",
    popularity: 1245,
  },
  {
    id: "2",
    name: "HomeHub Controller",
    description: "Manage smart home devices and automate routines with blockchain verification.",
    price: 1.8,
    type: "Consumer",
    popularity: 876,
  },
  {
    id: "3",
    name: "Supply Chain Tracker",
    description: "End-to-end supply chain monitoring with immutable verification on Solana.",
    price: 3.2,
    type: "DePin",
    popularity: 654,
  },
  {
    id: "4",
    name: "SolanaSentry",
    description: "AI security monitoring for Solana wallets and NFT collections.",
    price: 4.0,
    type: "Security",
    popularity: 1089,
  }
];

export function PopularAgentsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">
            <span className="solana-gradient-text">Popular Agents</span>
          </h2>
          <Button variant="outline" className="border-solana-purple text-white hover:bg-solana-purple/10">
            <Link to="/marketplace">View All</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularAgents.map((agent) => (
            <AgentCard
              key={agent.id}
              name={agent.name}
              description={agent.description}
              price={agent.price}
              type={agent.type}
              popularity={agent.popularity}
              onClick={() => console.log(`View details for ${agent.name}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
