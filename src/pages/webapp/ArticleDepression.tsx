import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Icon from '@/components/ui/icon';

const ArticleDepression = () => {
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
              <span>1 октября 2024</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Депрессия: когда стоит обратиться к специалисту
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground mb-8">
              Депрессия — это не просто плохое настроение или лень. Это серьёзное 
              расстройство, которое влияет на все сферы жизни человека. Важно вовремя 
              распознать симптомы и обратиться за помощью.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Чем депрессия отличается от грусти?</h2>
            <p>
              Грусть — это нормальная эмоциональная реакция на трудные жизненные события. 
              Она приходит и уходит, не мешает нормально функционировать. Депрессия же — 
              это длительное состояние, которое существенно снижает качество жизни.
            </p>

            <div className="bg-secondary/30 p-4 rounded-lg my-6">
              <p className="font-semibold mb-2">Ключевые различия:</p>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Грусть</th>
                    <th className="text-left py-2">Депрессия</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">Проходит за несколько дней</td>
                    <td className="py-2">Длится недели и месяцы</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Связана с конкретной причиной</td>
                    <td className="py-2">Может быть без видимой причины</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">Сохраняется способность радоваться</td>
                    <td className="py-2">Полная потеря интереса к жизни</td>
                  </tr>
                  <tr>
                    <td className="py-2">Не мешает работать и общаться</td>
                    <td className="py-2">Значительно нарушает функционирование</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Основные симптомы депрессии</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Эмоциональные симптомы:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Постоянное чувство грусти, пустоты или безнадёжности</li>
              <li>Потеря интереса к тому, что раньше приносило радость</li>
              <li>Чувство вины, никчёмности, беспомощности</li>
              <li>Раздражительность и тревожность</li>
              <li>Мысли о смерти или суициде</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Физические симптомы:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Нарушения сна (бессонница или чрезмерная сонливость)</li>
              <li>Изменения аппетита и веса</li>
              <li>Постоянная усталость и упадок сил</li>
              <li>Замедленность движений и речи</li>
              <li>Необъяснимые боли и дискомфорт</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Когнитивные симптомы:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Трудности с концентрацией и принятием решений</li>
              <li>Проблемы с памятью</li>
              <li>Негативное восприятие себя и мира</li>
              <li>Замедленное мышление</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Когда необходимо обратиться к специалисту?</h2>
            
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg my-6">
              <p className="font-semibold text-red-900 mb-3">Срочно обратитесь за помощью, если:</p>
              <ul className="list-disc pl-6 space-y-2 text-red-900">
                <li>Появляются мысли о самоубийстве или причинении вреда себе</li>
                <li>Вы не можете выполнять базовые повседневные задачи</li>
                <li>Состояние резко ухудшается</li>
                <li>Появляется ощущение нереальности происходящего</li>
              </ul>
              <p className="mt-4 font-semibold">
                В экстренных случаях звоните: 
                <br />Служба экстренной психологической помощи: 051 (круглосуточно)
              </p>
            </div>

            <p className="mt-6">
              Также стоит обратиться к психологу или психотерапевту, если:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Симптомы депрессии длятся более двух недель</li>
              <li>Состояние мешает работе, учёбе или отношениям</li>
              <li>Вы начинаете избегать социальных контактов</li>
              <li>Появляется желание употреблять алкоголь или наркотики для облегчения состояния</li>
              <li>Самостоятельные попытки справиться не приносят результата</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">Как проходит лечение депрессии?</h2>
            <p>
              Депрессия успешно лечится с помощью психотерапии, а в тяжёлых случаях — 
              в сочетании с медикаментозной терапией.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Психотерапия</h3>
            <p>
              Гештальт-терапия и другие методы помогают:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Понять причины депрессии</li>
              <li>Научиться справляться с негативными мыслями</li>
              <li>Восстановить утраченные смыслы и интересы</li>
              <li>Улучшить отношения с окружающими</li>
              <li>Развить навыки эмоциональной регуляции</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Арт-терапия</h3>
            <p>
              Творческие методы особенно эффективны при депрессии, когда трудно выразить 
              свои чувства словами. Живопись, лепка, танец помогают выразить подавленные 
              эмоции и восстановить контакт с собой.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Что можно сделать самостоятельно?</h2>
            <p>
              Эти советы не заменят профессиональную помощь, но могут облегчить состояние:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li><strong>Режим дня:</strong> старайтесь ложиться и вставать в одно время</li>
              <li><strong>Физическая активность:</strong> даже короткая прогулка помогает</li>
              <li><strong>Общение:</strong> не изолируйте себя, даже если не хочется общаться</li>
              <li><strong>Маленькие цели:</strong> ставьте простые достижимые задачи</li>
              <li><strong>Избегайте алкоголя:</strong> он усугубляет депрессию</li>
            </ul>

            <div className="bg-secondary/30 p-6 rounded-lg mt-8">
              <p className="font-semibold mb-2">Помните:</p>
              <p>
                Депрессия — это не слабость характера и не ваша вина. Это медицинское 
                состояние, которое требует помощи. Обращение к специалисту — это не признак 
                слабости, а проявление заботы о себе и своём здоровье. Депрессия излечима, 
                и с правильной поддержкой вы сможете вернуться к полноценной жизни.
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

export default ArticleDepression;
