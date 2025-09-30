import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const [users, setUsers] = useState([
    { id: 1, name: 'DarkKnight', level: 99, status: 'online', banned: false, role: 'player' },
    { id: 2, name: 'ShadowHunter', level: 95, status: 'offline', banned: false, role: 'player' },
    { id: 3, name: 'PhoenixRider', level: 92, status: 'online', banned: false, role: 'moderator' },
    { id: 4, name: 'StormBreaker', level: 90, status: 'online', banned: true, role: 'player' },
  ]);

  const [factions, setFactions] = useState([
    { id: 1, name: 'Полиция', members: 142, leader: 'Officer_Chief', status: 'active' },
    { id: 2, name: 'Медики', members: 98, leader: 'Dr_House', status: 'active' },
    { id: 3, name: 'Мафия', members: 156, leader: 'Godfather', status: 'active' },
    { id: 4, name: 'Банда Grove', members: 89, leader: 'CJ_Boss', status: 'active' },
  ]);

  const [events, setEvents] = useState([
    { id: 1, title: 'Гонки на выживание', status: 'active', participants: 24, prize: '50,000$' },
    { id: 2, title: 'Захват территории', status: 'active', participants: 45, prize: 'Территория' },
    { id: 3, title: 'Битва фракций', status: 'planned', participants: 67, prize: '100,000$' },
  ]);

  const stats = {
    totalPlayers: 15890,
    onlinePlayers: 2453,
    totalFactions: 4,
    activeEvents: 2,
    bannedUsers: 127,
    serverUptime: '99.8%'
  };

  const toggleBan = (userId: number) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, banned: !user.banned } : user
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/')}
                className="mr-4"
              >
                <Icon name="ArrowLeft" size={18} />
              </Button>
              <Icon name="ShieldCheck" size={24} className="text-primary" />
              <h1 className="text-xl font-bold">Панель администратора</h1>
            </div>
            <div className="flex items-center gap-4">
              <Badge className="bg-accent/20 text-accent border-accent/30">
                Admin
              </Badge>
              <Button variant="ghost" size="sm">
                <Icon name="LogOut" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20 px-4 pb-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 mt-6">
            <Card className="glass-effect border-white/10 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Всего игроков</p>
                  <p className="text-3xl font-bold">{stats.totalPlayers.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 rounded-xl gradient-blue flex items-center justify-center">
                  <Icon name="Users" size={24} />
                </div>
              </div>
            </Card>

            <Card className="glass-effect border-white/10 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Онлайн сейчас</p>
                  <p className="text-3xl font-bold text-accent">{stats.onlinePlayers.toLocaleString()}</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center">
                  <Icon name="Activity" size={24} />
                </div>
              </div>
            </Card>

            <Card className="glass-effect border-white/10 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Активных событий</p>
                  <p className="text-3xl font-bold text-primary">{stats.activeEvents}</p>
                </div>
                <div className="w-12 h-12 rounded-xl gradient-blue flex items-center justify-center">
                  <Icon name="Zap" size={24} />
                </div>
              </div>
            </Card>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="glass-effect border-white/10 mb-6">
              <TabsTrigger value="overview">Обзор</TabsTrigger>
              <TabsTrigger value="users">Игроки</TabsTrigger>
              <TabsTrigger value="factions">Фракции</TabsTrigger>
              <TabsTrigger value="events">События</TabsTrigger>
              <TabsTrigger value="settings">Настройки</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="glass-effect border-white/10 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">Последние действия</h3>
                    <Icon name="Activity" size={20} className="text-primary" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                      <Icon name="UserPlus" size={18} className="text-accent" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Новый игрок зарегистрирован</p>
                        <p className="text-xs text-muted-foreground">2 минуты назад</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                      <Icon name="AlertTriangle" size={18} className="text-destructive" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Игрок StormBreaker заблокирован</p>
                        <p className="text-xs text-muted-foreground">15 минут назад</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5">
                      <Icon name="Trophy" size={18} className="text-primary" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">Событие 'Гонки' завершено</p>
                        <p className="text-xs text-muted-foreground">1 час назад</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="glass-effect border-white/10 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">Статистика сервера</h3>
                    <Icon name="BarChart3" size={20} className="text-primary" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">Загрузка CPU</span>
                        <span className="text-sm font-bold">45%</span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-accent" style={{ width: '45%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">Использование RAM</span>
                        <span className="text-sm font-bold">62%</span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: '62%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm">Uptime</span>
                        <span className="text-sm font-bold text-accent">{stats.serverUptime}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="users">
              <Card className="glass-effect border-white/10 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold">Управление игроками</h3>
                  <div className="flex items-center gap-2">
                    <Input placeholder="Поиск..." className="w-64" />
                    <Button size="sm" className="gradient-blue">
                      <Icon name="Search" size={16} />
                    </Button>
                  </div>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Имя</TableHead>
                      <TableHead>Уровень</TableHead>
                      <TableHead>Роль</TableHead>
                      <TableHead>Статус</TableHead>
                      <TableHead>Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.level}</TableCell>
                        <TableCell>
                          <Badge variant={user.role === 'moderator' ? 'default' : 'secondary'}>
                            {user.role === 'moderator' ? 'Модератор' : 'Игрок'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {user.banned ? (
                            <Badge variant="destructive">Заблокирован</Badge>
                          ) : (
                            <Badge className={user.status === 'online' ? 'bg-accent/20 text-accent border-accent/30' : ''}>
                              {user.status === 'online' ? 'Онлайн' : 'Оффлайн'}
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => toggleBan(user.id)}
                            >
                              <Icon name={user.banned ? 'UserCheck' : 'UserX'} size={16} />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Icon name="Settings" size={16} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </TabsContent>

            <TabsContent value="factions">
              <Card className="glass-effect border-white/10 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold">Управление фракциями</h3>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" className="gradient-blue">
                        <Icon name="Plus" size={16} className="mr-2" />
                        Добавить фракцию
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="glass-effect border-white/10">
                      <DialogHeader>
                        <DialogTitle>Новая фракция</DialogTitle>
                        <DialogDescription>
                          Создайте новую фракцию для сервера
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div>
                          <Label htmlFor="faction-name">Название фракции</Label>
                          <Input id="faction-name" placeholder="Введите название..." />
                        </div>
                        <div>
                          <Label htmlFor="faction-leader">Лидер</Label>
                          <Input id="faction-leader" placeholder="Имя лидера..." />
                        </div>
                        <div>
                          <Label htmlFor="faction-desc">Описание</Label>
                          <Textarea id="faction-desc" placeholder="Описание фракции..." />
                        </div>
                        <Button className="w-full gradient-blue">Создать фракцию</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Название</TableHead>
                      <TableHead>Лидер</TableHead>
                      <TableHead>Участников</TableHead>
                      <TableHead>Статус</TableHead>
                      <TableHead>Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {factions.map((faction) => (
                      <TableRow key={faction.id}>
                        <TableCell>{faction.id}</TableCell>
                        <TableCell className="font-medium">{faction.name}</TableCell>
                        <TableCell>{faction.leader}</TableCell>
                        <TableCell>{faction.members}</TableCell>
                        <TableCell>
                          <Badge className="bg-accent/20 text-accent border-accent/30">
                            {faction.status === 'active' ? 'Активна' : 'Неактивна'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="ghost">
                              <Icon name="Edit" size={16} />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Icon name="Trash2" size={16} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </TabsContent>

            <TabsContent value="events">
              <Card className="glass-effect border-white/10 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold">Управление событиями</h3>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" className="gradient-blue">
                        <Icon name="Plus" size={16} className="mr-2" />
                        Создать событие
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="glass-effect border-white/10">
                      <DialogHeader>
                        <DialogTitle>Новое событие</DialogTitle>
                        <DialogDescription>
                          Создайте новое игровое событие
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div>
                          <Label htmlFor="event-title">Название события</Label>
                          <Input id="event-title" placeholder="Введите название..." />
                        </div>
                        <div>
                          <Label htmlFor="event-prize">Приз</Label>
                          <Input id="event-prize" placeholder="Например: 50,000$" />
                        </div>
                        <div>
                          <Label htmlFor="event-desc">Описание</Label>
                          <Textarea id="event-desc" placeholder="Описание события..." />
                        </div>
                        <Button className="w-full gradient-blue">Создать событие</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Название</TableHead>
                      <TableHead>Участников</TableHead>
                      <TableHead>Приз</TableHead>
                      <TableHead>Статус</TableHead>
                      <TableHead>Действия</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {events.map((event) => (
                      <TableRow key={event.id}>
                        <TableCell>{event.id}</TableCell>
                        <TableCell className="font-medium">{event.title}</TableCell>
                        <TableCell>{event.participants}</TableCell>
                        <TableCell>{event.prize}</TableCell>
                        <TableCell>
                          <Badge className={event.status === 'active' ? 'bg-accent/20 text-accent border-accent/30' : ''}>
                            {event.status === 'active' ? 'Активно' : 'Запланировано'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="ghost">
                              <Icon name="Play" size={16} />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Icon name="Edit" size={16} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card className="glass-effect border-white/10 p-6">
                <h3 className="text-lg font-bold mb-6">Настройки сервера</h3>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="server-name">Название сервера</Label>
                    <Input id="server-name" defaultValue="code5.ru RolePlay" />
                  </div>
                  <div>
                    <Label htmlFor="max-players">Максимум игроков</Label>
                    <Input id="max-players" type="number" defaultValue="500" />
                  </div>
                  <div>
                    <Label htmlFor="server-desc">Описание сервера</Label>
                    <Textarea id="server-desc" defaultValue="Лучший RolePlay сервер в России" rows={4} />
                  </div>
                  <Button className="gradient-blue">
                    <Icon name="Save" size={16} className="mr-2" />
                    Сохранить настройки
                  </Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Admin;
