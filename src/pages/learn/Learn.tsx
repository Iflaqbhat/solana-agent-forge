
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/Icons";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const Learn = () => {
  const tutorials = [
    {
      id: "1",
      title: "Getting Started with Solana AI Agents",
      description: "Learn the basics of creating and deploying an AI agent on Solana.",
      category: "Beginner",
      duration: "15 min",
      author: "Solana Foundation",
    },
    {
      id: "2",
      title: "Building DePin Applications",
      description: "How to create decentralized physical infrastructure networks with AI agents.",
      category: "Intermediate",
      duration: "25 min",
      author: "SuperteamUK",
    },
    {
      id: "3",
      title: "DeFi Automation with Solana Agents",
      description: "Create AI agents that can interact with DeFi protocols on Solana.",
      category: "Advanced",
      duration: "40 min",
      author: "Helius Labs",
    },
    {
      id: "4",
      title: "Integration with Web3 Services",
      description: "Connect your agent to other blockchain services and APIs.",
      category: "Intermediate",
      duration: "30 min",
      author: "Jupiter Exchange",
    },
  ];

  const documentation = [
    {
      id: "1",
      title: "Agent Forge API Reference",
      description: "Complete documentation of the Agent Forge API.",
      category: "Reference",
      updated: "2025-04-01",
    },
    {
      id: "2",
      title: "Marketplace Integration Guide",
      description: "How to list and sell your agents on the marketplace.",
      category: "Guide",
      updated: "2025-03-25",
    },
    {
      id: "3",
      title: "Security Best Practices",
      description: "Securing your AI agents and user data on the blockchain.",
      category: "Guide",
      updated: "2025-03-18",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 max-w-3xl">
            <h1 className="text-3xl font-bold mb-4">
              <span className="solana-gradient-text">Learn</span> <span className="text-white">how to build on Agent Forge</span>
            </h1>
            <p className="text-gray-400 text-lg mb-6">
              Explore tutorials, documentation, and guides to start building AI agents on Solana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-solana-purple hover:bg-solana-purple/80">
                <Icons.bookOpen className="mr-2 h-5 w-5" />
                Start Learning
              </Button>
              <Button size="lg" variant="outline" className="border-solana-purple text-white hover:bg-solana-purple/10">
                <Icons.github className="mr-2 h-5 w-5" />
                View GitHub
              </Button>
            </div>
          </div>

          {/* Featured tutorial */}
          <div className="mb-16 p-6 rounded-lg relative overflow-hidden bg-solana-darkblue/50 border border-solana-purple/20">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(153,69,255,0.15),transparent_50%)]"></div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <Badge className="bg-solana-purple/20 text-solana-purple hover:bg-solana-purple/30 mb-4">Featured</Badge>
                <h2 className="text-2xl font-bold mb-4">Solana Agent SDK: Complete Guide</h2>
                <p className="text-gray-400 mb-6">
                  A comprehensive walkthrough of the Solana Agent SDK, covering everything from 
                  basic setup to advanced agent capabilities and on-chain deployment.
                </p>
                <div className="flex items-center mb-6">
                  <div className="flex items-center mr-6">
                    <Icons.clock className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-sm text-gray-400">45 min</span>
                  </div>
                  <div className="flex items-center">
                    <Icons.graduationCap className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-sm text-gray-400">Intermediate</span>
                  </div>
                </div>
                <Button className="bg-solana-purple hover:bg-solana-purple/80">
                  View Tutorial
                </Button>
              </div>
              <div className="md:w-1/2 flex items-center justify-center">
                <div className="aspect-video w-full max-w-md rounded-lg overflow-hidden border border-solana-purple/20 bg-solana-darkblue/70 flex items-center justify-center">
                  <Icons.play className="h-16 w-16 text-solana-purple opacity-80" />
                </div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="tutorials" className="mb-16">
            <TabsList className="bg-solana-darkblue/70 border border-solana-purple/20">
              <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
              <TabsTrigger value="documentation">Documentation</TabsTrigger>
              <TabsTrigger value="examples">Example Agents</TabsTrigger>
            </TabsList>
            
            <TabsContent value="tutorials" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tutorials.map((tutorial) => (
                  <Card key={tutorial.id} className="bg-solana-darkblue/30 border-solana-purple/20">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <Badge className={
                          tutorial.category === "Beginner"
                            ? "bg-green-500/20 text-green-400"
                            : tutorial.category === "Intermediate"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-red-500/20 text-red-400"
                        }>
                          {tutorial.category}
                        </Badge>
                        <div className="flex items-center">
                          <Icons.clock className="h-4 w-4 mr-1 text-gray-400" />
                          <span className="text-xs text-gray-400">{tutorial.duration}</span>
                        </div>
                      </div>
                      <CardTitle className="mt-4">{tutorial.title}</CardTitle>
                      <CardDescription>{tutorial.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between border-t border-solana-purple/10 pt-4">
                      <div className="text-xs text-gray-400">By {tutorial.author}</div>
                      <Button variant="ghost" size="sm" className="text-solana-purple">
                        Start <Icons.arrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button variant="outline" className="border-solana-purple text-white hover:bg-solana-purple/10">
                  View All Tutorials
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="documentation" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {documentation.map((doc) => (
                  <Card key={doc.id} className="bg-solana-darkblue/30 border-solana-purple/20">
                    <CardHeader>
                      <Badge className={
                        doc.category === "Reference"
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-purple-500/20 text-purple-400"
                      }>
                        {doc.category}
                      </Badge>
                      <CardTitle className="mt-4">{doc.title}</CardTitle>
                      <CardDescription>{doc.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between border-t border-solana-purple/10 pt-4">
                      <div className="text-xs text-gray-400">Updated {new Date(doc.updated).toLocaleDateString()}</div>
                      <Button variant="ghost" size="sm" className="text-solana-purple">
                        Read <Icons.externalLink className="ml-1 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button variant="outline" className="border-solana-purple text-white hover:bg-solana-purple/10">
                  View All Documentation
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="examples" className="mt-6">
              <div className="p-8 text-center bg-solana-darkblue/30 border border-solana-purple/20 rounded-lg">
                <div className="inline-block p-3 mb-4 rounded-full bg-solana-purple/10">
                  <Icons.code className="h-8 w-8 text-solana-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">Example Agents Coming Soon</h3>
                <p className="text-gray-400 max-w-md mx-auto mb-6">
                  Our team is currently developing example agents to showcase the capabilities of the platform.
                </p>
                <Button variant="outline" className="border-solana-purple text-white hover:bg-solana-purple/10">
                  <Icons.github className="mr-2 h-4 w-4" />
                  Check Our GitHub
                </Button>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Resources */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-solana-darkblue/30 border border-solana-purple/20 rounded-lg">
                <div className="inline-block p-2 mb-4 rounded-full bg-solana-purple/10">
                  <Icons.users className="h-6 w-6 text-solana-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-gray-400 mb-4">
                  Join our Discord community to connect with other developers and get help.
                </p>
                <Button variant="outline" size="sm" className="border-solana-purple text-white hover:bg-solana-purple/10">
                  Join Discord
                </Button>
              </div>
              
              <div className="p-6 bg-solana-darkblue/30 border border-solana-purple/20 rounded-lg">
                <div className="inline-block p-2 mb-4 rounded-full bg-solana-purple/10">
                  <Icons.youtube className="h-6 w-6 text-solana-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">Video Tutorials</h3>
                <p className="text-gray-400 mb-4">
                  Watch step-by-step video tutorials on our YouTube channel.
                </p>
                <Button variant="outline" size="sm" className="border-solana-purple text-white hover:bg-solana-purple/10">
                  Watch Videos
                </Button>
              </div>
              
              <div className="p-6 bg-solana-darkblue/30 border border-solana-purple/20 rounded-lg">
                <div className="inline-block p-2 mb-4 rounded-full bg-solana-purple/10">
                  <Icons.fileText className="h-6 w-6 text-solana-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">Blog</h3>
                <p className="text-gray-400 mb-4">
                  Read articles and updates about Agent Forge and the Solana ecosystem.
                </p>
                <Button variant="outline" size="sm" className="border-solana-purple text-white hover:bg-solana-purple/10">
                  Read Blog
                </Button>
              </div>
            </div>
          </div>
          
          {/* FAQ */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="p-4 bg-solana-darkblue/30 border border-solana-purple/20 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">What is an AI agent on Solana?</h3>
                <p className="text-gray-400">
                  An AI agent on Solana is a software entity that uses artificial intelligence to perform tasks,
                  make decisions, and interact with blockchain data, while leveraging Solana's high-performance
                  blockchain for secure and transparent operations.
                </p>
              </div>
              
              <div className="p-4 bg-solana-darkblue/30 border border-solana-purple/20 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">How do I monetize my agent?</h3>
                <p className="text-gray-400">
                  You can monetize your agent by listing it on the Agent Forge marketplace, where users can purchase
                  licenses to use your agent. You set the price and receive payments directly to your Solana wallet.
                </p>
              </div>
              
              <div className="p-4 bg-solana-darkblue/30 border border-solana-purple/20 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">What programming languages are supported?</h3>
                <p className="text-gray-400">
                  Agent Forge supports multiple programming languages including JavaScript, TypeScript, Python,
                  and Rust for creating AI agents. Our SDK provides libraries for each of these languages.
                </p>
              </div>
              
              <div className="p-4 bg-solana-darkblue/30 border border-solana-purple/20 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Do I need to know blockchain development?</h3>
                <p className="text-gray-400">
                  While some blockchain knowledge is helpful, our SDK abstracts much of the complexity,
                  allowing developers to focus on building AI functionality rather than blockchain mechanics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Learn;
