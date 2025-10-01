import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';

const UserProfile = () => {
  const navigate = useNavigate();
  const [isOwnProfile, setIsOwnProfile] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [bannerFile, setBannerFile] = useState<File | null>(null);
  const [hoveredProfile, setHoveredProfile] = useState(false);

  const currentUser = {
    username: 'Nikita C.',
    rank: '#427',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop'
  };

  const profileUser = {
    username: 'Nikita C.',
    rank: '#427',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop',
    banner: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1200&h=300&fit=crop',
    posts: 2,
    registrationDate: '2 января',
    lastSeen: '27 января в 21:49',
    level: 0,
    xp: 0,
    sponsor: 'Нет',
    rank_leo: 'Отсутствует',
    subscribers: [
      { id: 1, name: 'User1', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50' },
      { id: 2, name: 'User2', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=50' }
    ],
    visitors: [
      { id: 1, name: 'Emil G. #755', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50', time: '5 минут назад' },
      { id: 2, name: 'Ardon I. #31', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50', time: '10 минут назад' }
    ]
  };

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setBannerFile(file);
    }
  };

  const handleSubscribe = () => {
    if (!isOwnProfile) {
      setIsSubscribed(!isSubscribed);
    }
  };

  useEffect(() => {
    const visitors = JSON.parse(localStorage.getItem('profileVisitors') || '[]');
    const currentVisitor = {
      id: Date.now(),
      name: currentUser.username + ' ' + currentUser.rank,
      avatar: currentUser.avatar,
      time: 'только что'
    };
    visitors.unshift(currentVisitor);
    localStorage.setItem('profileVisitors', JSON.stringify(visitors.slice(0, 10)));
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-20 px-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg gradient-blue flex items-center justify-center font-bold">
                  C5
                </div>
                <span className="font-bold text-lg">code5.ru</span>
              </div>
              <div className="hidden md:flex items-center gap-6">
                <button
                  onClick={() => navigate('/')}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group"
                >
                  Главная
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </button>
                <button
                  onClick={() => navigate('/forum')}
                  className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group"
                >
                  Форумы
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Icon name="Bell" size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="relative p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Icon name="Mail" size={20} />
              </button>
              <div
                className="relative"
                onMouseEnter={() => setHoveredProfile(true)}
                onMouseLeave={() => setHoveredProfile(false)}
              >
                <button className="flex items-center gap-2 p-1 hover:bg-white/10 rounded-lg transition-colors">
                  <img src={currentUser.avatar} alt="Avatar" className="w-8 h-8 rounded-full" />
                  <span className="text-sm font-medium">{currentUser.username}</span>
                  <Icon name="ChevronDown" size={16} />
                </button>
                {hoveredProfile && (
                  <div
                    className="absolute top-full right-0 mt-2 w-56 bg-card border border-white/10 rounded-lg shadow-lg overflow-hidden"
                    onMouseEnter={() => setHoveredProfile(true)}
                    onMouseLeave={() => setHoveredProfile(false)}
                  >
                    <button
                      onClick={() => navigate('/profile')}
                      className="w-full text-left px-4 py-3 hover:bg-primary/10 transition-colors text-sm"
                    >
                      Профиль
                    </button>
                    <a href="#" className="block px-4 py-3 hover:bg-primary/10 transition-colors text-sm">
                      Настройки
                    </a>
                    <a href="#" className="block px-4 py-3 hover:bg-primary/10 transition-colors text-sm">
                      Отслеживаемый контент
                    </a>
                    <a href="#" className="block px-4 py-3 hover:bg-primary/10 transition-colors text-sm">
                      Настройки профиля
                    </a>
                    <button className="w-full text-left px-4 py-3 hover:bg-primary/10 transition-colors text-sm border-t border-white/10">
                      Выйти
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section className="relative">
          <div className="h-48 overflow-hidden relative group">
            <img 
              src={bannerFile ? URL.createObjectURL(bannerFile) : profileUser.banner} 
              alt="Banner" 
              className="w-full h-full object-cover"
            />
            {isOwnProfile && (
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <label htmlFor="banner-upload" className="cursor-pointer">
                  <Button size="sm" className="gradient-blue" asChild>
                    <span>
                      <Icon name="Upload" size={16} className="mr-2" />
                      Изменить баннер
                    </span>
                  </Button>
                </label>
                <Input
                  id="banner-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleBannerChange}
                  className="hidden"
                />
              </div>
            )}
          </div>
          
          <div className="container mx-auto px-4 -mt-16 relative z-10">
            <div className="flex items-end gap-4">
              <img 
                src={profileUser.avatar} 
                alt={profileUser.username} 
                className="w-32 h-32 rounded-lg border-4 border-background"
              />
              <div className="flex-1 pb-4">
                <h1 className="text-3xl font-bold">{profileUser.username}</h1>
                <p className="text-muted-foreground">Категория</p>
              </div>
              {!isOwnProfile && (
                <Button 
                  onClick={handleSubscribe}
                  variant={isSubscribed ? "outline" : "default"}
                  className={isSubscribed ? "" : "gradient-blue"}
                >
                  <Icon name={isSubscribed ? "UserCheck" : "UserPlus"} size={16} className="mr-2" />
                  {isSubscribed ? 'Отписаться' : 'Подписаться'}
                </Button>
              )}
            </div>
          </div>
        </section>

        <section className="py-8 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="space-y-6">
                <Card className="glass-effect border-white/10 p-6">
                  <h3 className="font-bold mb-4">Репутация</h3>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">0</div>
                    <p className="text-sm text-muted-foreground">Нейтральная</p>
                  </div>
                </Card>

                <Card className="glass-effect border-white/10 p-6">
                  <h3 className="font-bold mb-4">Подписчики</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Подписчиков нет</span>
                  </div>
                </Card>

                <Card className="glass-effect border-white/10 p-6">
                  <h3 className="font-bold mb-4">Персональные данные</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Имя</span>
                      <span>Nikita</span>
                    </div>
                  </div>
                </Card>

                <Card className="glass-effect border-white/10 p-6">
                  <h3 className="font-bold mb-4">Сообщество</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Уровень (US)</span>
                      <span className="text-primary">0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">XP (US)</span>
                      <span>0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Спонсор</span>
                      <span>Нет</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Звание LEO (US)</span>
                      <span>Отсутствует</span>
                    </div>
                  </div>
                </Card>

                <Card className="glass-effect border-white/10 p-6">
                  <h3 className="font-bold mb-4">Посетители профиля</h3>
                  <div className="space-y-3">
                    {profileUser.visitors.map((visitor) => (
                      <div key={visitor.id} className="flex items-center gap-3">
                        <img src={visitor.avatar} alt={visitor.name} className="w-8 h-8 rounded-full" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{visitor.name}</p>
                          <p className="text-xs text-muted-foreground">{visitor.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <div className="lg:col-span-3">
                <Card className="glass-effect border-white/10 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">Активность</h2>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-4 bg-card/50 rounded-lg">
                      <div className="text-2xl font-bold">{profileUser.posts}</div>
                      <p className="text-sm text-muted-foreground">Публикаций</p>
                    </div>
                    <div className="text-center p-4 bg-card/50 rounded-lg">
                      <div className="text-sm font-medium">{profileUser.registrationDate}</div>
                      <p className="text-sm text-muted-foreground">Зарегистрирован</p>
                    </div>
                    <div className="text-center p-4 bg-card/50 rounded-lg">
                      <div className="text-sm font-medium">{profileUser.lastSeen}</div>
                      <p className="text-sm text-muted-foreground">Последний раз</p>
                    </div>
                  </div>
                  
                  <div className="text-center py-12">
                    <Icon name="FileText" size={48} className="mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground">Нет активности для отображения</p>
                  </div>
                </Card>
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
    </div>
  );
};

export default UserProfile;
