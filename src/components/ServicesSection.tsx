import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Icon from '@/components/ui/icon';

interface Method {
  icon: string;
  title: string;
  desc: string;
}

interface Price {
  title: string;
  subtitle?: string;
  duration: string;
  price: string;
  oldPrice?: string;
  priceNote?: string;
  link?: string;
  features: string[];
  popular: boolean;
}

interface Testimonial {
  name: string;
  text: string;
  rating: number;
  service: string;
  date: string;
}

interface FAQ {
  q: string;
  a: string;
}

interface Article {
  title: string;
  date: string;
}

interface ServicesSectionProps {
  methods: Method[];
  prices: Price[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  articles: Article[];
  performanceDialogOpen: boolean;
  setPerformanceDialogOpen: (open: boolean) => void;
}

export const ServicesSection = ({
  methods,
  prices,
  testimonials,
  faqs,
  articles,
  performanceDialogOpen,
  setPerformanceDialogOpen
}: ServicesSectionProps) => {
  return (
    <>
      <section id="methods" className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Методы работы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Интегративный подход: сочетаю классические и авторские методы
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methods.map((method, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={method.icon} className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{method.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{method.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Услуги и цены</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите формат работы, который подходит именно вам
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {prices.map((price, index) => (
              <Card key={index} className={`relative ${price.popular ? 'border-primary shadow-lg scale-105' : ''} hover:shadow-xl transition-all duration-300`}>
                {price.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Популярно
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-xl">{price.title}</CardTitle>
                  {price.subtitle && (
                    <p className="text-xs text-muted-foreground italic">{price.subtitle}</p>
                  )}
                  <CardDescription>{price.duration}</CardDescription>
                  <div className="mt-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">{price.price}</span>
                      <span className="text-lg text-muted-foreground">₽</span>
                      {price.priceNote && (
                        <span className="text-sm text-muted-foreground">{price.priceNote}</span>
                      )}
                    </div>
                    {price.oldPrice && (
                      <div className="text-sm text-muted-foreground line-through mt-1">
                        {price.oldPrice} ₽
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {price.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {price.link ? (
                    <Button className="w-full mt-6" variant={price.popular ? "default" : "outline"} asChild>
                      <a href={price.link} target="_blank" rel="noopener noreferrer">
                        Узнать подробнее
                      </a>
                    </Button>
                  ) : price.popular ? (
                    <Button 
                      className="w-full mt-6" 
                      variant="default"
                      onClick={() => setPerformanceDialogOpen(true)}
                    >
                      Узнать подробнее
                    </Button>
                  ) : (
                    <Button className="w-full mt-6" variant="outline" asChild>
                      <a href="#contact">Записаться</a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={performanceDialogOpen} onOpenChange={setPerformanceDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Перформанс-терапия</DialogTitle>
            <DialogDescription>
              Уникальный авторский курс исцеления через театротерапию, танец и вокал
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">О курсе</h3>
              <p className="text-muted-foreground">
                Перформанс-терапия — это уникальный курс, который соединяет психологию и искусство. 
                За 3 месяца (24 занятия) вы научитесь использовать театр, танец и вокал для преодоления 
                неуверенности, страхов и комплексов.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Что входит</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary shrink-0" />
                  <span>Театротерапия: работа с ролями и масками</span>
                </li>
                <li className="flex gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary shrink-0" />
                  <span>Танцевальная терапия: освобождение через движение</span>
                </li>
                <li className="flex gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary shrink-0" />
                  <span>Вокалотерапия: исцеление голосом</span>
                </li>
                <li className="flex gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary shrink-0" />
                  <span>Групповые занятия в поддерживающей атмосфере</span>
                </li>
                <li className="flex gap-2">
                  <Icon name="Check" className="h-5 w-5 text-primary shrink-0" />
                  <span>Выпускной перформанс для закрепления результата</span>
                </li>
              </ul>
            </div>
            <div className="bg-secondary/30 p-4 rounded-lg">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold">9 500</span>
                <span className="text-lg text-muted-foreground">₽ / месяц</span>
              </div>
              <p className="text-sm text-muted-foreground">3 месяца, 24 занятия</p>
            </div>
            <Button className="w-full" size="lg" asChild>
              <a href="#contact">Записаться на курс</a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <section id="testimonials" className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Истории людей, которым я помогла изменить жизнь к лучшему
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Badge variant="secondary">{testimonial.service}</Badge>
                    <span>•</span>
                    <span>{testimonial.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 bg-background">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-lg text-muted-foreground">
              Ответы на вопросы о процессе терапии
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="articles" className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Полезные статьи</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Делюсь знаниями и практическими советами по психологии
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Icon name="Calendar" className="h-4 w-4" />
                    <span>{article.date}</span>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="p-0 h-auto font-normal">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
