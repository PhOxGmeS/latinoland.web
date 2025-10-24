
import { Facebook, Twitch, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';

const DiscordIcon = (props: { className: string }) => (
    <Image 
        src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6cc3c481a15a141738_icon_clyde_white_RGB.png" 
        alt="Discord Logo" 
        width={32} 
        height={32} 
        className={props.className}
    />
);

const KickIcon = (props: { className: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={props.className}
    >
        <path d="M10.96 7.713V10.15L12.58 8.883L14.73 7.21L10.96 7.713Z"></path>
        <path d="M10.96 16.287V13.85L12.58 15.117L14.73 16.79L10.96 16.287Z"></path>
        <path
            fillRule="evenodd"
            d="M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3ZM8.303 5.433V18.564H10.96V10.83L15.48 14.39L18.11 12.28L13.71 8.79L18.11 5.3L15.48 3.21L8.303 5.433Z"
            clipRule="evenodd"
        ></path>
    </svg>
);


export function SocialContent() {
    return (
        <div className="flex flex-col items-center justify-center py-12">
            <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-4xl font-extrabold uppercase text-foreground mb-4 tracking-wider" style={{textShadow: '0 0 10px hsl(var(--primary) / 0.6)'}}>
                    Únete a la comunidad
                </h2>
                <p className="text-lg text-muted-foreground">
                    Síguenos en nuestras redes sociales para mantenerte actualizado con los últimos artículos, paquetes y eventos del servidor.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                 <Card className="group overflow-hidden rounded-xl border-border bg-card text-card-foreground transition-all duration-300 hover:shadow-primary/30 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/50">
                    <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                           <DiscordIcon className="h-8 w-8" />
                        </div>
                        <CardTitle className="text-2xl font-bold">Discord</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            Chatea con otros jugadores, recibe soporte y participa en eventos exclusivos de la comunidad.
                        </CardDescription>
                    </CardContent>
                    <CardFooter>
                         <Button asChild className="w-full" style={{backgroundColor: '#5865F2', color: 'white'}}>
                            <a href="https://discord.gg/Mq3psgsBJ8" target="_blank" rel="noopener noreferrer">Únete al Servidor</a>
                        </Button>
                    </CardFooter>
                </Card>

                <Card className="group overflow-hidden rounded-xl border-border bg-card text-card-foreground transition-all duration-300 hover:shadow-primary/30 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/50">
                     <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                           <Facebook className="h-8 w-8 text-[#1877F2]" />
                        </div>
                        <CardTitle className="text-2xl font-bold">Facebook</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                           Sigue nuestra página para ver noticias, memes y anuncios importantes sobre el servidor y la comunidad.
                        </CardDescription>
                    </CardContent>
                    <CardFooter>
                        <Button asChild className="w-full" style={{backgroundColor: '#1877F2', color: 'white'}}>
                            <a href="https://www.facebook.com/phoxgmes" target="_blank" rel="noopener noreferrer">Seguir Página</a>
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="group overflow-hidden rounded-xl border-border bg-card text-card-foreground transition-all duration-300 hover:shadow-primary/30 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/50">
                     <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                           <Twitch className="h-8 w-8 text-[#9146FF]" />
                        </div>
                        <CardTitle className="text-2xl font-bold">Twitch</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            Disfruta de nuestras transmisiones en vivo, eventos especiales y gameplays de la comunidad.
                        </CardDescription>
                    </CardContent>
                    <CardFooter>
                        <Button asChild className="w-full" style={{backgroundColor: '#9146FF', color: 'white'}}>
                            <a href="https://www.twitch.tv/latinoland" target="_blank" rel="noopener noreferrer">Seguir Canal</a>
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="group overflow-hidden rounded-xl border-border bg-card text-card-foreground transition-all duration-300 hover:shadow-primary/30 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/50">
                     <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                           <KickIcon className="h-8 w-8 text-[#53FC18]" />
                        </div>
                        <CardTitle className="text-2xl font-bold">Kick</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            Explora contenido nuevo y exclusivo en nuestra comunidad de streaming emergente.
                        </CardDescription>
                    </CardContent>
                    <CardFooter>
                        <Button asChild className="w-full" style={{backgroundColor: '#53FC18', color: 'black', textShadow: '0 0 2px black'}}>
                            <a href="https://kick.com/latinoland" target="_blank" rel="noopener noreferrer">Seguir Canal</a>
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="group overflow-hidden rounded-xl border-border bg-card text-card-foreground transition-all duration-300 hover:shadow-primary/30 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/50">
                     <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                           <Youtube className="h-8 w-8 text-[#FF0000]" />
                        </div>
                        <CardTitle className="text-2xl font-bold">YouTube</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription>
                            Suscríbete para ver guías, los mejores momentos y contenido exclusivo de nuestro servidor.
                        </CardDescription>
                    </CardContent>
                    <CardFooter>
                        <Button asChild className="w-full" style={{backgroundColor: '#FF0000', color: 'white'}}>
                            <a href="https://www.youtube.com/channel/UC-abcde12345" target="_blank" rel="noopener noreferrer">Suscribirse</a>
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
