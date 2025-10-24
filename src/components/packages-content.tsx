"use client";

import { Rocket, Flame, Crown, Package, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from './ui/badge';

const packages = [
    {
        id: 'nitro',
        icon: <Rocket className="h-8 w-8 text-primary" />,
        title: 'NITRO BOOST',
        price: '',
        duration: 'vigencia mensual',
        benefits: [
            '2 Boost a este discord otorga 125 puntos cada 10 minutos.',
            '(si se eliminan los boost el rango caduca y se reducen los puntos)'
        ]
    },
    {
        id: 'vip1',
        icon: <Flame className="h-8 w-8 text-primary" />,
        title: 'VIP1',
        price: '$10 USD',
        duration: 'vigencia 15 días',
        benefits: [
            '200 puntos cada 10 minutos.',
            '⁠Comandos-ark exclusivos.',
            'Rol exclusivo en Discord y Ark.',
            'Bonus extra x1 en sorteos.'
        ]
    },
    {
        id: 'vip2',
        icon: <Flame className="h-8 w-8 text-yellow-500" />,
        title: 'VIP2',
        price: '$20 USD',
        duration: 'vigencia 15 días',
        benefits: [
            '300 puntos cada 10 minutos.',
            '⁠Comandos-ark exclusivos.',
            'Rol exclusivo en Discord y Ark.',
            'Bonus extra x2 en sorteos.'
        ]
    },
    {
        id: 'vip3',
        icon: <Flame className="h-8 w-8 text-red-500" />,
        title: 'VIP3',
        price: '$30 USD',
        duration: 'vigencia 15 días',
        benefits: [
            '400 puntos cada 10 minutos.',
            '⁠Comandos-ark exclusivos.',
            'Rol exclusivo en Discord y Ark.',
            'Bonus extra x3 en sorteos.'
        ]
    },
    {
        id: 'pack1',
        icon: <Package className="h-8 w-8 text-primary" />,
        title: 'PACK1',
        price: '$20 USD',
        duration: '',
        benefits: [
            '175k puntos + Vip1.'
        ]
    },
    {
        id: 'pack2',
        icon: <Package className="h-8 w-8 text-yellow-500" />,
        title: 'PACK2',
        price: '$35 USD',
        duration: '',
        benefits: [
            '325k puntos + Vip2.'
        ]
    },
    {
        id: 'pack3',
        icon: <Package className="h-8 w-8 text-red-500" />,
        title: 'PACK3',
        price: '$50 USD',
        duration: '',
        benefits: [
            '425k puntos + Vip3.'
        ]
    }
];


export function PackagesContent() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
                <Card key={pkg.id} className="group overflow-hidden rounded-xl border-border bg-card text-card-foreground transition-all duration-300 hover:shadow-primary/30 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/50 flex flex-col">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <div className="flex items-center gap-3">
                            {pkg.icon}
                            <CardTitle className="text-2xl font-bold uppercase">{pkg.title}</CardTitle>
                        </div>
                        {pkg.price && <Badge variant="destructive" className="text-lg">{pkg.price}</Badge>}
                    </CardHeader>
                    <CardContent className="flex-grow pt-2">
                        {pkg.duration && <p className="text-sm text-muted-foreground italic mb-4">{pkg.duration}</p>}
                        <ul className="space-y-2">
                            {pkg.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start text-sm">
                                    <ArrowRight className="h-4 w-4 mr-2 mt-1 shrink-0 text-green-500" />
                                    <span>{benefit.replace(/⁠🦕・/g, '')}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardFooter>
                         <Button className="w-full uppercase font-bold" onClick={() => console.log(`Buying ${pkg.title}`)}>
                            Comprar Paquete
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}
