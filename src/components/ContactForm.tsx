import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from '@/components/ui/icon';

export const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', preferredTime: '' });
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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
        setSubmitMessage('❌ Произошла ошибка. Попробуйте связаться со мной напрямую через Telegram.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('❌ Произошла ошибка. Попробуйте связаться со мной напрямую через Telegram.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Записаться на консультацию</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Заполните форму или свяжитесь со мной удобным способом
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Форма обратной связи</CardTitle>
              <CardDescription>Я отвечу в течение 24 часов</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Ваше имя *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Телефон *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Удобное время для звонка"
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Расскажите, с чем хотели бы поработать *"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    required
                  />
                </div>
                <div className="flex items-start gap-2">
                  <Checkbox
                    id="policy"
                    checked={agreedToPolicy}
                    onCheckedChange={(checked) => setAgreedToPolicy(checked === true)}
                  />
                  <label htmlFor="policy" className="text-sm text-muted-foreground cursor-pointer">
                    Согласен(на) на обработку персональных данных и с политикой конфиденциальности
                  </label>
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting || !agreedToPolicy}
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                </Button>
                {submitMessage && (
                  <div className={`text-sm p-3 rounded-md ${submitMessage.includes('✅') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Контакты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a href="https://t.me/svetakuzikova" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20">
                    <Icon name="Send" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Telegram</div>
                    <div className="text-sm text-muted-foreground">@svetakuzikova</div>
                  </div>
                </a>
                <a href="https://wa.me/79217742221" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20">
                    <Icon name="MessageCircle" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">WhatsApp</div>
                    <div className="text-sm text-muted-foreground">+7 (921) 774-22-21</div>
                  </div>
                </a>
                <a href="mailto:info@kuzikova.com" className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20">
                    <Icon name="Mail" className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">info@kuzikova.com</div>
                  </div>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Образование</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="flex gap-2">
                  <Icon name="GraduationCap" className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Гештальт-терапевт</div>
                    <div>Санкт-Петербургский институт Гештальт терапии</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Icon name="GraduationCap" className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Психолог-консультант</div>
                    <div>Санкт-Петербургский государственный университет</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Icon name="GraduationCap" className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-foreground">Режиссер театрализованных представлений</div>
                    <div>Санкт-Петербургский государственный институт культуры</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
