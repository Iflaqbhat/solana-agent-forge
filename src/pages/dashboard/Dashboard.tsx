
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/Icons";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  // Sample data for dashboard
  const myAgents = [
    {
      id: "1",
      name: "Market Analyzer",
      status: "active",
      revenue: 2.45,
      users: 128,
      type: "DeFi",
    },
    {
      id: "2",
      name: "Smart Home Controller",
      status: "pending",
      revenue: 0,
      users: 0,
      type: "Consumer",
    },
  ];

  const transactionHistory = [
    { id: "1", date: "2025-04-08", type: "Purchase", amount: -1.2, description: "SolanaSentry" },
    { id: "2", date: "2025-04-07", type: "Sale", amount: 0.5, description: "Market Analyzer license" },
    { id: "3", date: "2025-04-05", type: "Sale", amount: 0.5, description: "Market Analyzer license" },
    { id: "4", date: "2025-04-02", type: "Sale", amount: 0.5, description: "Market Analyzer license" },
    { id: "5", date: "2025-04-01", type: "Purchase", amount: -2.1, description: "YieldOptimizer" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                <span className="solana-gradient-text">Dashboard</span>
              </h1>
              <p className="text-gray-400">
                Manage your Solana AI agents and track performance
              </p>
            </div>
            <Button className="mt-4 md:mt-0 bg-solana-purple hover:bg-solana-purple/80">
              <Icons.plus className="mr-2 h-4 w-4" />
              Create New Agent
            </Button>
          </div>

          {/* Overview Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-solana-darkblue/50 border-solana-purple/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">Total Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2.45 SOL</div>
                <p className="text-xs text-green-400 flex items-center mt-1">
                  <Icons.trendingUp className="h-3 w-3 mr-1" />
                  +20% from last month
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-solana-darkblue/50 border-solana-purple/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">Agent Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">128</div>
                <p className="text-xs text-green-400 flex items-center mt-1">
                  <Icons.trendingUp className="h-3 w-3 mr-1" />
                  +12 new users
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-solana-darkblue/50 border-solana-purple/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">Active Agents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1</div>
                <p className="text-xs text-yellow-400 flex items-center mt-1">
                  <Icons.alertCircle className="h-3 w-3 mr-1" />
                  1 pending approval
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-solana-darkblue/50 border-solana-purple/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-400">Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.15 SOL</div>
                <p className="text-xs text-gray-400 mt-1">
                  Available to withdraw
                </p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="myAgents" className="mb-8">
            <TabsList className="bg-solana-darkblue/70 border border-solana-purple/20">
              <TabsTrigger value="myAgents">My Agents</TabsTrigger>
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="myAgents" className="mt-6">
              <div className="rounded-lg overflow-hidden border border-solana-purple/20">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-solana-darkblue/70">
                      <tr>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-400">Agent Name</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-400">Type</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-400">Status</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-400">Revenue</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-400">Users</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-400">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-solana-darkblue/30">
                      {myAgents.map((agent) => (
                        <tr key={agent.id} className="border-t border-solana-purple/10">
                          <td className="py-4 px-4">
                            <div className="font-medium">{agent.name}</div>
                          </td>
                          <td className="py-4 px-4">
                            <Badge variant="outline" className="bg-solana-darkblue border-solana-purple/30">
                              {agent.type}
                            </Badge>
                          </td>
                          <td className="py-4 px-4">
                            {agent.status === "active" ? (
                              <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30">
                                Active
                              </Badge>
                            ) : (
                              <Badge className="bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30">
                                Pending
                              </Badge>
                            )}
                          </td>
                          <td className="py-4 px-4">
                            <div className="font-medium">{agent.revenue} SOL</div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="font-medium">{agent.users}</div>
                          </td>
                          <td className="py-4 px-4">
                            <Button variant="ghost" size="sm">
                              <Icons.settings className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Icons.barChart className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="transactions" className="mt-6">
              <div className="rounded-lg overflow-hidden border border-solana-purple/20">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-solana-darkblue/70">
                      <tr>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-400">Date</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-400">Description</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-400">Type</th>
                        <th className="py-3 px-4 text-right text-xs font-medium text-gray-400">Amount (SOL)</th>
                      </tr>
                    </thead>
                    <tbody className="bg-solana-darkblue/30">
                      {transactionHistory.map((tx) => (
                        <tr key={tx.id} className="border-t border-solana-purple/10">
                          <td className="py-3 px-4 text-sm">
                            {new Date(tx.date).toLocaleDateString()}
                          </td>
                          <td className="py-3 px-4 text-sm">
                            {tx.description}
                          </td>
                          <td className="py-3 px-4">
                            {tx.type === "Sale" ? (
                              <Badge className="bg-green-500/20 text-green-400 hover:bg-green-500/30">
                                Sale
                              </Badge>
                            ) : (
                              <Badge className="bg-blue-500/20 text-blue-400 hover:bg-blue-500/30">
                                Purchase
                              </Badge>
                            )}
                          </td>
                          <td className={`py-3 px-4 text-right font-medium ${tx.amount > 0 ? "text-green-400" : "text-gray-300"}`}>
                            {tx.amount > 0 ? "+" : ""}{tx.amount}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="analytics" className="mt-6">
              <div className="p-8 text-center bg-solana-darkblue/30 border border-solana-purple/20 rounded-lg">
                <div className="inline-block p-3 mb-4 rounded-full bg-solana-purple/10">
                  <Icons.barChart className="h-8 w-8 text-solana-purple" />
                </div>
                <h3 className="text-xl font-bold mb-2">Analytics Coming Soon</h3>
                <p className="text-gray-400 max-w-md mx-auto mb-6">
                  Detailed analytics and reporting features are currently in development.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
