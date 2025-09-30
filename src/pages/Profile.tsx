import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const userData = {
    username: 'DarkKnight',
    email: 'darkknight@code5.ru',
    level: 99,
    experience: 15420,
    nextLevelExp: 20000,
    rank: 'Легенда',
    faction: 'Полиция',
    playTime: '847 часов',
    registered: '15.03.2024',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DarkKnight'
  };

  const achievements = [
    { id: 1, name: 'Первый шаг', icon: 'Award', description: 'Достигнуть 10 уровня', completed: true },
    { id: 2, name: 'Профессионал', icon: 'Trophy', description: 'Достигнуть 50 уровня', completed: true },
    { id: 3, name: 'Легенда', icon: 'Crown', description: 'Достигнуть 99 уровня', completed: true },
    { id: 4, name: 'Миллионер', icon: 'DollarSign', description: 'Заработать 1,000,000$', completed: false },
  ];

  const stats = [
    { label: 'Убийств', value: 1247, icon: 'Crosshair' },
    { label: 'Смертей', value: 891, icon: 'Skull' },
    { label: 'Миссий', value: 342, icon: 'Target' },
    { label: 'Побед', value: 567, icon: 'Trophy' },
  ];

  const recentActivity = [
    { id: 1, action: 'Выиграл гонки', time: '2 часа назад', icon: 'Zap' },
    { id: 2, action: 'Вступил во фракцию Полиция', time: '1 день назад', icon: 'Shield' },
    { id: 3, action: 'Получил достижение "Легенда"', time: '3 дня назад', icon: 'Award' },
  ];

  const expProgress = (userData.experience / userData.nextLevelExp) * 100;

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
            >
              <Icon name="ArrowLeft" size={18} className="mr-2" />
              Назад
            </Button>
            <img 
              src="https://cdn.poehali.dev/files/ae770840-ab42-4f33-a329-78e91c2c1460.png" 
              alt="code5.ru" 
              className="h-8 w-auto"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/auth')}
            >
              <Icon name="LogOut" size={18} />
            </Button>
          </div>
        </div>
      </nav>

      <main className="pt-20 px-4 pb-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 mt-6">
            <Card className="glass-effect border-white/10 p-6 lg:col-span-1">
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <img
                    src={userData.avatar}
                    alt={userData.username}
                    className="w-32 h-32 rounded-full border-4 border-white/20"
                  />
                  <Badge className="absolute bottom-0 right-0 bg-accent text-accent-foreground">
                    {userData.level}
                  </Badge>
                </div>
                <h2 className="text-2xl font-bold mb-1">{userData.username}</h2>
                <Badge className="mb-4">{userData.rank}</Badge>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Опыт</span>
                    <span className="font-medium">{userData.experience.toLocaleString()} / {userData.nextLevelExp.toLocaleString()}</span>
                  </div>
                  <Progress value={expProgress} className="h-2" />
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                  <Icon name="Shield" size={20} className="text-primary" />
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground">Фракция</p>
                    <p className="font-medium">{userData.faction}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground">Игровое время</p>
                    <p className="font-medium">{userData.playTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                  <Icon name="Calendar" size={20} className="text-primary" />
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground">Регистрация</p>
                    <p className="font-medium">{userData.registered}</p>
                  </div>
                </div>
              </div>

              <Button
                className="w-full mt-6 gradient-blue"
                onClick={() => setIsEditing(!isEditing)}
              >
                <Icon name="Settings" size={18} className="mr-2" />
                Редактировать профиль
              </Button>
            </Card>

            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <Card key={stat.label} className="glass-effect border-white/10 p-4">
                    <div className="flex flex-col items-center text-center">
                      <Icon name={stat.icon as any} size={24} className="mb-2 text-primary" />
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-xs text-muted-foreground">{stat.label}</p>
                    </div>
                  </Card>
                ))}
              </div>

              <Tabs defaultValue="achievements" className="w-full">
                <TabsList className="glass-effect border-white/10 w-full">
                  <TabsTrigger value="achievements" className="flex-1">Достижения</TabsTrigger>
                  <TabsTrigger value="activity" className="flex-1">Активность</TabsTrigger>
                  <TabsTrigger value="settings" className="flex-1">Настройки</TabsTrigger>
                </TabsList>

                <TabsContent value="achievements" className="space-y-4 mt-6">
                  {achievements.map((achievement) => (
                    <Card key={achievement.id} className="glass-effect border-white/10 p-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          achievement.completed ? 'gradient-blue' : 'bg-secondary'
                        }`}>
                          <Icon name={achievement.icon as any} size={24} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold">{achievement.name}</h4>
                            {achievement.completed && (
                              <Icon name="CheckCircle" size={16} className="text-accent" />
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="activity" className="space-y-4 mt-6">
                  {recentActivity.map((activity) => (
                    <Card key={activity.id} className="glass-effect border-white/10 p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                          <Icon name={activity.icon as any} size={20} />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{activity.action}</p>
                          <p className="text-sm text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="settings" className="mt-6">
                  <Card className="glass-effect border-white/10 p-6">
                    <h3 className="text-lg font-bold mb-6">Настройки профиля</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="username">Имя пользователя</Label>
                        <Input id="username" defaultValue={userData.username} />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue={userData.email} />
                      </div>
                      <div>
                        <Label htmlFor="password">Новый пароль</Label>
                        <Input id="password" type="password" placeholder="••••••••" />
                      </div>
                      <Button className="gradient-blue">
                        <Icon name="Save" size={18} className="mr-2" />
                        Сохранить изменения
                      </Button>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
