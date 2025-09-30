import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('main');
  const [applicationOpen, setApplicationOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    discord: '',
    timezone: '',
    experience: '',
    whyJoin: '',
    rules: false
  });

  const factions = [
    {
      id: 1,
      name: 'LSPD/LSSD',
      description: 'Защита правопорядка города',
      members: 142,
      rating: 4.8,
      icon: 'Shield',
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 2,
      name: 'DPS',
      description: 'Медицинская служба',
      members: 98,
      rating: 4.9,
      icon: 'Heart',
      color: 'from-red-500 to-red-700'
    },
    {
      id: 3,
      name: 'Civil',
      description: 'Гражданские организации',
      members: 156,
      rating: 4.7,
      icon: 'Users',
      color: 'from-gray-400 to-gray-600'
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Гонки на выживание',
      time: 'Через 2 часа',
      prize: '50,000$',
      participants: 24,
      type: 'race'
    },
    {
      id: 2,
      title: 'Захват территории',
      time: 'Через 30 минут',
      prize: 'Территория',
      participants: 45,
      type: 'war'
    },
    {
      id: 3,
      title: 'Битва фракций',
      time: 'Завтра в 20:00',
      prize: '100,000$',
      participants: 67,
      type: 'battle'
    }
  ];

  const topPlayers = [
    { id: 1, name: 'DarkKnight', level: 99, score: 15420 },
    { id: 2, name: 'ShadowHunter', level: 95, score: 14850 },
    { id: 3, name: 'PhoenixRider', level: 92, score: 13990 },
    { id: 4, name: 'StormBreaker', level: 90, score: 13245 },
    { id: 5, name: 'NightWolf', level: 88, score: 12780 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <img 
                src="https://cdn.poehali.dev/files/ae770840-ab42-4f33-a329-78e91c2c1460.png" 
                alt="code5.ru" 
                className="h-12 w-auto"
              />
              <div className="hidden md:flex items-center gap-6">
                {['Главная', 'Подать заявку', 'Форумы', 'Сообщество', 'Департаменты'].map((item) => (
                  <button
                    key={item}
                    onClick={() => item === 'Подать заявку' && setApplicationOpen(true)}
                    className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Icon name="Search" size={18} />
              </Button>
              <Button size="sm" className="gradient-blue" onClick={() => navigate('/auth')}>
                Войти
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section className="relative py-16 px-4 overflow-hidden min-h-[500px]">
          <iframe
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            src="https://www.youtube.com/embed/EBP4GjKgXzk?autoplay=1&mute=1&loop=1&playlist=EBP4GjKgXzk&controls=0&showinfo=0&rel=0&modestbranding=1"
            allow="autoplay; encrypted-media"
            style={{ pointerEvents: 'none' }}
            title="Background video"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
              <Badge className="bg-primary/20 text-primary border-primary/30">
                Сервер №1 в России
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                О нас
              </h2>
              <p className="text-lg text-foreground/90 max-w-2xl mx-auto">
                code5.ru - Это сообщество в GTA 5 на платформе FiveM. Проект был создан в 2024 году и имеет 2 игровых сервер с US-RU Сеттингов.
              </p>
              <div className="flex items-center justify-center gap-4 pt-4">
                <Button size="lg" className="gradient-blue text-lg px-8 hover:scale-105 transition-transform" onClick={() => setApplicationOpen(true)}>
                  <Icon name="FileText" size={20} className="mr-2" />
                  Подать заявку
                </Button>
              </div>

            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">Преимущества</h3>
                <ol className="space-y-4 text-foreground/90">
                  <li className="flex gap-3">
                    <span className="font-bold shrink-0">1.</span>
                    <span>Взрослая аудитория, несколько этапов отбора и фокус на голосовом взаимодействии в игре, в отличие от устаревшего SAMP;</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold shrink-0">2.</span>
                    <span>У нас нет ограничивающих скриптов, работ и внутриигровой валюты, чтобы дать свободу воображению игроков для создания уникальных РП-ситуаций;</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold shrink-0">3.</span>
                    <span>Мы считаем участников нашей самой большой ценностью, и каждый игрок является ключевым для развития сообщества.</span>
                  </li>
                </ol>

                <div className="pt-6 space-y-4">
                  <h4 className="text-2xl font-bold">Уникальный функционал</h4>
                  <p className="text-foreground/90">
                    Для сообщества разработана продвинутая CAD/MDT-система «TERMINAL», не уступающая реальным полицейским компьютерам, и десятки других уникальных систем.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-bold">Концепция сообщества</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-8">
                    <div className="flex-1 text-center">
                      <h5 className="font-bold mb-2">Гражданские</h5>
                      <p className="text-sm text-muted-foreground">Придумывают ситуации</p>
                    </div>
                    <div className="text-2xl text-muted-foreground self-center">/</div>
                    <div className="flex-1 text-center">
                      <h5 className="font-bold mb-2">Государственные службы</h5>
                      <p className="text-sm text-muted-foreground">Разрешают созданные ситуации</p>
                    </div>
                  </div>

                  <p className="text-foreground/90 text-center">
                    Вы можете начать в любом из доступных департаментов, и поменять его в дальнейшем:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <h6 className="font-bold mb-1">Гражданский Департамент</h6>
                      <p className="text-sm text-muted-foreground">Создают проблемы</p>
                    </div>
                    <div>
                      <h6 className="font-bold mb-1">Дорожный Патруль Сан Андреас</h6>
                      <p className="text-sm text-muted-foreground">Полицейский Департамент Лос-Сантоса</p>
                      <p className="text-sm text-muted-foreground">Следят за порядком</p>
                    </div>
                    <div>
                      <h6 className="font-bold mb-1">Пожарный департамент Лос-Сантоса</h6>
                      <p className="text-sm text-muted-foreground">Спасают людей</p>
                    </div>
                    <div>
                      <h6 className="font-bold mb-1">Департамент транспорта</h6>
                      <p className="text-sm text-muted-foreground">Организовывают движение</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="glass-effect border-white/10 p-8 text-center group hover:border-primary/50 transition-all">
                <div className="w-16 h-16 rounded-full gradient-blue mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Gamepad2" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-2">Игровой процесс</h4>
                <p className="text-muted-foreground">Реалистичная механика и сюжетные линии</p>
              </Card>
              <Card className="glass-effect border-white/10 p-8 text-center group hover:border-accent/50 transition-all">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/50 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Users" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-2">Сообщество</h4>
                <p className="text-muted-foreground">Активное комьюнити и поддержка 24/7</p>
              </Card>
              <Card className="glass-effect border-white/10 p-8 text-center group hover:border-primary/50 transition-all">
                <div className="w-16 h-16 rounded-full gradient-blue mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon name="Award" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-2">Достижения</h4>
                <p className="text-muted-foreground">Система рангов и уникальных наград</p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 px-4 mt-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © 2025 code5.ru. Все права защищены.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Правила</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Форум</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Discord</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">VK</a>
            </div>
          </div>
        </div>
      </footer>

      <Dialog open={applicationOpen} onOpenChange={setApplicationOpen}>
        <DialogContent className="sm:max-w-[600px] glass-effect border-white/10">
          <DialogHeader>
            <DialogTitle className="text-2xl">Подать заявку</DialogTitle>
            <DialogDescription>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                <Icon name="Lock" size={14} />
                Откроется после завершения предыдущих этапов.
              </div>
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              {[1, 2].map((step) => (
                <div key={step} className="flex items-center gap-2 flex-1">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${
                    currentStep === step ? 'bg-primary text-primary-foreground' : 
                    currentStep > step ? 'bg-green-500 text-white' : 'bg-secondary text-muted-foreground'
                  }`}>
                    {currentStep > step ? <Icon name="Check" size={16} /> : step}
                  </div>
                  {step < 2 && <div className={`h-0.5 flex-1 ${
                    currentStep > step ? 'bg-green-500' : 'bg-secondary'
                  }`} />}
                </div>
              ))}
            </div>

            <div className="text-sm text-muted-foreground mb-4">
              Ответь на несколько вопросов <span className="text-foreground font-bold">[{currentStep}/2]</span>
            </div>

            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя и фамилия *</Label>
                    <Input 
                      id="name" 
                      placeholder="Введите имя и фамилию"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-secondary/50 border-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age">Возраст *</Label>
                    <Input 
                      id="age" 
                      type="number"
                      placeholder="Ваш возраст"
                      value={formData.age}
                      onChange={(e) => setFormData({...formData, age: e.target.value})}
                      className="bg-secondary/50 border-white/10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="discord">Discord никнейм *</Label>
                  <Input 
                    id="discord" 
                    placeholder="example#1234"
                    value={formData.discord}
                    onChange={(e) => setFormData({...formData, discord: e.target.value})}
                    className="bg-secondary/50 border-white/10"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timezone">Часовой пояс *</Label>
                  <Input 
                    id="timezone" 
                    placeholder="Например: МСК (UTC+3)"
                    value={formData.timezone}
                    onChange={(e) => setFormData({...formData, timezone: e.target.value})}
                    className="bg-secondary/50 border-white/10"
                  />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="experience">Расскажи о своем опыте в RP *</Label>
                  <Textarea 
                    id="experience" 
                    placeholder="Опишите ваш опыт игры на RP серверах..."
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    className="bg-secondary/50 border-white/10 min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whyJoin">Почему хочешь к нам? *</Label>
                  <Textarea 
                    id="whyJoin" 
                    placeholder="Расскажите, что вас привлекло в нашем проекте..."
                    value={formData.whyJoin}
                    onChange={(e) => setFormData({...formData, whyJoin: e.target.value})}
                    className="bg-secondary/50 border-white/10 min-h-[100px]"
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input 
                    type="checkbox" 
                    id="rules"
                    checked={formData.rules}
                    onChange={(e) => setFormData({...formData, rules: e.target.checked})}
                    className="mt-1"
                  />
                  <Label htmlFor="rules" className="text-sm cursor-pointer">
                    Я ознакомился с правилами сервера и обязуюсь их соблюдать *
                  </Label>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-4">
              {currentStep > 1 && (
                <Button 
                  variant="outline" 
                  onClick={() => setCurrentStep(currentStep - 1)}
                >
                  Назад
                </Button>
              )}
              {currentStep < 2 ? (
                <Button 
                  className="gradient-blue ml-auto"
                  onClick={() => setCurrentStep(2)}
                  disabled={!formData.name || !formData.age || !formData.discord || !formData.timezone}
                >
                  Далее
                </Button>
              ) : (
                <Button 
                  className="gradient-blue ml-auto"
                  onClick={() => {
                    alert('Заявка отправлена! Ожидайте рассмотрения в течение 24 часов.');
                    setApplicationOpen(false);
                    setCurrentStep(1);
                    setFormData({
                      name: '', age: '', discord: '', timezone: '',
                      experience: '', whyJoin: '', rules: false
                    });
                  }}
                  disabled={!formData.experience || !formData.whyJoin || !formData.rules}
                >
                  Отправить заявку
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;