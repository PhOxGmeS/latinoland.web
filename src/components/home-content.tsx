"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Map, Calendar, Shield, Globe, Copy, Check, Info } from "lucide-react";
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const EpicGamesLogo = (props: {className: string}) => (
    <Image 
        src="https://i.ibb.co/KzqttXh/243-2435034-epic-games-epic-games-logo-png-removebg-preview.png" 
        alt="Epic Games Logo" 
        width={24} 
        height={24} 
        className={props.className} 
    />
);

const SteamLogo = (props: {className: string}) => (
    <Image
        src="https://www.pngplay.com/wp-content/uploads/13/Steam-Logo-Transparent-PNG.png"
        alt="Steam Logo"
        width={24}
        height={24}
        className={props.className}
    />
);

export function HomeContent() {
    const [hasCopiedEpic, setHasCopiedEpic] = useState(false);
    const { toast } = useToast();

    const steamIp = "216.245.177.39:27051";
    const epicIp = "open 216.245.177.39:7803";

    const handleCopyEpic = () => {
        navigator.clipboard.writeText(epicIp);
        setHasCopiedEpic(true);
        toast({
            title: 'Comando Copiado!',
            description: 'El comando para Epic Games ha sido copiado.',
        });
        setTimeout(() => {
            setHasCopiedEpic(false);
        }, 2000);
    };

    return (
        <TooltipProvider>
            <div className="flex flex-col items-center justify-center py-12">
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <h2 className="text-5xl font-extrabold uppercase text-white mb-4 tracking-wider" style={{textShadow: '0 0 20px hsl(var(--primary) / 0.9), 0 0 30px hsl(var(--primary) / 0.7)'}}>
                        Bienvenido a Latinoland ARK
                    </h2>
                    <p className="text-xl text-primary-foreground/90">
                        Tu aventura de supervivencia definitiva. Únete a nuestro servidor y demuestra que tienes lo necesario para dominar el arca.
                    </p>
                </div>
                
                <Card className="w-full max-w-4xl bg-card/60 backdrop-blur-md border-primary/20 shadow-2xl shadow-primary/10">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-center text-primary">Información del Servidor</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
                            <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg">
                                <Server className="h-8 w-8 text-primary shrink-0" />
                                <div>
                                    <p className="font-semibold text-foreground">Versión de Ark</p>
                                    <p className="text-muted-foreground">360.26</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg">
                                <Map className="h-8 w-8 text-primary shrink-0" />
                                <div>
                                    <p className="font-semibold text-foreground">Mapa</p>
                                    <p className="text-muted-foreground">Fjordur</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg">
                                <Calendar className="h-8 w-8 text-primary shrink-0" />
                                <div>
                                    <p className="font-semibold text-foreground">Modo de juego PVPE</p>
                                    <p className="text-muted-foreground">Lunes-Viernes PVE, <br/> Sábado-Domingo PVP</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg">
                                <Shield className="h-8 w-8 text-primary shrink-0" />
                                <div>
                                    <p className="font-semibold text-foreground">Modo de juego PVE</p>
                                    <p className="text-muted-foreground">Solicita ser full PVE en discord</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg col-span-1 md:col-span-2">
                                 <Globe className="h-8 w-8 text-primary shrink-0" />
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 w-full">
                                    <p className="font-semibold text-foreground">Plataformas:</p>
                                    <div className="flex items-center gap-4 text-muted-foreground">
                                       <div className="flex items-center gap-2">
                                           <SteamLogo className="h-6 w-6"/>
                                           <span>Steam</span>
                                       </div>
                                       <div className="flex items-center gap-2">
                                           <EpicGamesLogo className="h-6 w-6"/>
                                           <span>Epic Games</span>
                                       </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg">
                                <SteamLogo className="h-8 w-8 text-primary shrink-0" />
                                <div>
                                    <p className="font-semibold text-foreground">IP Steam</p>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <a href={`steam://connect/${steamIp}`} className="text-muted-foreground hover:text-primary hover:underline underline-offset-4 cursor-pointer">
                                                {steamIp}
                                            </a>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Click para conectar</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg">
                                <EpicGamesLogo className="h-8 w-8 text-primary" />
                                <div>
                                    <p className="font-semibold text-foreground">IP Epic</p>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <div onClick={handleCopyEpic} className="flex items-center gap-2 text-muted-foreground hover:text-primary cursor-pointer">
                                                <span>{epicIp}</span>
                                                {hasCopiedEpic ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                                            </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Click para copiar comando</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                 <Card className="w-full max-w-4xl bg-card/60 backdrop-blur-md border-border/50 shadow-lg mt-8">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-center text-foreground flex items-center justify-center gap-2">
                            <Info className="h-6 w-6 text-primary" />
                            Cómo Conectar
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center space-y-4 text-muted-foreground">
                        <p>
                            <span className="font-semibold text-foreground">Si eres de STEAM:</span> con el juego CERRADO haz clic en la IP para unirte.
                        </p>
                        <p>
                            <span className="font-semibold text-foreground">Si eres de EPIC:</span> copia y pega el comando (open + ip) en una partida de un jugador para unirte.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </TooltipProvider>
    );
}
