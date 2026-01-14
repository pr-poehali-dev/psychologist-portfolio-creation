import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

interface Service {
  icon: string;
  title: string;
  description: string;
  badge?: string;
}

interface HeroSectionProps {
  services: Service[];
}

export const HeroSection = ({ services }: HeroSectionProps) => {
  return (
    <>
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30">
        <div className="container">
          <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="animate-fade-in">
              <Icon name="Sparkles" className="w-3 h-3 mr-1" />
              20+ лет практики
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in">
              Психологическая помощь
              <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                с душой и профессионализмом
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in">
              Я — Светлана Кузикова, практикующий психолог, гештальт-терапевт и режиссер. 
              Автор уникального курса «Перформанс-терапия». Помогаю обрести уверенность, 
              разобраться с тревожностью и наладить отношения.
            </p>
            <div className="flex gap-4 animate-fade-in">
              <Button size="lg" asChild className="group">
                <a href="#contact">
                  Записаться на консультацию
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#about">
                  Узнать больше
                </a>
              </Button>
            </div>

          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Направления работы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Использую современные методы психотерапии и авторские разработки
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  {service.badge && (
                    <Badge variant="secondary" className="w-fit">
                      {service.badge}
                    </Badge>
                  )}
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};