
import { Icons } from "@/components/Icons";

export function FeaturesSection() {
  const features = [
    {
      icon: <Icons.brain className="h-10 w-10" />,
      title: "Build Custom Agents",
      description: "Create specialized AI agents with unique capabilities and expertise."
    },
    {
      icon: <Icons.bot className="h-10 w-10" />,
      title: "Agent Marketplace",
      description: "Buy, sell, and trade AI agents on our decentralized marketplace."
    },
    {
      icon: <Icons.wallet className="h-10 w-10" />,
      title: "Solana Powered",
      description: "Leverage Solana's speed and low fees for efficient agent transactions."
    },
    {
      icon: <Icons.marketplace className="h-10 w-10" />,
      title: "Monetize Your Agents",
      description: "Earn rewards when your agents are used or traded on the network."
    }
  ];

  return (
    <section className="py-20 bg-solana-darkblue">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="solana-gradient-text">Powerful Features</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg backdrop-blur-md bg-solana-dark/50 border border-solana-purple/20 hover:border-solana-purple/40 transition-all"
            >
              <div className="p-3 mb-4 inline-block rounded-full bg-solana-purple/10 text-solana-purple">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
