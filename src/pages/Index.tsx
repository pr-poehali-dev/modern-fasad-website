import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Icon name="Building2" size={32} className="text-blue-600" />
              <span className="ml-2 text-xl font-bold text-slate-900">ФасадПро</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors">Главная</a>
              <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors">Услуги</a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">О компании</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">Контакты</a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Phone" size={16} className="mr-2" />
              Звонок
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Производство
                <span className="text-blue-600 block">металлокассет</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Собственное производство и монтаж фасадных металлокассет открытого и закрытого типа. 
                Создаем современные архитектурные решения с гарантией 15 лет.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-slate-300 hover:bg-slate-50">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть проекты
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="/img/ad896a85-6ff0-427f-ae2d-c356434c7ba7.jpg" 
                  alt="Фасадные работы" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-slate-600/80 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">Фасадные работы</h3>
                    <p className="text-blue-100">Современные технологии строительства</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Наша продукция</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Металлокассеты собственного производства для современных фасадных систем
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Square",
                title: "Кассеты закрытого типа",
                description: "Гладкая поверхность без видимых швов. Толщина 1,0-1,5 мм. Размеры до 1500x6000 мм. Полимерное покрытие."
              },
              {
                icon: "Grid3x3",
                title: "Кассеты открытого типа",
                description: "Видимая подконструкция, объемный рельеф. Толщина 0,7-1,2 мм. Стандартные и нестандартные размеры."
              },
              {
                icon: "Palette",
                title: "Окраска по RAL",
                description: "Полимерное покрытие любого цвета по каталогу RAL. Матовая, глянцевая, текстурная отделка."
              },
              {
                icon: "Ruler",
                title: "Нестандартные размеры",
                description: "Изготовление кассет по индивидуальным размерам и чертежам. Радиусные и сложные формы."
              },
              {
                icon: "Truck",
                title: "Монтаж под ключ",
                description: "Проектирование, изготовление подконструкции, монтаж кассет. Собственные монтажные бригады."
              },
              {
                icon: "Shield",
                title: "Гарантия 15 лет",
                description: "Гарантия на металлокассеты и монтажные работы. Техническое сопровождение проектов."
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-slate-200">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={32} className="text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 text-center leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">О компании</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                ФасадПро — ведущий производитель фасадных металлокассет с собственным производством. 
                15 лет опыта в создании современных металлических фасадных систем для коммерческих и жилых объектов.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {[
                  { number: "500+", label: "Завершенных проектов" },
                  { number: "15", label: "Лет на рынке" },
                  { number: "50+", label: "Специалистов в команде" },
                  { number: "98%", label: "Довольных клиентов" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                {[
                  "Собственная производственная линия металлокассет",
                  "Высококачественная сталь с полимерным покрытием",
                  "Автоматизированное производство с контролем качества",
                  "3D-проектирование и техническое сопровождение"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Icon name="CheckCircle" size={20} className="text-green-500 mr-3" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-600 to-blue-600 rounded-2xl p-8 text-white">
                <Icon name="Users" size={120} className="mx-auto mb-4 opacity-20" />
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Производственная база</h3>
                  <p className="text-blue-100">Современное оборудование и контроль качества</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Связаться с нами</h2>
            <p className="text-xl text-slate-600">
              Готовы обсудить ваш проект? Свяжитесь с нами удобным способом
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900">Оставить заявку</CardTitle>
                  <CardDescription>
                    Заполните форму и мы свяжемся с вами в течение часа
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Имя</label>
                    <Input placeholder="Ваше имя" className="border-slate-300" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Телефон</label>
                    <Input placeholder="+7 (___) ___-__-__" className="border-slate-300" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Сообщение</label>
                    <Textarea 
                      placeholder="Опишите ваш проект..." 
                      className="border-slate-300" 
                      rows={4}
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  {[
                    { icon: "Phone", title: "Телефон", content: "+7 (495) 123-45-67" },
                    { icon: "Mail", title: "Email", content: "info@stroyelit.ru" },
                    { icon: "MapPin", title: "Адрес", content: "Москва, ул. Строительная, 15" },
                    { icon: "Clock", title: "Время работы", content: "Пн-Пт: 9:00-18:00" }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                        <Icon name={contact.icon as any} size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">{contact.title}</div>
                        <div className="text-slate-600">{contact.content}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-100 rounded-xl p-6">
                <h4 className="font-bold text-slate-900 mb-3">Бесплатная консультация</h4>
                <p className="text-slate-600 mb-4">
                  Получите профессиональную консультацию по вашему проекту
                </p>
                <Button variant="outline" className="border-slate-300 hover:bg-white">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Заказать звонок
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Building2" size={32} className="text-blue-400" />
                <span className="ml-2 text-xl font-bold">ФасадПро</span>
              </div>
              <p className="text-slate-400">
                Производство и монтаж фасадных металлокассет премиум-качества
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-slate-400">
                <li>Кассеты закрытого типа</li>
                <li>Кассеты открытого типа</li>
                <li>Монтаж под ключ</li>
                <li>Техническое сопровождение</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Компания</h3>
              <ul className="space-y-2 text-slate-400">
                <li>О нас</li>
                <li>Наши проекты</li>
                <li>Сертификаты</li>
                <li>Вакансии</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-slate-400">
                <div>+7 (495) 123-45-67</div>
                <div>info@fasadpro.ru</div>
                <div>Москва, ул. Строительная, 15</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 ФасадПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}