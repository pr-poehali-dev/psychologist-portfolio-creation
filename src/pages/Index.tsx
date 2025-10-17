import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { href: '#about', label: 'Обо мне' },
    { href: '#services', label: 'Услуги' },
    { href: '#methods', label: 'Методы' },
    { href: '#testimonials', label: 'Отзывы' },
    { href: '#articles', label: 'Статьи' },
    { href: '#contact', label: 'Контакты' }
  ];

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
            {menuItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-primary transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
          <Button asChild className="hidden md:inline-flex">
            <a href="#contact">Записаться</a>
          </Button>
          
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <nav className="flex flex-col gap-6 mt-8">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium hover:text-primary transition-colors py-2 border-b border-border"
                  >
                    {item.label}
                  </a>
                ))}
                <Button asChild className="mt-4">
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Записаться на консультацию</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-secondary/30 via-background to-primary/5">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <p className="text-primary font-semibold mb-2">Руководитель Kuzikova school</p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Светлана Алексеевна<br />Кузикова
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Профессиональный психолог, руководитель Центра психологии и творчества Kuzikova school, автор программ и курсов по психологии и арт-терапии
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
          <div className="space-y-8">
            <Card className="animate-fade-in">
              <CardContent className="pt-6 space-y-4">
                <p className="text-lg">
                  Я — профессиональный психолог, руководитель Центра психологии и творчества <strong>Kuzikova school</strong>, автор программ и курсов по психологии и арт-терапии.
                </p>
                
                <div className="pt-4">
                  <h3 className="font-semibold text-xl mb-3 text-primary">Ко мне Вы можете обратиться по вопросам:</h3>
                  <ul className="space-y-2 text-base">
                    <li className="flex gap-2">
                      <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span>выстраивания отношений с самим собой и окружающими</span>
                    </li>
                    <li className="flex gap-2">
                      <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span>повышения самооценки и уверенности в себе</span>
                    </li>
                    <li className="flex gap-2">
                      <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span>трудностей в общении, взаимоотношений в семье (с детьми, родителями, подростками)</span>
                    </li>
                    <li className="flex gap-2">
                      <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span>постановки целей, продвижения в карьере</span>
                    </li>
                    <li className="flex gap-2">
                      <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span>переживания негативных эмоциональных состояний, страха публичных выступлений</span>
                    </li>
                    <li className="flex gap-2">
                      <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                      <span>развития эмоционального интеллекта</span>
                    </li>
                  </ul>
                </div>

                <p className="text-base italic text-muted-foreground pt-4">
                  Принимаю очно в г. Краснодар и онлайн. Приходите! Вместе найти выход проще...
                </p>

                <div className="grid md:grid-cols-3 gap-6 pt-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">20</div>
                    <div className="text-muted-foreground">лет опыта</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">15000+</div>
                    <div className="text-muted-foreground">часов подготовки</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">10+</div>
                    <div className="text-muted-foreground">лет работы с семьями</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">Образование и квалификация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-base leading-relaxed">
                    Высшее психологическое образование. Более <strong>15 000 часов</strong> профессиональной психолого-педагогической подготовки. Опыт работы <strong>20 лет</strong>.
                  </p>
                  <p className="text-base leading-relaxed mt-3">
                    Преподавание психологии на факультете повышения квалификации психологов. Более 10 лет опыта помощи семьям зависимых.
                  </p>
                  <p className="text-base leading-relaxed mt-3">
                    Эксперт ТВ-каналов «Кубань24», «НТК», радио «Маяк», «Первое радио Кубани».
                  </p>
                  <p className="text-base leading-relaxed mt-3">
                    Автор книг: "Профилактика зависимого поведения", "Саморазрушающее поведение", «Антистресс-путеводитель», «Речевая креативность» и др.
                  </p>
                </div>

                <Accordion type="single" collapsible className="mt-6">
                  <AccordionItem value="education">
                    <AccordionTrigger className="text-lg font-semibold">
                      Дополнительное образование
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>1999г.</strong> - Стажировка "Работа с молодежью в кризисных ситуациях" (Германия, Берлин)</li>
                        <li>• <strong>2003г.</strong> - Международная программа для специалистов "Открытый мир" (США, New Mexico)</li>
                        <li>• <strong>2006г.-2010г.</strong> - Московский гештальт институт, программа по психотерапии</li>
                        <li>• <strong>2009г.-2010г.</strong> - Обучающая программа для психотерапевтов, психологов по методу символдрамы</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="certificates">
                    <AccordionTrigger className="text-lg font-semibold">
                      Сертификаты и повышение квалификации
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>2008г.</strong> - Терапия травмы и посттравматических расстройств (Московский гештальт институт)</li>
                        <li>• <strong>2009г.</strong> - Телесно-ориентированная терапия</li>
                        <li>• <strong>2010г.</strong> - Групповая психотерапия по методу символдрамы</li>
                        <li>• <strong>2010г.</strong> - Детская психотерапия и психоанализ</li>
                        <li>• <strong>2011г.</strong> - Спортивная психология (Москва)</li>
                        <li>• <strong>2012г.</strong> - Песочная психотерапия (Sandplay)</li>
                        <li>• <strong>2012г.</strong> - Арт-терапия в психологической практике</li>
                        <li>• <strong>2013г.</strong> - Арт-терапия (Фрайбург, Германия)</li>
                        <li>• <strong>2014г.</strong> - Детская психология. Консультирование</li>
                        <li>• <strong>2015г.</strong> - Специальная детская психология. Психоневрология</li>
                        <li>• <strong>2016г.</strong> - Арт-коучинг в работе с разными категориями населения</li>
                        <li>• <strong>2016г.</strong> - Сертификационный тренерский курс</li>
                        <li>• <strong>2017г.</strong> - Арт-терапия в работе с детьми. Сертификационный курс</li>
                        <li>• <strong>2018г.</strong> - Курс эффективной коммуникации Ксении Телешовой</li>
                        <li>• <strong>2019г.</strong> - Курс "Формула успеха" Радислава Гандапаса</li>
                        <li>• <strong>2024г.</strong> - Профессия арт-терапевт. Международная школа арт-терапии</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
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
                  <p className="text-muted-foreground">+7 918 311 17 12</p>
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
                  <p className="text-muted-foreground">г. Краснодар, ул. Горького, 104, офис 26</p>
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

      <footer className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="mb-3 font-semibold text-lg">ИП Кузикова Светлана Алексеевна</p>
              <div className="space-y-2 text-sm opacity-90">
                <p>ОГРНИП: 318237500160591</p>
                <p>Адрес: г. Краснодар, ул. Горького, 104, офис 26</p>
                <p>Телефон: +7 918 311 17 12</p>
              </div>
            </div>
            <div>
              <p className="mb-3 font-semibold text-lg">Правовая информация</p>
              <div className="space-y-2 text-sm opacity-90">
                <a href="https://disk.yandex.ru/i/uYn3_o7baO2GSw" target="_blank" rel="noopener noreferrer" className="block hover:opacity-100 transition-opacity underline">
                  Политика конфиденциальности
                </a>
                <a href="https://disk.yandex.ru/i/-bYRWaWj_7bgCg" target="_blank" rel="noopener noreferrer" className="block hover:opacity-100 transition-opacity underline">
                  Публичная оферта
                </a>
                <a href="https://disk.yandex.ru/i/OaR47K7F_Z_l_A" target="_blank" rel="noopener noreferrer" className="block hover:opacity-100 transition-opacity underline">
                  Согласие на обработку персональных данных
                </a>
              </div>
            </div>
          </div>
          <div className="text-center pt-6 border-t border-primary-foreground/20">
            <p className="text-sm opacity-75">© 2024 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;