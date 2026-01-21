import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const ArticleRelationships = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Icon name="Sparkles" className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold">Светлана Кузикова</span>
          </Link>
          <Link to="/#articles">
            <Button variant="ghost" size="sm">
              <Icon name="ArrowLeft" className="mr-2 h-4 w-4" />
              Все статьи
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 py-12">
        <article className="container max-w-3xl">
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Icon name="Calendar" className="h-4 w-4" />
              <span>8 октября 2024</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              5 признаков здоровых отношений в паре
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Здоровые отношения — это не идеальные отношения без конфликтов и разногласий. 
              Это партнёрство, в котором оба чувствуют себя в безопасности, уважаемыми 
              и способными расти как личности.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">1. Открытая и честная коммуникация</h2>
            <p>
              В здоровых отношениях партнёры могут открыто говорить о своих чувствах, 
              потребностях и желаниях без страха быть осуждёнными. Они слушают друг друга 
              не для того, чтобы ответить, а для того, чтобы понять.
            </p>
            <div className="bg-secondary/30 p-4 rounded-lg my-4">
              <p className="font-semibold mb-2">На практике это означает:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Способность говорить о сложных темах</li>
                <li>Использование «я-сообщений» вместо обвинений</li>
                <li>Готовность выслушать точку зрения партнёра</li>
                <li>Отсутствие манипуляций и пассивной агрессии</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">2. Взаимное уважение и границы</h2>
            <p>
              Каждый партнёр признаёт и уважает личное пространство, интересы и потребности 
              другого. Границы не воспринимаются как отвержение, а как естественная часть 
              здоровых отношений.
            </p>
            <p>
              Уважение проявляется в мелочах: учёт мнения партнёра при принятии решений, 
              признание его права на собственные эмоции, поддержка его увлечений и дружбы 
              вне отношений.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">3. Доверие и надёжность</h2>
            <p>
              Доверие — это не про контроль и проверку телефонов. Это внутренняя уверенность 
              в том, что партнёр не причинит вам вреда намеренно, что он на вашей стороне 
              и вы можете на него положиться.
            </p>
            <p>
              Надёжность формируется через последовательность действий: выполнение обещаний, 
              предсказуемость поведения, эмоциональная доступность в трудные моменты.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">4. Способность конструктивно разрешать конфликты</h2>
            <p>
              В здоровых отношениях конфликты неизбежны, но партнёры умеют справляться 
              с ними конструктивно. Цель спора — не победить, а найти решение, которое 
              устроит обоих.
            </p>
            <div className="bg-secondary/30 p-4 rounded-lg my-4">
              <p className="font-semibold mb-2">Признаки здорового конфликта:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Обсуждается конкретная ситуация, а не личность партнёра</li>
                <li>Отсутствуют оскорбления и унижения</li>
                <li>Оба готовы к компромиссу</li>
                <li>После конфликта наступает примирение и выводы</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">5. Поддержка личностного роста</h2>
            <p>
              Здоровые отношения не ограничивают, а способствуют развитию каждого партнёра. 
              Вы поддерживаете цели и мечты друг друга, радуетесь успехам и помогаете 
              преодолевать трудности.
            </p>
            <p>
              Это не значит, что вы должны расти в одном направлении или иметь идентичные 
              интересы. Напротив, в здоровых отношениях есть место для индивидуальности 
              и личного пространства.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Что делать, если чего-то не хватает?</h2>
            <p>
              Если вы замечаете, что в ваших отношениях отсутствуют некоторые из этих 
              признаков, это не повод для паники. Отношения — это постоянная работа, 
              и многим навыкам можно научиться.
            </p>
            <p>
              Семейная или парная терапия может помочь:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Научиться эффективной коммуникации</li>
              <li>Разрешить застарелые конфликты</li>
              <li>Восстановить доверие</li>
              <li>Понять потребности друг друга</li>
              <li>Выстроить здоровые границы</li>
            </ul>

            <div className="bg-secondary/30 p-6 rounded-lg mt-8">
              <p className="font-semibold mb-2">Важно помнить:</p>
              <p>
                Здоровые отношения требуют усилий обоих партнёров. Если один человек 
                постоянно работает над отношениями, а второй игнорирует проблемы — 
                это уже не здоровая динамика. Обращение к специалисту может помочь 
                разобраться в ситуации и найти пути решения.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <Link to="/#contact">
              <Button size="lg" className="w-full sm:w-auto">
                Записаться на семейную терапию
                <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </article>
      </main>

      <footer className="border-t py-12 bg-secondary/30 mt-12">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Светлана Кузикова. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ArticleRelationships;
