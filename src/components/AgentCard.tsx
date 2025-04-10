
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Icons } from "@/components/Icons";

interface AgentCardProps {
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  type: string;
  popularity: number;
  onClick?: () => void;
}

export function AgentCard({
  name,
  description,
  price,
  imageUrl,
  type,
  popularity,
  onClick,
}: AgentCardProps) {
  const truncatedDescription = description.length > 100 
    ? description.slice(0, 100) + '...'
    : description;

  return (
    <Card className="agent-card overflow-hidden h-full flex flex-col">
      <CardHeader className="p-0">
        <div className="relative w-full h-40 bg-solana-darkblue">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-full h-40 object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-solana-purple/20 to-solana-green/20">
              <Icons.brain className="h-16 w-16 text-solana-purple/70" />
            </div>
          )}
          <div className="absolute top-2 right-2">
            <Badge 
              className={`${
                type === 'Consumer' 
                  ? 'bg-blue-500' 
                  : type === 'DeFi' 
                  ? 'bg-green-500' 
                  : 'bg-purple-500'
              } text-white`}
            >
              {type}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <h3 className="text-lg font-bold mb-2">{name}</h3>
        <p className="text-sm text-gray-400">{truncatedDescription}</p>
        <div className="flex items-center mt-4 text-gray-400 text-xs">
          <span className="flex items-center">
            <Icons.users className="h-3 w-3 mr-1" />
            {popularity} users
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 border-t border-solana-purple/20 flex items-center justify-between">
        <span className="text-solana-green font-bold">{price} SOL</span>
        <Button variant="outline" className="border-solana-purple text-solana-green hover:bg-solana-purple/10" onClick={onClick}>
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
