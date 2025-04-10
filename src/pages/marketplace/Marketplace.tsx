
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AgentCard } from "@/components/AgentCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";

// Sample marketplace data
const agentsData = [
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
  },
  {
    id: "5",
    name: "GreenEnergy Monitor",
    description: "Track and optimize renewable energy usage with blockchain-verified metrics.",
    price: 2.7,
    type: "DePin",
    popularity: 521,
  },
  {
    id: "6",
    name: "HealthData Guardian",
    description: "Secure health data management with privacy-preserving AI analysis.",
    price: 3.5,
    type: "Consumer",
    popularity: 732,
  },
  {
    id: "7",
    name: "YieldOptimizer",
    description: "Automated yield farming strategies for Solana DeFi protocols.",
    price: 5.2,
    type: "DeFi",
    popularity: 1532,
  },
  {
    id: "8",
    name: "Urban Mobility Tracker",
    description: "City-wide transport optimization with decentralized data collection.",
    price: 2.9,
    type: "DePin",
    popularity: 428,
  },
];

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<string>("All");
  const [sortOption, setSortOption] = useState<string>("popularity");
  
  // Filter and sort agents
  const filteredAgents = agentsData
    .filter(agent => 
      (filterType === "All" || agent.type === filterType) &&
      (agent.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
       agent.description.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortOption === "price-low") return a.price - b.price;
      if (sortOption === "price-high") return b.price - a.price;
      if (sortOption === "popularity") return b.popularity - a.popularity;
      return 0;
    });

  // Extract unique agent types
  const agentTypes = ["All", ...Array.from(new Set(agentsData.map(agent => agent.type)))];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                <span className="solana-gradient-text">Agent Marketplace</span>
              </h1>
              <p className="text-gray-400">
                Discover and purchase AI agents built for the Solana ecosystem
              </p>
            </div>
            <Button className="mt-4 md:mt-0 bg-solana-purple hover:bg-solana-purple/80">
              Submit Your Agent
            </Button>
          </div>

          {/* Filters and Search */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 p-4 rounded-lg border border-solana-purple/20 bg-solana-darkblue/50">
            <div className="relative">
              <Input 
                placeholder="Search agents..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-solana-dark/50 border-solana-purple/20"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>

            <Select
              value={filterType}
              onValueChange={setFilterType}
            >
              <SelectTrigger className="bg-solana-dark/50 border-solana-purple/20">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Agent Type</SelectLabel>
                  {agentTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select
              value={sortOption}
              onValueChange={setSortOption}
            >
              <SelectTrigger className="bg-solana-dark/50 border-solana-purple/20">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Sort Options</SelectLabel>
                  <SelectItem value="popularity">Most Popular</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Active Filters */}
          {(searchTerm || filterType !== "All") && (
            <div className="flex flex-wrap gap-2 mb-6">
              {searchTerm && (
                <Badge variant="outline" className="bg-solana-darkblue border-solana-purple/30 px-3 py-1">
                  Search: {searchTerm}
                  <button 
                    className="ml-2 text-gray-400 hover:text-white"
                    onClick={() => setSearchTerm("")}
                  >
                    ×
                  </button>
                </Badge>
              )}
              {filterType !== "All" && (
                <Badge variant="outline" className="bg-solana-darkblue border-solana-purple/30 px-3 py-1">
                  Type: {filterType}
                  <button 
                    className="ml-2 text-gray-400 hover:text-white"
                    onClick={() => setFilterType("All")}
                  >
                    ×
                  </button>
                </Badge>
              )}
            </div>
          )}

          {/* Results Count */}
          <p className="text-gray-400 mb-6">
            Showing {filteredAgents.length} {filteredAgents.length === 1 ? "agent" : "agents"}
          </p>

          {/* Agent Grid */}
          {filteredAgents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {filteredAgents.map((agent) => (
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
          ) : (
            <div className="text-center py-12">
              <div className="inline-block p-4 mb-4 rounded-full bg-solana-purple/10">
                <Icons.bot className="h-8 w-8 text-solana-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">No agents found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button 
                variant="outline" 
                className="border-solana-purple text-white"
                onClick={() => {
                  setSearchTerm("");
                  setFilterType("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
