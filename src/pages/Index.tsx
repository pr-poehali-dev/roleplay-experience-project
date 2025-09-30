import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  const factions = [
    {
      id: 1,
      name: 'Полиция',
      description: 'Защита правопорядка города',
      members: 142,
      rating: 4.8,
      icon: 'Shield',
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 2,
      name: 'Медики',
      description: 'Спасение жизней граждан',
      members: 98,
      rating: 4.9,
      icon: 'Heart',
      color: 'from-red-500 to-red-700'
    },
    {
      id: 3,
      name: 'Мафия',
      description: 'Теневой бизнес и контроль',
      members: 156,
      rating: 4.7,
      icon: 'Users',
      color: 'from-purple-500 to-purple-700'
    },
    {
      id: 4,
      name: 'Банда Grove',
      description: 'Уличная банда района',
      members: 89,
      rating: 4.5,
      icon: 'Flame',
      color: 'from-green-500 to-green-700'
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
                className="h-10 w-auto"
              />
              <div className="hidden md:flex items-center gap-6">
                {['Главная', 'Начать играть', 'Форумы', 'Сообщество', 'Департаменты'].map((item) => (
                  <button
                    key={item}
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
              <Button size="sm" className="gradient-blue">
                Войти
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
              <Badge className="bg-primary/20 text-primary border-primary/30">
                Сервер №1 в России
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                Твоя история
                <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  начинается здесь
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Погрузись в мир RolePlay, где каждое твое действие имеет значение. 
                Выбери свой путь и стань легендой!
              </p>
              <div className="flex items-center justify-center gap-4 pt-4">
                <Button size="lg" className="gradient-blue text-lg px-8 hover:scale-105 transition-transform">
                  <Icon name="Play" size={20} className="mr-2" />
                  Начать играть
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Info" size={20} className="mr-2" />
                  Подробнее
                </Button>
              </div>
              <div className="flex items-center justify-center gap-8 pt-8 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={18} className="text-primary" />
                  <span><strong>2,453</strong> игроков онлайн</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Trophy" size={18} className="text-accent" />
                  <span><strong>15,890</strong> активных игроков</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <h3 className="text-3xl font-bold mb-3">Выбери свою фракцию</h3>
              <p className="text-muted-foreground">Присоединись к одной из организаций и начни свой путь</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {factions.map((faction, index) => (
                <Card
                  key={faction.id}
                  className="glass-effect border-white/10 p-6 group hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${faction.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={faction.icon as any} size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{faction.name}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{faction.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Icon name="Users" size={14} className="text-primary" />
                      <span>{faction.members}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={14} className="text-accent" />
                      <span>{faction.rating}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-secondary/30">
          <div className="container mx-auto">
            <Tabs defaultValue="events" className="w-full">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold">Активность</h3>
                <TabsList className="glass-effect border-white/10">
                  <TabsTrigger value="events">События</TabsTrigger>
                  <TabsTrigger value="rating">Рейтинг</TabsTrigger>
                  <TabsTrigger value="map">Карта</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="events" className="space-y-4">
                {events.map((event) => (
                  <Card key={event.id} className="glass-effect border-white/10 p-6 hover:border-primary/50 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl gradient-blue flex items-center justify-center">
                          <Icon name={event.type === 'race' ? 'Zap' : event.type === 'war' ? 'Swords' : 'Trophy'} size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">{event.title}</h4>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                            <span className="flex items-center gap-1">
                              <Icon name="Clock" size={14} />
                              {event.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="Users" size={14} />
                              {event.participants} участников
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-accent/20 text-accent border-accent/30 mb-2">
                          {event.prize}
                        </Badge>
                        <Button size="sm" className="gradient-blue">
                          Участвовать
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="rating">
                <Card className="glass-effect border-white/10 p-6">
                  <div className="space-y-4">
                    {topPlayers.map((player, index) => (
                      <div key={player.id} className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                            index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : index === 2 ? 'bg-orange-600' : 'bg-secondary'
                          }`}>
                            {index + 1}
                          </div>
                          <div>
                            <div className="font-bold">{player.name}</div>
                            <div className="text-sm text-muted-foreground">Уровень {player.level}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-primary">{player.score.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">очков</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="map">
                <Card className="glass-effect border-white/10 p-6">
                  <div className="aspect-video bg-gradient-to-br from-secondary to-background rounded-xl flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <Icon name="Map" size={64} className="mx-auto text-muted-foreground" />
                      <p className="text-muted-foreground">Интерактивная карта сервера</p>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
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
    </div>
  );
};

export default Index;