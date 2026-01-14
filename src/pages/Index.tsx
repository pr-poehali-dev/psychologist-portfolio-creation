import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ContactForm } from '@/components/ContactForm';

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [performanceDialogOpen, setPerformanceDialogOpen] = useState(false);

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
      price: '4 000',
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
      price: '6 000',
      features: [
        'Работа с парой',
        'Разрешение конфликтов',
        'Улучшение отношений',
        'Онлайн или очно'
      ],
      popular: false
    },
    {
      title: 'Курс повышения квалификации',
      subtitle: '«Арт-терапия в психологической практике»',
      duration: '7 модулей (2-х дневные семинары)',
      price: '9 000',
      oldPrice: '12 000',
      priceNote: '/ модуль',
      link: 'https://kuzikova.com/art_terapy',
      features: [
        'Живопись, лепка',
        'Песочная терапия',
        'Творческое самовыражение',
        'Сертификат установленного образца'
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
      name: "Анна А.", 
      text: "Курс «Перформанс» терапия и поавда изменила мою жизнь, где я увидела и прожила свои разные грани, чувства и эмоции. В этой поддерживающей атмосфере, которую создает Светлана, мы с нашей группой обрели теплое и дружеское окружение, тут как дома - тепло, искренне и по-настоящему.", 
      rating: 5,
      service: "Перформанс-терапия",
      date: "Июнь 2025"
    },
    { 
      name: "Наталия Ш.", 
      text: "Что наша жизнь? Игра! И все мы в ней актеры. Наши роли постоянно меняются. На все эти вопросы вы получите ответы в пространстве Школы Светланы Кузиковой. Она, как дипломированный психолог и режиссёр, поможет вам гармонично и легко общаться с миром, раскрыть массу ваших достоинств и возможностей.", 
      rating: 5,
      service: "Перформанс-терапия",
      date: "Июнь 2025"
    },
    { 
      name: "Марина М.", 
      text: "Я получила огромный практический опыт обучаясь у Светланы Алексеевны на курсах Ораторского искусства, и раскрыла в себе творческий потенциал на курсе «ПЕРФОМЕНС-терапия». Обрела уверенность в себе, способность креативно мыслить, и получила мотивацию к дальнейшей творческой самореализации.", 
      rating: 5,
      service: "Перформанс-терапия",
      date: "Июнь 2025"
    },
    { 
      name: "Светлана", 
      text: "Прошла курс Перформанс терапии у Светланы, и открыла для себя новый мир ощущений, эмоций и энергий. Узнала, как нужно готовиться к роли, что важно знать и над чем нужно работать. Светлана - великолепный преподаватель, еще и психолог, который знает все нюансы актерского мастерства.", 
      rating: 5,
      service: "Перформанс-терапия",
      date: "Июнь 2025"
    },
    { 
      name: "Мария С.", 
      text: "Светлана Алексеевна помогла мне преодолеть длительную депрессию. Благодарна за профессионализм и человечность!", 
      rating: 5,
      service: "Индивидуальная терапия",
      date: "Октябрь 2024"
    },
    { 
      name: "Елена В.", 
      text: "Справилась с паническими атаками после нескольких сессий. Рекомендую всем, кто ищет квалифицированного специалиста.", 
      rating: 5,
      service: "Работа со страхами",
      date: "Август 2024"
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        menuItems={menuItems} 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
      />

      <main className="flex-1">
        <HeroSection 
          services={services} 
        />

        <ServicesSection
          methods={methods}
          prices={prices}
          testimonials={testimonials}
          faqs={faqs}
          articles={articles}
          performanceDialogOpen={performanceDialogOpen}
          setPerformanceDialogOpen={setPerformanceDialogOpen}
        />

        <ContactForm />
      </main>

      <footer className="border-t py-12 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Icon name="Sparkles" className="h-5 w-5 text-white" />
                </div>
                <div className="font-bold">Светлана Кузикова</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Психолог, гештальт-терапевт, режиссер. Более 20 лет практики.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Навигация</h3>
              <nav className="flex flex-col gap-2">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="https://t.me/svetakuzikova" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Icon name="Send" className="h-4 w-4" />
                  Telegram
                </a>
                <a href="https://wa.me/79217742221" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Icon name="MessageCircle" className="h-4 w-4" />
                  WhatsApp
                </a>
                <a href="mailto:info@kuzikova.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Icon name="Mail" className="h-4 w-4" />
                  Email
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2025 Светлана Кузикова. Все права защищены.</p>
            <p className="mt-2">
              <Link to="/privacy" className="hover:text-primary transition-colors">Политика конфиденциальности</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;