import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const services = [
    {
      icon: "Users",
      title: "Семейная терапия",
      description: "Помогаю восстановить гармонию в отношениях, разрешить конфликты и укрепить семейные связи"
    },
    {
      icon: "Heart",
      title: "Работа с тревожностью",
      description: "Эффективные методы преодоления тревожных состояний, панических атак и страхов"
    },
    {
      icon: "Sun",
      title: "Терапия депрессии",
      description: "Комплексный подход к работе с депрессивными состояниями и восстановлению жизненных сил"
    }
  ];

  const methods = [
    { title: "Когнитивно-поведенческая терапия", desc: "Работа с мыслями и установками" },
    { title: "Гештальт-терапия", desc: "Осознание здесь и сейчас" },
    { title: "Системная семейная терапия", desc: "Работа с семейными паттернами" }
  ];

  const testimonials = [
    { name: "Мария С.", text: "Светлана Алексеевна помогла мне преодолеть длительную депрессию. Благодарна за профессионализм и человечность!", rating: 5 },
    { name: "Алексей К.", text: "Работа с семейными конфликтами дала потрясающие результаты. Наша семья снова счастлива.", rating: 5 },
    { name: "Елена В.", text: "Справилась с паническими атаками после нескольких сессий. Рекомендую всем, кто ищет квалифицированного специалиста.", rating: 5 }
  ];

  const faqs = [
    { q: "Как проходит первая консультация?", a: "Первая встреча длится 50 минут. Мы обсудим вашу ситуацию, определим цели терапии и составим план работы." },
    { q: "Сколько длится курс терапии?", a: "Длительность зависит от индивидуальной ситуации. В среднем заметные изменения наступают после 8-12 сессий." },
    { q: "Конфиденциальны ли наши встречи?", a: "Абсолютно. Я строго соблюдаю профессиональную этику и конфиденциальность всей информации." },
    { q: "Можно ли проводить сессии онлайн?", a: "Да, провожу как очные, так и онлайн-консультации через защищенные каналы связи." }
  ];

  const articles = [
    { title: "Как справиться с тревожностью в современном мире", date: "15 октября 2024" },
    { title: "5 признаков здоровых отношений в паре", date: "8 октября 2024" },
    { title: "Депрессия: когда стоит обратиться к специалисту", date: "1 октября 2024" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Светлана Кузикова</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-primary transition-colors">Обо мне</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#methods" className="hover:text-primary transition-colors">Методы</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#articles" className="hover:text-primary transition-colors">Статьи</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button asChild className="hidden md:inline-flex">
            <a href="#contact">Записаться</a>
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-secondary/30 via-background to-primary/5">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <p className="text-primary font-semibold mb-2">Психолог с 12-летним опытом</p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Светлана Алексеевна<br />Кузикова
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Помогаю обрести внутреннюю гармонию, преодолеть кризисы и построить счастливые отношения
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <a href="#contact">Записаться на консультацию</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#about">Узнать больше</a>
              </Button>
            </div>
          </div>
          <div className="animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/projects/0b645c37-3abc-4608-889b-baf1abf21130/files/4148b0c7-0a75-4fcb-899e-fe7af8c6abbe.jpg" 
              alt="Кабинет психолога"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Обо мне</h2>
          <Card className="animate-fade-in">
            <CardContent className="pt-6 space-y-4 text-lg">
              <p>
                Я — дипломированный психолог с 12-летним опытом работы. За это время я помогла более 500 людям обрести внутреннее равновесие и научиться справляться с жизненными трудностями.
              </p>
              <p>
                Моя специализация — семейная терапия, работа с тревожными и депрессивными состояниями. Я убеждена, что каждый человек обладает ресурсами для изменений, моя задача — помочь их раскрыть.
              </p>
              <div className="grid md:grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">12+</div>
                  <div className="text-muted-foreground">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-muted-foreground">клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">3000+</div>
                  <div className="text-muted-foreground">сессий</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Основные направления моей работы</p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow animate-scale-in hover:scale-105 transition-transform">
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="methods" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">Методы работы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Использую научно обоснованные подходы</p>
          <div className="space-y-4">
            {methods.map((method, idx) => (
              <Card key={idx} className="hover:border-primary transition-colors animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    {method.title}
                  </CardTitle>
                  <CardDescription className="text-base">{method.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Что говорят люди, с которыми я работала</p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="animate-scale-in">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={20} />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="articles" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">Полезные статьи</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Делюсь знаниями и опытом</p>
          <div className="space-y-4">
            {articles.map((article, idx) => (
              <Card key={idx} className="hover:border-primary transition-colors cursor-pointer animate-fade-in">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl hover:text-primary transition-colors">{article.title}</CardTitle>
                    <Icon name="ArrowRight" className="text-primary flex-shrink-0" size={20} />
                  </div>
                  <CardDescription>{article.date}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4">Контакты и запись</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Свяжитесь со мной удобным способом</p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">s.kuzikova@example.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                  <p className="text-muted-foreground">Москва, ул. Примерная, д. 10</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Время работы</h3>
                  <p className="text-muted-foreground">Пн-Пт: 10:00 - 20:00<br />Сб: 11:00 - 18:00</p>
                </div>
              </div>
            </div>
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle>Записаться на консультацию</CardTitle>
                <CardDescription>Заполните форму, и я свяжусь с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input 
                    placeholder="Ваше имя" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                  <Input 
                    type="email" 
                    placeholder="Email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                  <Input 
                    type="tel" 
                    placeholder="Телефон" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                  <Textarea 
                    placeholder="Кратко опишите вашу ситуацию" 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    required
                  />
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <p className="mb-2 font-semibold">Светлана Алексеевна Кузикова</p>
          <p className="text-sm opacity-90">Психолог. Помогаю обрести гармонию и счастье</p>
          <p className="text-sm opacity-75 mt-4">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
