
import { Icons } from "@/components/Icons";

export function HowItWorksSection() {
  const steps = [
    {
      icon: <Icons.brain className="h-8 w-8" />,
      title: "Create Your Agent",
      description: "Design an AI agent with specialized capabilities using our intuitive builder.",
      gradient: "from-solana-purple to-indigo-500"
    },
    {
      icon: <Icons.bot className="h-8 w-8" />,
      title: "Train & Test",
      description: "Enhance your agent's abilities through training and real-world testing.",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Icons.marketplace className="h-8 w-8" />,
      title: "Deploy on Solana",
      description: "Mint your agent as a token on the Solana blockchain with ownership verification.",
      gradient: "from-blue-500 to-teal-400"
    },
    {
      icon: <Icons.wallet className="h-8 w-8" />,
      title: "Earn Rewards",
      description: "Get paid when users utilize your agent's capabilities in the marketplace.",
      gradient: "from-teal-400 to-solana-green"
    }
  ];

  return (
    <section className="py-20 bg-solana-darkblue">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          <span className="solana-gradient-text">How It Works</span>
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          Follow these simple steps to create, deploy, and monetize your AI agents on the Solana blockchain.
        </p>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-solana-purple to-solana-green z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.gradient} mb-4`}>
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="lg:hidden mt-6 text-solana-purple">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
