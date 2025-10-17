import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', preferredTime: '' });
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [performanceDialogOpen, setPerformanceDialogOpen] = useState(false);

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const response = await fetch('https://functions.poehali.dev/b7f475c9-b32f-4c6f-8eb2-5f637cc10855', {
          method: 'POST'
        });
        const data = await response.json();
        if (data.visitors) {
          setVisitorCount(data.visitors);
        }
      } catch (error) {
        console.error('Failed to track visitor', error);
      }
    };
    trackVisitor();
  }, []);

  const menuItems = [
    { href: '#about', label: 'Обо мне' },
    { href: '#methods', label: 'Методы' },
    { href: '#prices', label: 'Цены' },
    { href: '#testimonials', label: 'Отзывы' },
    { href: '#articles', label: 'Статьи' },
    { href: '#contact', label: 'Контакты' }
  ];

  const prices = [
    {
      title: 'Индивидуальная консультация',
      duration: '50 минут',
      price: '3 000',
      features: [
        'Работа с любыми запросами',
        'Гештальт-терапия',
        'Онлайн или очно',
        'Полная конфиденциальность'
      ],
      popular: false
    },
    {
      title: 'Перформанс-терапия',
      duration: '3 месяца, 24 занятия',
      price: '9 500',
      priceNote: '/ месяц',
      features: [
        'Театротерапия',
        'Танцевальная терапия',
        'Вокалотерапия',
        'Групповые занятия',
        'Выпускной перформанс'
      ],
      popular: true
    },
    {
      title: 'Семейная терапия',
      duration: '60 минут',
      price: '4 000',
      features: [
        'Работа с парой',
        'Разрешение конфликтов',
        'Улучшение отношений',
        'Онлайн или очно'
      ],
      popular: false
    },
    {
      title: 'Арт-терапия',
      duration: '90 минут',
      price: '3 500',
      features: [
        'Живопись, лепка',
        'Песочная терапия',
        'Творческое самовыражение',
        'Материалы включены'
      ],
      popular: false
    }
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
    { icon: "Eye", title: "Гештальт-терапия", desc: "Осознанность здесь и сейчас" },
    { icon: "Theater", title: "Театротерапия", desc: "Работа с неуверенностью с помощью театральных практик" },
    { icon: "Music", title: "Танцевальная терапия", desc: "Освобождение эмоций через движение" },
    { icon: "Mic", title: "Вокалотерапия", desc: "Исцеление голосом, работа со страхами" },
    { icon: "Palette", title: "Арт-терапия", desc: "Творческое самовыражение и исцеление" },
    { icon: "MessagesSquare", title: "Ораторское искусство", desc: "Развитие уверенной речи и коммуникации" }
  ];

  const testimonials = [
    { 
      name: "Мария С.", 
      text: "Светлана Алексеевна помогла мне преодолеть длительную депрессию. Благодарна за профессионализм и человечность!", 
      rating: 5,
      service: "Индивидуальная терапия",
      date: "Октябрь 2024"
    },
    { 
      name: "Алексей К.", 
      text: "Работа с семейными конфликтами дала потрясающие результаты. Наша семья снова счастлива.", 
      rating: 5,
      service: "Семейная терапия",
      date: "Сентябрь 2024"
    },
    { 
      name: "Елена В.", 
      text: "Справилась с паническими атаками после нескольких сессий. Рекомендую всем, кто ищет квалифицированного специалиста.", 
      rating: 5,
      service: "Работа со страхами",
      date: "Август 2024"
    },
    { 
      name: "Ирина М.", 
      text: "Перформанс-терапия - это нечто! Я раскрылась как личность, избавилась от комплексов. Спасибо за такой уникальный подход!", 
      rating: 5,
      service: "Перформанс-терапия",
      date: "Октябрь 2024"
    },
    { 
      name: "Дмитрий П.", 
      text: "После курса вокалотерапии перестал бояться публичных выступлений. Чувствую себя уверенно на работе и в жизни.", 
      rating: 5,
      service: "Вокалотерапия",
      date: "Сентябрь 2024"
    },
    { 
      name: "Анна Л.", 
      text: "Арт-терапия помогла мне найти себя. Теперь я понимаю свои эмоции и умею с ними работать. Светлана - настоящий профессионал!", 
      rating: 5,
      service: "Арт-терапия",
      date: "Июль 2024"
    }
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('https://functions.poehali.dev/df3e7860-6923-452c-9dd2-a39c6b60db65', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitMessage('✅ Спасибо! Ваша заявка отправлена. Я свяжусь с вами в ближайшее время.');
        setFormData({ name: '', email: '', phone: '', message: '', preferredTime: '' });
        setAgreedToPolicy(false);
      } else {
        setSubmitMessage('❌ Произошла ошибка. Попробуйте позже или свяжитесь со мной по телефону.');
      }
    } catch (error) {
      setSubmitMessage('❌ Произошла ошибка. Попробуйте позже или свяжитесь со мной по телефону.');
    } finally {
      setIsSubmitting(false);
    }
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
              src="https://cdn.poehali.dev/files/ac1daf71-0885-4df8-91bd-191f8729abb2.JPG" 
              alt="Светлана Кузикова"
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
                <p className="text-lg leading-relaxed">
                  Я — профессиональный психолог, руководитель Центра психологии и творчества <strong>Kuzikova school</strong>. Помогаю людям обретать внутреннюю гармонию и уверенность через психологические методы и творческое самовыражение.
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
                  <AccordionItem value="unique">
                    <AccordionTrigger className="text-lg font-semibold">
                      🌟 Моя уникальность
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <div className="bg-primary/5 p-4 rounded-lg">
                          <p className="text-base font-semibold mb-3">Соединяю психологию и арт-терапию (исцеление творчеством)</p>
                          <p className="text-sm text-muted-foreground">Работа через живопись, танец, театр, вокал и песочную терапию для глубинных изменений</p>
                        </div>
                        
                        <div className="border-l-4 border-primary pl-4">
                          <p className="font-semibold mb-2">Авторский курс "Перформанс-терапия"</p>
                          <p className="text-sm text-muted-foreground mb-3">Уникальная програма, которая через театротерапию, танцевально-двигательную терапию и вокал помогает преодолеть неуверенность, страхи и комплексы</p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-white border rounded-full text-xs">Преодоление страхов</span>
                            <span className="px-3 py-1 bg-white border rounded-full text-xs">Уверенность</span>
                            <span className="px-3 py-1 bg-white border rounded-full text-xs">Освобождение от комплексов</span>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

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

      <section id="methods" className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-3 animate-fade-in">Методы работы</h2>
          <p className="text-center text-muted-foreground mb-10 animate-fade-in">Использую научно обоснованные подходы</p>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {methods.map((method, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-all hover:scale-105 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <Icon name={method.icon} className="text-primary mx-auto mb-2 transition-transform hover:scale-110" size={28} />
                <h3 className="font-semibold text-sm mb-1">{method.title}</h3>
                <p className="text-xs text-muted-foreground">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Стоимость услуг</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Прозрачные цены без скрытых платежей</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {prices.map((price, idx) => (
              <Card 
                key={idx} 
                className={`animate-scale-in hover:shadow-xl transition-all relative ${price.popular ? 'border-2 border-primary shadow-lg scale-105' : ''}`}
              >
                {price.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold">
                      Популярно
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl text-center">{price.title}</CardTitle>
                  <CardDescription className="text-center text-sm">{price.duration}</CardDescription>
                  <div className="text-center mt-4">
                    <span className="text-4xl font-bold text-primary">{price.price}</span>
                    <span className="text-xl text-muted-foreground ml-1">₽</span>
                    {price.priceNote && <span className="text-sm text-muted-foreground ml-1">{price.priceNote}</span>}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {price.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {price.popular ? (
                    <div className="flex flex-col gap-2 mt-6">
                      <Button 
                        className="w-full" 
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        Записаться
                      </Button>
                      <Button 
                        className="w-full" 
                        variant="outline"
                        onClick={() => setPerformanceDialogOpen(true)}
                      >
                        Подробнее
                      </Button>
                    </div>
                  ) : (
                    <Button 
                      className="w-full mt-6" 
                      variant="outline"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Записаться
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground mb-4">
              <Icon name="Info" className="inline mr-1" size={16} />
              Первая консультация может быть проведена бесплатно для знакомства. Уточняйте детали при записи.
            </p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Что говорят люди, с которыми я работала</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="animate-scale-in hover:shadow-xl transition-all group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={18} />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">{testimonial.date}</span>
                  </div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Icon name="User" className="text-primary" size={20} />
                    {testimonial.name}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium text-primary">
                    {testimonial.service}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Icon name="Quote" className="absolute -top-2 -left-2 text-primary/10" size={40} />
                    <p className="text-muted-foreground italic relative z-10 leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Хотите оставить свой отзыв?</p>
            <Button 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-secondary/10 to-primary/5">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Фотогалерея</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Моменты с прошедших перформансов</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all animate-scale-in cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/0b645c37-3abc-4608-889b-baf1abf21130/files/b513c5c6-bf3b-4132-89e8-4e51866a379d.jpg" 
                alt="Выпускной перформанс на сцене"
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold">Выпускной перформанс</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all animate-scale-in cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/0b645c37-3abc-4608-889b-baf1abf21130/files/7f00e686-3927-4b9c-879b-c0bc9cda2cb5.jpg" 
                alt="Танцевальная терапия"
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold">Танцевальная терапия</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all animate-scale-in cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/0b645c37-3abc-4608-889b-baf1abf21130/files/796f3ecd-21e6-4b58-9721-333759dc2e52.jpg" 
                alt="Вокалотерапия"
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold">Вокалотерапия</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all animate-scale-in cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/0b645c37-3abc-4608-889b-baf1abf21130/files/17415972-dce3-449b-8da3-e85fc10a6fed.jpg" 
                alt="Овации после выступления"
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold">Овации после выступления</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all animate-scale-in cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/0b645c37-3abc-4608-889b-baf1abf21130/files/44103044-4df2-4460-a03e-42f97c20448f.jpg" 
                alt="Театротерапия с масками"
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold">Театротерапия с масками</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all animate-scale-in cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/0b645c37-3abc-4608-889b-baf1abf21130/files/42a1dbd8-6850-44db-a4bd-ca5bba386f7a.jpg" 
                alt="Эмоциональное самовыражение"
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white font-semibold">Эмоциональное самовыражение</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              <Icon name="Camera" className="inline mr-2" size={18} />
              Каждый курс завершается выпускным перформансом — вашим уникальным творческим проектом
            </p>
            <Button 
              size="lg"
              onClick={() => {
                setPerformanceDialogOpen(true);
              }}
            >
              Узнать о курсе
            </Button>
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
                  <p className="text-muted-foreground">s_kuzikova@mail.ru</p>
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
                  <div>
                    <label htmlFor="preferredTime" className="text-sm font-medium mb-2 block">Предпочтительное время для консультации</label>
                    <select
                      id="preferredTime"
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({...formData, preferredTime: e.target.value})}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      required
                    >
                      <option value="">Выберите удобное время</option>
                      <option value="Утро (9:00 - 12:00)">Утро (9:00 - 12:00)</option>
                      <option value="День (12:00 - 15:00)">День (12:00 - 15:00)</option>
                      <option value="Вечер (15:00 - 18:00)">Вечер (15:00 - 18:00)</option>
                      <option value="Позднее (18:00 - 20:00)">Позднее (18:00 - 20:00)</option>
                      <option value="Выходные">Выходные</option>
                    </select>
                  </div>
                  <div className="flex items-start gap-3 pt-2">
                    <Checkbox 
                      id="privacy-policy" 
                      checked={agreedToPolicy}
                      onCheckedChange={(checked) => setAgreedToPolicy(checked as boolean)}
                      required
                    />
                    <label 
                      htmlFor="privacy-policy" 
                      className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                    >
                      Я согласен(на) на{' '}
                      <Link to="/consent" className="text-primary underline hover:text-primary/80" target="_blank">
                        обработку персональных данных
                      </Link>
                      {' '}и с{' '}
                      <Link to="/privacy" className="text-primary underline hover:text-primary/80" target="_blank">
                        политикой конфиденциальности
                      </Link>
                    </label>
                  </div>
                  {submitMessage && (
                    <div className={`p-4 rounded-md ${submitMessage.startsWith('✅') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                      {submitMessage}
                    </div>
                  )}
                  <Button type="submit" className="w-full" size="lg" disabled={!agreedToPolicy || isSubmitting}>
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
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
                <Link to="/privacy" className="block hover:opacity-100 transition-opacity underline">
                  Политика конфиденциальности
                </Link>
                <Link to="/terms" className="block hover:opacity-100 transition-opacity underline">
                  Публичная оферта
                </Link>
                <Link to="/consent" className="block hover:opacity-100 transition-opacity underline">
                  Согласие на обработку персональных данных
                </Link>
              </div>
            </div>
            <div>
              <p className="mb-3 font-semibold text-lg">Мы в соцсетях</p>
              <div className="flex gap-4">
                <a 
                  href="https://vk.com/svetlana_kuzikova" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="ВКонтакте"
                >
                  <Icon name="Share2" size={24} />
                </a>
                <a 
                  href="https://t.me/kuzikova_school" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="Telegram"
                >
                  <Icon name="Send" size={24} />
                </a>
                <a 
                  href="https://wa.me/message/FKFHPRMEDBRYP1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                  aria-label="WhatsApp"
                >
                  <Icon name="MessageCircle" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center pt-6 border-t border-primary-foreground/20">
            <p className="text-sm opacity-75">© 2024 Все права защищены</p>
            {visitorCount !== null && (
              <p className="text-xs opacity-60 mt-2">
                <Icon name="Users" size={14} className="inline mr-1" />
                Посетителей сегодня: {visitorCount}
              </p>
            )}
          </div>
        </div>
      </footer>

      <Dialog open={performanceDialogOpen} onOpenChange={setPerformanceDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Перформанс-терапия</DialogTitle>
            <DialogDescription>
              Трёхмесячный курс из 24 занятий с выпускным перформансом
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Icon name="Target" className="text-primary" size={20} />
                Что это такое?
              </h3>
              <p className="text-muted-foreground">
                Перформанс-терапия — это уникальная методика работы с эмоциональным состоянием через творческое самовыражение. 
                Курс объединяет театральные техники, танцевальную терапию и вокалотерапию для глубокой трансформации личности.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Icon name="List" className="text-primary" size={20} />
                Что входит в курс?
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <Icon name="Check" className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span><strong>24 занятия</strong> по 2,5 часа (2 раза в неделю)</span>
                </li>
                <li className="flex gap-2">
                  <Icon name="Check" className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span><strong>Театротерапия:</strong> работа с ролями, масками, сценками из жизни</span>
                </li>
                <li className="flex gap-2">
                  <Icon name="Check" className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span><strong>Танцевальная терапия:</strong> освобождение тела и эмоций через движение</span>
                </li>
                <li className="flex gap-2">
                  <Icon name="Check" className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span><strong>Вокалотерапия:</strong> работа с голосом, дыханием и внутренними блоками</span>
                </li>
                <li className="flex gap-2">
                  <Icon name="Check" className="text-green-500 flex-shrink-0 mt-1" size={16} />
                  <span><strong>Выпускной перформанс:</strong> создание собственного творческого проекта</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Icon name="Heart" className="text-primary" size={20} />
                Результаты курса
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <Icon name="Sparkles" className="text-primary flex-shrink-0 mt-1" size={16} />
                  <span>Преодоление стеснения и страха публичных выступлений</span>
                </li>
                <li className="flex gap-2">
                  <Icon name="Sparkles" className="text-primary flex-shrink-0 mt-1" size={16} />
                  <span>Развитие уверенности в себе и самовыражения</span>
                </li>
                <li className="flex gap-2">
                  <Icon name="Sparkles" className="text-primary flex-shrink-0 mt-1" size={16} />
                  <span>Освобождение от эмоциональных блоков и зажимов</span>
                </li>
                <li className="flex gap-2">
                  <Icon name="Sparkles" className="text-primary flex-shrink-0 mt-1" size={16} />
                  <span>Раскрытие творческого потенциала</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Icon name="Clock" className="text-primary" size={20} />
                Формат и условия
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-2">
                  <Icon name="Users" className="text-primary flex-shrink-0 mt-1" size={16} />
                  <span><strong>Групповые занятия:</strong> до 12 человек</span>
                </li>
                <li className="flex gap-2">
                  <Icon name="Calendar" className="text-primary flex-shrink-0 mt-1" size={16} />
                  <span><strong>График:</strong> 2 раза в неделю по 2,5 часа</span>
                </li>
                <li className="flex gap-2">
                  <Icon name="Clock" className="text-primary flex-shrink-0 mt-1" size={16} />
                  <span><strong>Длительность:</strong> 3 месяца (24 занятия)</span>
                </li>
                <li className="flex gap-2">
                  <Icon name="MapPin" className="text-primary flex-shrink-0 mt-1" size={16} />
                  <span><strong>Место:</strong> уютная студия с профессиональным оборудованием</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="font-semibold mb-2">💰 Стоимость: 9 500 ₽ / месяц</p>
              <p className="text-sm text-muted-foreground mb-2">
                Полная стоимость курса: 28 500 ₽ за 3 месяца (24 занятия + выпускной перформанс)
              </p>
              <p className="text-sm text-muted-foreground">
                Оплата помесячно — удобно и доступно!
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              <Button 
                className="w-full"
                onClick={() => {
                  setPerformanceDialogOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Icon name="Calendar" className="mr-2" size={18} />
                Записаться на курс
              </Button>
              <Button 
                variant="outline"
                className="w-full"
                onClick={() => window.open('https://orator.turbo.site/theatre', '_blank')}
              >
                <Icon name="ExternalLink" className="mr-2" size={18} />
                Подробнее на сайте
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/message/FKFHPRMEDBRYP1"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 z-50"
        aria-label="Написать в WhatsApp"
      >
        <Icon name="MessageCircle" size={28} />
      </a>
    </div>
  );
};

export default Index;