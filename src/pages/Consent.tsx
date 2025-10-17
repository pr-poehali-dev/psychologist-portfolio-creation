import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Icon from '@/components/ui/icon';

const Consent = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-white z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Светлана Кузикова</h1>
          <Button variant="ghost" onClick={() => navigate('/')}>
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Вернуться на главную
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold mb-8">Согласие на обработку персональных данных</h1>

          <div className="bg-primary/5 p-6 rounded-lg mb-8">
            <p className="text-lg font-semibold mb-4">Внося любые персональные данные в данную форму, вы даете согласие на обработку своих персональных данных.</p>
            <p className="text-xl font-bold text-primary">«Настоящим я даю согласие на обработку персональных данных»</p>
          </div>

          <section className="mb-8">
            <p className="mb-6 leading-relaxed">
              Заполняя настоящую форму, в соответствии с требованиями статьи 9 Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных», я подтверждаю свое согласие на обработку вносимых в форму моих персональных данных, лицом, оказывающим услуги на основании данной формы (далее Сайт), в том числе:
            </p>

            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>фамилию, имя, отчество;</li>
              <li>контактный номер телефона;</li>
              <li>адрес электронной почты;</li>
            </ul>

            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <p className="font-semibold mb-3">Целью обработки персональных данных является:</p>
              <p>Оказание мне услуг на основании заполненной формы.</p>
            </div>

            <div className="border-l-4 border-primary pl-6 mb-6">
              <p className="font-semibold mb-2">Срок действия согласия:</p>
              <p>Настоящее согласие действует бессрочно, срок хранения моих персональных данных не ограничен.</p>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
              <p className="font-semibold mb-3 flex items-center gap-2">
                <Icon name="Info" size={20} className="text-amber-600" />
                Право на отзыв согласия
              </p>
              <p className="mb-4">
                Оставляю за собой право отозвать свое согласие посредством составления соответствующего письменного документа, который может быть направлен мной:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>по электронной почте: <a href="mailto:s_kuzikova@mail.ru" className="text-primary underline font-semibold">s_kuzikova@mail.ru</a></li>
                <li>заказным письмом с уведомлением о вручении</li>
                <li>лично под расписку представителю</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Правовая основа</h2>
            <p className="text-muted-foreground">
              Обработка персональных данных осуществляется в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных» и другими нормативно-правовыми актами Российской Федерации.
            </p>
          </section>

          <div className="bg-slate-100 p-6 rounded-lg mt-8">
            <p className="font-semibold mb-2">Оператор персональных данных:</p>
            <p className="font-semibold">Индивидуальный предприниматель</p>
            <p className="font-semibold">Кузикова Светлана Алексеевна</p>
            <p className="text-sm text-muted-foreground mt-2">ОГРНИП 318237500160591</p>
            <p className="text-sm text-muted-foreground">E-mail: s_kuzikova@mail.ru</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Consent;
