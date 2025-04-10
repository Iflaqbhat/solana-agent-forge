
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/Icons";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block p-4 mb-6 rounded-full bg-solana-purple/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-10 w-10 text-solana-purple"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold mb-4 solana-gradient-text">404</h1>
          <p className="text-xl text-gray-400 mb-8">
            Oops! The page you're looking for doesn't exist in the Agent Forge.
          </p>
          <Button className="bg-solana-purple hover:bg-solana-purple/80">
            <Link to="/" className="flex items-center">
              <Icons.arrowRight className="mr-2 h-4 w-4 rotate-180" />
              <span>Return to Home</span>
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
