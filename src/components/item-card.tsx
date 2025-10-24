"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import type { Item } from '@/lib/items';
import { Badge } from './ui/badge';

type ItemCardProps = {
  item: Item;
};

export function ItemCard({ item }: ItemCardProps) {
  const [hasCopied, setHasCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(item.command);
    setHasCopied(true);
    toast({
      title: 'Command Copied!',
      description: item.name,
    });
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const buttonText = item.type === 'dino' ? 'Copy Buy Command' : 'Copy Sell Command';

  return (
    <Card className="group overflow-hidden rounded-xl border-border bg-card text-card-foreground transition-all duration-300 hover:shadow-primary/30 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/50 flex flex-col">
        <CardHeader className="p-0">
            <div className="relative h-48 w-full">
                <Image
                    src={item.image.imageUrl}
                    alt={item.name}
                    width={400}
                    height={300}
                    className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-110"
                    data-ai-hint={item.image.imageHint}
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                 {item.price && <Badge variant="destructive" className="absolute top-2 right-2 animate-pulse" style={{animation: 'price-pulse 2s infinite'}}>{item.price} points</Badge>}
            </div>
        </CardHeader>
        <CardContent className="p-4 flex-grow">
            <CardTitle className="font-semibold text-lg truncate mb-1 text-primary">{item.name}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            {item.level && <p className="text-sm text-muted-foreground mt-1">Nivel: {item.level}</p>}
        </CardContent>
        <CardFooter className="flex justify-between items-center p-4 pt-0">
            <Button
                variant="secondary"
                onClick={handleCopy}
                aria-label={`Copy command for ${item.name}`}
                className="w-full bg-primary/20 hover:bg-primary/30 text-primary-foreground"
            >
                {hasCopied ? (
                    <>
                        <Check className="h-5 w-5 text-primary" />
                        <span>Copied!</span>
                    </>
                ) : (
                    <>
                        <Copy className="h-5 w-5" />
                        <span>{buttonText}</span>
                    </>
                )}
            </Button>
        </CardFooter>
    </Card>
  );
}
