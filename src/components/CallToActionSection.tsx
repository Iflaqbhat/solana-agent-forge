
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import { Link } from "react-router-dom";

export function CallToActionSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(153,69,255,0.15),transparent_50%)]"></div>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            <span className="solana-gradient-text">Ready to Build the Future?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Join the Solana Agent Forge community and start creating, deploying, and monetizing 
            AI agents on the fastest blockchain in the world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-solana-purple hover:bg-solana-purple/80">
              <Link to="/create" className="flex items-center">
                <span>Start Creating</span>
                <Icons.arrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-solana-purple text-white hover:bg-solana-purple/10">
              <Link to="/learn">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
