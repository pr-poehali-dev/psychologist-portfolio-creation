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
    { href: '#unique', label: 'Моя уникальность' },
    { href: '#services', label: 'Услуги' },
    { href: '#methods', label: 'Методы' },
    { href: '#testimonials', label: 'Отзывы' },
    { href: '#articles', label: 'Статьи' },
    { href: '#contact', label: 'Контакты' }
  ];

  const services = [
    {
      icon: "Sparkles",
      title: "Перформанс-терапия",
      description: "Уникальный авторский курс: исцеление через театротерапию, танец и вокал. Преодоление неуверенности, страхов и комплексов",
      badge: "Авторский курс"
    },
    {
      icon: "Palette",
      title: "Арт-терапия",
      description: "Исцеление творчеством: живопись, лепка, песочная терапия. Соединяю психологию и творческое самовыражение"
    },
    {
      icon: "Brain",
      title: "Гештальт-терапия",
      description: "Работа с тревожностью, страхами, отношениями. Сертифицированный гештальт-терапевт"
    },
    {
      icon: "Users",
      title: "Семейная терапия",
      description: "Гармонизация семейных отношений, работа с конфликтами, восстановление близости"
    }
  ];

  const methods = [
    { icon: "Theater", title: "Театротерапия", desc: "Работа с неуверенностью через ролевые игры" },
    { icon: "Music", title: "Танцевально-двигательная терапия", desc: "Освобождение эмоций через движение и танец" },
    { icon: "Mic", title: "Вокалотерапия", desc: "Исцеление голосом, работа со страхами" },
    { icon: "Palette", title: "Изобразительная арт-терапия", desc: "Творческое самовыражение и исцеление" },
    { icon: "Eye", title: "Гештальт-терапия", desc: "Осознанность здесь и сейчас" },
    { icon: "Shapes", title: "Песочная терапия", desc: "Работа с подсознанием через песок" }
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
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Сертифицированный гештальт-терапевт</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Член РААТ</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Светлана Алексеевна<br />Кузикова
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              Исцеление творчеством: соединяю психологию и арт-терапию
            </p>
            <p className="text-lg mb-8">
              Руководитель Kuzikova school. Автор уникального курса "Перформанс-терапия"
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
                <div className="bg-primary/5 p-6 rounded-lg mb-6">
                  <p className="text-xl font-semibold text-center mb-3">
                    Дипломированный психолог с <span className="text-primary text-2xl">15-летним опытом</span> работы
                  </p>
                  <p className="text-center text-base">
                    Сертифицированный гештальт-терапевт • Член РААТ • Руководитель Kuzikova school
                  </p>
                </div>
                <p className="text-lg leading-relaxed">
                  Моя уникальность — я <strong>соединяю психологию и арт-терапию</strong> (исцеление творчеством). Более 15 лет помогаю людям обрести гармонию через традиционные психологические методы и творческое самовыражение.
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
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-5xl font-bold text-primary mb-2">15</div>
                    <div className="text-muted-foreground font-medium">лет практики</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-5xl font-bold text-primary mb-2">15000+</div>
                    <div className="text-muted-foreground font-medium">часов обучения</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <Icon name="Award" className="text-primary mx-auto mb-2" size={40} />
                    <div className="text-muted-foreground font-medium">Член РААТ</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl">Образование и квалификация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="text-lg font-semibold mb-2">Основное образование и статус</p>
                    <ul className="space-y-2 text-base">
                      <li className="flex gap-2">
                        <Icon name="GraduationCap" className="text-primary flex-shrink-0 mt-1" size={20} />
                        <span>Высшее психологическое образование</span>
                      </li>
                      <li className="flex gap-2">
                        <Icon name="Award" className="text-primary flex-shrink-0 mt-1" size={20} />
                        <span><strong>Сертифицированный гештальт-терапевт</strong> (Московский гештальт институт)</span>
                      </li>
                      <li className="flex gap-2">
                        <Icon name="Star" className="text-primary flex-shrink-0 mt-1" size={20} />
                        <span><strong>Член Российской арт-терапевтической ассоциации (РААТ)</strong></span>
                      </li>
                      <li className="flex gap-2">
                        <Icon name="Clock" className="text-primary flex-shrink-0 mt-1" size={20} />
                        <span>Более <strong>15 000 часов</strong> профессиональной подготовки</span>
                      </li>
                      <li className="flex gap-2">
                        <Icon name="Briefcase" className="text-primary flex-shrink-0 mt-1" size={20} />
                        <span>Опыт работы психологом: <strong>15 лет</strong></span>
                      </li>
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-secondary/20 p-4 rounded-lg">
                      <Icon name="Users" className="text-primary mb-2" size={24} />
                      <p className="text-base leading-relaxed">
                        Преподаватель и супервизор психологов по арт-терапии
                      </p>
                    </div>
                    <div className="bg-secondary/20 p-4 rounded-lg">
                      <Icon name="Tv" className="text-primary mb-2" size={24} />
                      <p className="text-base leading-relaxed">
                        Эксперт ТВ «Кубань24», «НТК», радио «Маяк»
                      </p>
                    </div>
                  </div>

                  <p className="text-base leading-relaxed">
                    <Icon name="Book" className="text-primary inline mr-2" size={20} />
                    <strong>Автор книг:</strong> "Профилактика зависимого поведения", "Саморазрушающее поведение", «Антистресс-путеводитель», «Речевая креативность» и др.
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

      <section id="unique" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/10 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Моя уникальность</h2>
            <p className="text-xl text-muted-foreground">Соединяю психологию и искусство для глубокого исцеления</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="animate-fade-in border-2 border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Award" className="text-primary" size={32} />
                </div>
                <CardTitle className="text-2xl text-center">Дипломированный специалист</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <p className="text-lg"><strong>15 лет</strong> профессиональной психологической практики</p>
                <p className="text-base">Сертифицированный гештальт-терапевт</p>
                <p className="text-base">Член Российской арт-терапевтической ассоциации (РААТ)</p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in border-2 border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <Icon name="Sparkles" className="text-primary" size={32} />
                </div>
                <CardTitle className="text-2xl text-center">Исцеление творчеством</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <p className="text-lg">Уникальное соединение <strong>психологии и арт-терапии</strong></p>
                <p className="text-base">Работа через живопись, танец, театр, вокал и песочную терапию</p>
                <p className="text-base">Творческие методы для глубинных изменений</p>
              </CardContent>
            </Card>
          </div>

          <Card className="animate-scale-in bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary">
            <CardHeader className="text-center">
              <div className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-bold mb-4">
                АВТОРСКИЙ КУРС
              </div>
              <CardTitle className="text-3xl mb-3">Перформанс-терапия</CardTitle>
              <CardDescription className="text-lg">Моя гордость — уникальная программа исцеления</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-center text-lg leading-relaxed">
                Авторский курс, который через <strong>театротерапию, танцевально-двигательную терапию и вокал</strong> помогает преодолеть неуверенность, страхи и комплексы
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-lg">
                  <Icon name="Theater" className="text-primary mx-auto mb-3" size={40} />
                  <h4 className="font-semibold mb-2">Театротерапия</h4>
                  <p className="text-sm text-muted-foreground">Освобождение через роль и игру</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <Icon name="Music" className="text-primary mx-auto mb-3" size={40} />
                  <h4 className="font-semibold mb-2">Танцевальная терапия</h4>
                  <p className="text-sm text-muted-foreground">Исцеление через движение тела</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <Icon name="Mic" className="text-primary mx-auto mb-3" size={40} />
                  <h4 className="font-semibold mb-2">Вокалотерапия</h4>
                  <p className="text-sm text-muted-foreground">Сила голоса для трансформации</p>
                </div>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg text-center">
                <p className="text-lg font-semibold mb-2">Результаты курса:</p>
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                  <span className="px-4 py-2 bg-white rounded-full text-sm">Преодоление страхов</span>
                  <span className="px-4 py-2 bg-white rounded-full text-sm">Уверенность в себе</span>
                  <span className="px-4 py-2 bg-white rounded-full text-sm">Освобождение от комплексов</span>
                  <span className="px-4 py-2 bg-white rounded-full text-sm">Раскрытие творческого потенциала</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <Card className="inline-block animate-fade-in">
              <CardContent className="pt-6">
                <Icon name="GraduationCap" className="text-primary mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-3">Преподаватель и супервизор</h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Повышаю квалификацию психологов по арт-терапии.<br />
                  Обучаю специалистов уникальным методам работы
                </p>
                <div className="flex justify-center gap-2">
                  <Icon name="Check" className="text-primary" size={20} />
                  <span className="text-base">Сертифицированные программы обучения</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Основные направления моей работы</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <Card key={idx} className={`hover:shadow-lg transition-shadow animate-scale-in hover:scale-105 transition-transform ${service.badge ? 'border-2 border-primary' : ''}`}>
                <CardHeader>
                  {service.badge && (
                    <div className="mb-3">
                      <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-bold">
                        {service.badge}
                      </span>
                    </div>
                  )}
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {methods.map((method, idx) => (
              <Card key={idx} className="hover:border-primary transition-all hover:shadow-lg animate-fade-in">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <Icon name={method.icon} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-lg mb-2">{method.title}</CardTitle>
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