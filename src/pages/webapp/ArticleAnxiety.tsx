import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const ArticleAnxiety = () => {
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
              <span>15 октября 2024</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Как справиться с тревожностью в современном мире
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Тревожность стала одной из самых распространённых проблем современного человека. 
              Постоянный поток информации, высокие требования к себе и неопределённость 
              будущего создают благоприятную почву для тревоги.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Что такое тревожность?</h2>
            <p>
              Тревожность — это естественная реакция организма на потенциальную опасность. 
              Она помогает нам быть внимательными и готовыми к действию. Однако когда тревога 
              становится чрезмерной и постоянной, она начинает мешать полноценной жизни.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Признаки повышенной тревожности</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Постоянное беспокойство о будущем</li>
              <li>Трудности с концентрацией внимания</li>
              <li>Нарушения сна</li>
              <li>Физические симптомы: учащённое сердцебиение, потливость, мышечное напряжение</li>
              <li>Избегание социальных ситуаций</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Практические способы снижения тревожности</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">1. Дыхательные практики</h3>
            <p>
              Глубокое диафрагмальное дыхание активирует парасимпатическую нервную систему, 
              что помогает успокоиться. Попробуйте дышать по схеме: вдох на 4 счёта, 
              задержка на 4 счёта, выдох на 6 счётов.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">2. Техника заземления</h3>
            <p>
              Когда чувствуете нарастающую тревогу, сфокусируйтесь на настоящем моменте. 
              Назовите 5 вещей, которые видите, 4 — которые слышите, 3 — которые можете 
              потрогать, 2 — которые можете понюхать, и 1 — которую можете попробовать на вкус.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">3. Ограничение информационного потока</h3>
            <p>
              Установите временные рамки для просмотра новостей и социальных сетей. 
              Постоянный поток негативной информации усиливает тревожность.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">4. Физическая активность</h3>
            <p>
              Регулярные физические упражнения помогают снизить уровень стрессовых гормонов 
              и выработать эндорфины — естественные антидепрессанты.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">5. Работа с психологом</h3>
            <p>
              Если тревожность мешает вашей повседневной жизни, обратитесь к специалисту. 
              Гештальт-терапия и другие методы психотерапии эффективно помогают справиться 
              с тревожными расстройствами.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Когда нужна помощь специалиста?</h2>
            <p>
              Обратитесь к психологу, если:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Тревога мешает работе или учёбе</li>
              <li>Вы избегаете важных жизненных ситуаций из-за тревоги</li>
              <li>Самостоятельные методы не приносят облегчения</li>
              <li>Появляются панические атаки</li>
              <li>Тревога влияет на ваши отношения с близкими</li>
            </ul>

            <div className="bg-secondary/30 p-6 rounded-lg mt-8">
              <p className="font-semibold mb-2">Помните:</p>
              <p>
                Тревожность — это не слабость, а сигнал о том, что вашей психике нужна 
                поддержка. Обращение за помощью — это проявление заботы о себе и своём здоровье.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <Link to="/#contact">
              <Button size="lg" className="w-full sm:w-auto">
                Записаться на консультацию
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

export default ArticleAnxiety;
