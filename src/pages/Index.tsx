import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

interface User {
  email: string;
  username: string;
  avatar?: string;
  steamConnected: boolean;
  applicationCompleted: boolean;
}

const Index = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('main');
  const [currentWord, setCurrentWord] = useState(0);
  const applicationSectionRef = useRef<HTMLDivElement>(null);
  
  const [user, setUser] = useState<User | null>(null);
  const [authOpen, setAuthOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const [steamOpen, setSteamOpen] = useState(false);
  const [questionnaireOpen, setQuestionnaireOpen] = useState(false);
  
  const [authForm, setAuthForm] = useState({ email: '', password: '', username: '' });
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [steamId, setSteamId] = useState('');
  const [questionnaire, setQuestionnaire] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: ''
  });
  
  const words = [
    'Собой', 'Копом', 'Эвакуаторщиком', 'Спасателем', 'Диспетчером',
    'Котиком', 'Гангстером', 'Бандитом', 'Трупером', 'Уличным гонщиком',
    'Пилотом вертолёта', 'Патрульным', 'Собакой К-9'
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const saveUser = (userData: User) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        const userData = JSON.parse(savedUser);
        if (userData.email === authForm.email) {
          setUser(userData);
          setAuthOpen(false);
          setAuthForm({ email: '', password: '', username: '' });
        } else {
          alert('Неверные учетные данные');
        }
      } else {
        alert('Пользователь не найден');
      }
    } else {
      const newUser: User = {
        email: authForm.email,
        username: authForm.username,
        steamConnected: false,
        applicationCompleted: false
      };
      saveUser(newUser);
      setAuthOpen(false);
      setAuthForm({ email: '', password: '', username: '' });
    }
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result && user) {
          const updatedUser = { ...user, avatar: event.target.result as string };
          saveUser(updatedUser);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSteamConnect = (e: React.FormEvent) => {
    e.preventDefault();
    if (steamId && user) {
      const updatedUser = { ...user, steamConnected: true };
      saveUser(updatedUser);
      setSteamOpen(false);
      setSteamId('');
    }
  };

  const handleQuestionnaireSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (questionnaire.q1 && questionnaire.q2 && questionnaire.q3 && questionnaire.q4 && user) {
      const updatedUser = { ...user, applicationCompleted: true };
      saveUser(updatedUser);
      setQuestionnaireOpen(false);
      alert('Заявка успешно отправлена! Ожидайте рассмотрения.');
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    setProfileOpen(false);
  };

  const scrollToApplication = () => {
    applicationSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const isStepDisabled = (step: number) => {
    if (!user) return step !== 1;
    if (step === 1) return false;
    if (step === 2) return !user;
    if (step === 3) return !user.steamConnected;
    if (step === 4) return !user.steamConnected;
    return false;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-20 px-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg gradient-blue flex items-center justify-center font-bold">
                C5
              </div>
              <span className="font-bold text-lg">code5.ru</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center gap-6">
                {['Главная', 'О проекте', 'Правила', 'Подать заявку'].map((item) => (
                  <button
                    key={item}
                    onClick={() => item === 'Подать заявку' && scrollToApplication()}
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
              {user ? (
                <Button size="sm" className="gradient-blue" onClick={() => setProfileOpen(true)}>
                  <Icon name="User" size={18} className="mr-2" />
                  {user.username}
                </Button>
              ) : (
                <Button size="sm" className="gradient-blue" onClick={() => setAuthOpen(true)}>
                  Войти
                </Button>
              )}
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
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                Станьте <span className="text-primary transition-all duration-500 inline-block animate-fade-in" key={currentWord}>{words[currentWord]}</span> в Америке
              </h2>
              <div className="flex items-center justify-center gap-4 pt-4">
                <Button size="lg" className="gradient-blue text-lg px-8 hover:scale-105 transition-transform" onClick={scrollToApplication}>
                  <Icon name="FileText" size={20} className="mr-2" />
                  Подать заявку
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h3 className="text-3xl font-bold">
                  Добро пожаловать на <span className="text-primary">code5.ru</span>
                </h3>
                <p className="text-lg text-muted-foreground">
                  Реалистичный RP проект в GTA V. Играй за копа или гражданского. Создай свою историю в Лос-Сантосе.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="glass-effect border-white/10 p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg gradient-blue flex items-center justify-center flex-shrink-0">
                        <Icon name="Shield" size={24} />
                      </div>
                      <h4 className="text-xl font-bold">Государственные службы</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Вступи в полицию, пожарную службу или медицину. Защищай город и помогай людям.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <Badge variant="secondary">LSPD</Badge>
                      <Badge variant="secondary">Пожарные</Badge>
                      <Badge variant="secondary">EMS</Badge>
                    </div>
                  </div>
                </Card>

                <Card className="glass-effect border-white/10 p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center flex-shrink-0">
                        <Icon name="Users" size={24} />
                      </div>
                      <h4 className="text-xl font-bold">Гражданские</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Живи обычной жизнью, работай, заводи друзей или стань частью криминального мира.
                    </p>
                    <div className="flex items-center gap-2 text-sm">
                      <Badge variant="secondary">Работа</Badge>
                      <Badge variant="secondary">Бизнес</Badge>
                      <Badge variant="secondary">Банды</Badge>
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="glass-effect border-white/10 p-8">
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-center">Как это работает?</h4>
                  
                  <div className="flex items-center justify-center gap-4">
                    <div className="flex-1 text-center">
                      <h5 className="font-bold mb-2">Гражданские</h5>
                      <p className="text-sm text-muted-foreground">Создают проблемы</p>
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
              </Card>
            </div>
          </div>
        </section>

        <section ref={applicationSectionRef} className="py-16 px-4 bg-black/40">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-20 h-20 bg-card rounded flex items-center justify-center text-4xl font-bold text-muted-foreground overflow-hidden">
                    {user?.avatar ? (
                      <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover" />
                    ) : (
                      '?'
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Ваш аккаунт</h3>
                    <p className="text-sm text-muted-foreground">{user ? user.username : 'Гость'}</p>
                    {!user && (
                      <button
                        onClick={() => setAuthOpen(true)}
                        className="text-sm text-primary hover:underline mt-1 flex items-center gap-1"
                      >
                        <Icon name="LogIn" size={14} />
                        Войди, чтобы подать заявку
                      </button>
                    )}
                    {user && (
                      <button
                        onClick={() => setProfileOpen(true)}
                        className="text-sm text-primary hover:underline mt-1 flex items-center gap-1"
                      >
                        <Icon name="Settings" size={14} />
                        Редактировать профиль
                      </button>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-bold">Как начать играть?</h4>
                  <div className="space-y-3">
                    <div
                      onClick={() => !user && setAuthOpen(true)}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                        isStepDisabled(1)
                          ? 'bg-card/30 opacity-50 cursor-not-allowed'
                          : 'bg-card/50 hover:bg-card cursor-pointer'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${user ? 'bg-primary/40' : 'bg-primary/20'}`}>
                        <Icon name="User" size={16} />
                      </div>
                      <span className="text-sm">Войди в аккаунт</span>
                      {user && <Icon name="Check" size={16} className="ml-auto text-primary" />}
                    </div>
                    <div
                      onClick={() => user && !user.steamConnected && setSteamOpen(true)}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                        isStepDisabled(2)
                          ? 'bg-card/30 opacity-50 cursor-not-allowed'
                          : 'bg-card/50 hover:bg-card cursor-pointer'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${user?.steamConnected ? 'bg-primary/40' : 'bg-primary/20'}`}>
                        <Icon name="Link" size={16} />
                      </div>
                      <span className="text-sm">Привяжи свой Steam</span>
                      {user?.steamConnected && <Icon name="Check" size={16} className="ml-auto text-primary" />}
                    </div>
                    <div
                      onClick={() => user?.steamConnected && !user.applicationCompleted && setQuestionnaireOpen(true)}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                        isStepDisabled(3)
                          ? 'bg-card/30 opacity-50 cursor-not-allowed'
                          : 'bg-card/50 hover:bg-card cursor-pointer'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${user?.applicationCompleted ? 'bg-primary/40' : 'bg-primary/20'}`}>
                        <Icon name="Info" size={16} />
                      </div>
                      <span className="text-sm">Ответь на несколько вопросов</span>
                      {user?.applicationCompleted && <Icon name="Check" size={16} className="ml-auto text-primary" />}
                    </div>
                    <div
                      className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                        isStepDisabled(4)
                          ? 'bg-card/30 opacity-50 cursor-not-allowed'
                          : 'bg-card/50 hover:bg-card cursor-pointer'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${user?.applicationCompleted ? 'bg-primary/40' : 'bg-primary/20'}`}>
                        <Icon name="Play" size={16} />
                      </div>
                      <span className="text-sm">Начинай играть</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold flex items-center gap-2">
                  Ответь на несколько вопросов
                  <span className="text-sm text-muted-foreground">[1/2]</span>
                </h4>
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Icon name="Lock" size={14} />
                  Откроется после завершения предыдущих этапов.
                </p>
                {user?.steamConnected && !user.applicationCompleted && (
                  <Button onClick={() => setQuestionnaireOpen(true)} className="w-full gradient-blue">
                    Начать заполнение анкеты
                  </Button>
                )}
              </div>
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

      <Dialog open={authOpen} onOpenChange={setAuthOpen}>
        <DialogContent className="bg-card border-white/10">
          <DialogHeader>
            <DialogTitle>{isLogin ? 'Вход в аккаунт' : 'Регистрация'}</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleAuth} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="username">Имя пользователя</Label>
                <Input
                  id="username"
                  value={authForm.username}
                  onChange={(e) => setAuthForm({ ...authForm, username: e.target.value })}
                  required
                  className="bg-background/50"
                />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={authForm.email}
                onChange={(e) => setAuthForm({ ...authForm, email: e.target.value })}
                required
                className="bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Пароль</Label>
              <Input
                id="password"
                type="password"
                value={authForm.password}
                onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })}
                required
                className="bg-background/50"
              />
            </div>
            <Button type="submit" className="w-full gradient-blue">
              {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="w-full text-sm text-primary hover:underline"
            >
              {isLogin ? 'Нет аккаунта? Зарегистрируйтесь' : 'Уже есть аккаунт? Войдите'}
            </button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={profileOpen} onOpenChange={setProfileOpen}>
        <DialogContent className="bg-card border-white/10">
          <DialogHeader>
            <DialogTitle>Редактирование профиля</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-background rounded-lg flex items-center justify-center overflow-hidden">
                {user?.avatar ? (
                  <img src={user.avatar} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <Icon name="User" size={32} />
                )}
              </div>
              <div className="flex-1">
                <Label htmlFor="avatar" className="cursor-pointer">
                  <div className="flex items-center gap-2 text-sm text-primary hover:underline">
                    <Icon name="Upload" size={16} />
                    Загрузить аватар
                  </div>
                </Label>
                <Input
                  id="avatar"
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarChange}
                  className="hidden"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Имя пользователя</Label>
              <Input value={user?.username || ''} disabled className="bg-background/50" />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input value={user?.email || ''} disabled className="bg-background/50" />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleLogout} variant="destructive" className="flex-1">
                Выйти
              </Button>
              <Button onClick={() => setProfileOpen(false)} className="flex-1">
                Закрыть
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={steamOpen} onOpenChange={setSteamOpen}>
        <DialogContent className="bg-card border-white/10">
          <DialogHeader>
            <DialogTitle>Привязка Steam аккаунта</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSteamConnect} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="steamId">Steam ID или ссылка на профиль</Label>
              <Input
                id="steamId"
                value={steamId}
                onChange={(e) => setSteamId(e.target.value)}
                placeholder="https://steamcommunity.com/id/..."
                required
                className="bg-background/50"
              />
              <p className="text-xs text-muted-foreground">
                Введите ваш Steam ID или ссылку на профиль Steam
              </p>
            </div>
            <Button type="submit" className="w-full gradient-blue">
              <Icon name="Link" size={16} className="mr-2" />
              Привязать Steam
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={questionnaireOpen} onOpenChange={setQuestionnaireOpen}>
        <DialogContent className="bg-card border-white/10 max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Анкета для вступления на проект</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleQuestionnaireSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="q1">Как вас зовут? Расскажите о себе!</Label>
              <Textarea
                id="q1"
                value={questionnaire.q1}
                onChange={(e) => setQuestionnaire({ ...questionnaire, q1: e.target.value })}
                placeholder="Ваш ответ..."
                required
                className="bg-background/50 min-h-[100px]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="q2">Как вы думаите, какова концепция сообщества?</Label>
              <Textarea
                id="q2"
                value={questionnaire.q2}
                onChange={(e) => setQuestionnaire({ ...questionnaire, q2: e.target.value })}
                placeholder="Ваш ответ..."
                required
                className="bg-background/50 min-h-[100px]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="q3">В каком департаменте хотите играть?</Label>
              <Textarea
                id="q3"
                value={questionnaire.q3}
                onChange={(e) => setQuestionnaire({ ...questionnaire, q3: e.target.value })}
                placeholder="Ваш ответ..."
                required
                className="bg-background/50 min-h-[100px]"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="q4">Почему именно этот департамент?</Label>
              <Textarea
                id="q4"
                value={questionnaire.q4}
                onChange={(e) => setQuestionnaire({ ...questionnaire, q4: e.target.value })}
                placeholder="Ваш ответ..."
                required
                className="bg-background/50 min-h-[100px]"
              />
            </div>
            <Button type="submit" className="w-full gradient-blue">
              <Icon name="Send" size={16} className="mr-2" />
              Отправить заявку
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
