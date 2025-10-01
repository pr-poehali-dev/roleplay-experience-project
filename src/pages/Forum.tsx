import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

interface ForumTopic {
  id: number;
  title: string;
  posts: number;
  link: string;
}

interface ForumCategory {
  id: number;
  name: string;
  description: string;
  topics: ForumTopic[];
}

const Forum = () => {
  const navigate = useNavigate();
  const [hoveredCommunity, setHoveredCommunity] = useState(false);
  const [hoveredDepartments, setHoveredDepartments] = useState(false);
  const [hoveredFiles, setHoveredFiles] = useState(false);
  const [hoveredProfile, setHoveredProfile] = useState(false);

  const currentUser = {
    username: 'Nikita C.',
    rank: '#427',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop'
  };

  const onlineUsers = [
    { id: 1, name: 'Nikita C.', rank: '#422' },
    { id: 2, name: 'Emil G.', rank: '#755' },
    { id: 3, name: 'Ardon I.', rank: '#31' },
    { id: 4, name: 'Derek K.', rank: '#88' },
    { id: 5, name: 'Yaroslav T.', rank: '#508' },
    { id: 6, name: 'Andrey K.', rank: '#49' },
    { id: 7, name: 'Aleksandr T.', rank: '#862' },
    { id: 8, name: 'Andrey K.', rank: '#252' },
    { id: 9, name: 'Andrey K.', rank: '#253' },
    { id: 10, name: 'Nikita T.', rank: '#912' },
    { id: 11, name: 'Kirill B.', rank: '#425' },
    { id: 12, name: 'Maksim E.', rank: '#849' },
    { id: 13, name: 'Artem C.', rank: '#10' },
    { id: 14, name: 'Adam I.', rank: '#9' },
    { id: 15, name: 'Kamikot', rank: '' }
  ];

  const categories: ForumCategory[] = [
    {
      id: 1,
      name: 'code6',
      description: 'Основные обсуждения и информация о проекте',
      topics: [
        { id: 1, title: 'Начать играть', posts: 39, link: '/forum/start' },
        { id: 2, title: 'Правила сообщества', posts: 40, link: '/forum/rules' }
      ]
    },
    {
      id: 2,
      name: 'Открытый форум',
      description: 'Предложения форума',
      topics: [
        { id: 3, title: 'Обсуждение кандидатов в сообществе и участников сообществ', posts: 372, link: '/forum/discussions' }
      ]
    }
  ];

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
                <div
                  className="relative"
                  onMouseEnter={() => setHoveredCommunity(true)}
                  onMouseLeave={() => setHoveredCommunity(false)}
                >
                  <button className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group">
                    Сообщество
                    <Icon name="ChevronDown" size={16} className="inline ml-1" />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                  </button>
                  {hoveredCommunity && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-56 bg-card border border-white/10 rounded-lg shadow-lg overflow-hidden"
                      onMouseEnter={() => setHoveredCommunity(true)}
                      onMouseLeave={() => setHoveredCommunity(false)}
                    >
                      <a href="#" className="block px-4 py-3 hover:bg-primary/10 transition-colors text-sm">
                        База знаний
                      </a>
                      <a href="#" className="block px-4 py-3 hover:bg-primary/10 transition-colors text-sm">
                        Часто задаваемые вопросы (FAQ)
                      </a>
                      <a href="#" className="block px-4 py-3 hover:bg-primary/10 transition-colors text-sm">
                        Правила и требования
                      </a>
                      <div
                        className="relative"
                        onMouseEnter={() => setHoveredFiles(true)}
                        onMouseLeave={() => setHoveredFiles(false)}
                      >
                        <a href="#" className="block px-4 py-3 hover:bg-primary/10 transition-colors text-sm flex items-center justify-between">
                          Файлы
                          <Icon name="ChevronRight" size={16} />
                        </a>
                        {hoveredFiles && (
                          <div 
                            className="absolute left-full top-0 ml-1 w-56 bg-card border border-white/10 rounded-lg shadow-lg overflow-hidden"
                            onMouseEnter={() => setHoveredFiles(true)}
                            onMouseLeave={() => setHoveredFiles(false)}
                          >
                            <a href="#" className="block px-4 py-3 hover:bg-primary/10 transition-colors text-sm">
                              Графические модификации
                            </a>
                            <a href="#" className="block px-4 py-3 hover:bg-primary/10 transition-colors text-sm">
                              Звуковые модификации
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className="relative"
                  onMouseEnter={() => setHoveredDepartments(true)}
                  onMouseLeave={() => setHoveredDepartments(false)}
                >
                  <button className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group">
                    Департаменты
                    <Icon name="ChevronDown" size={16} className="inline ml-1" />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                  </button>
                  {hoveredDepartments && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-72 bg-card border border-white/10 rounded-lg shadow-lg overflow-hidden"
                      onMouseEnter={() => setHoveredDepartments(true)}
                      onMouseLeave={() => setHoveredDepartments(false)}
                    >
                      <a href="#" className="block px-4 py-3 hover:bg-primary/10 transition-colors text-sm">
                        Дорожный Патруль Сан Андреас (SAHP)
                      </a>
                      <a href="#" className="block px-4 py-3 hover:bg-primary/10 transition-colors text-sm">
                        Полицейский Департамент Лос-Сантоса (LSPD)
                      </a>
                      <a href="#" className="block px-4 py-3 hover:bg-primary/10 transition-colors text-sm">
                        Офис Шерифа Блэйн Каунти (BCSO)
                      </a>
                      <a href="#" className="block px-4 py-3 hover:bg-primary/10 transition-colors text-sm">
                        Пожарный Департамент Лос-Сантоса (LSCFD)
                      </a>
                      <a href="#" className="block px-4 py-3 hover:bg-primary/10 transition-colors text-sm">
                        Диспетчерский Департамент (DD)
                      </a>
                      <a href="#" className="block px-4 py-3 hover:bg-primary/10 transition-colors text-sm">
                        Гражданский Департамент (CIV)
                      </a>
                      <a href="#" className="block px-4 py-3 hover:bg-primary/10 transition-colors text-sm">
                        Департамент Национальной Безопасности (DHS)
                      </a>
                    </div>
                  )}
                </div>
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
        <section className="relative py-16 px-4 overflow-hidden min-h-[300px]">
          <iframe
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            src="https://www.youtube.com/embed/EBP4GjKgXzk?autoplay=1&mute=1&loop=1&playlist=EBP4GjKgXzk&controls=0&showinfo=0&rel=0&modestbranding=1"
            allow="autoplay; encrypted-media"
            style={{ pointerEvents: 'none' }}
            title="Background video"
          />
          <div className="absolute inset-0 bg-black/60" />
        </section>

        <section className="py-8 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <a href="/" className="hover:text-foreground transition-colors">Главная</a>
                <Icon name="ChevronRight" size={14} />
                <span>Форумы</span>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm">
                  <Icon name="Bell" size={16} className="mr-2" />
                  Непрочитанное
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Star" size={16} className="mr-2" />
                  Отметить сайт прочитанным
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Галереи сообщества</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                  {[
                    { title: 'Crime Scene [2]', author: 'Andrey K. #32', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400' },
                    { title: 'Police Chase', author: 'Andrey K. #32', image: 'https://images.unsplash.com/photo-1593766787879-e8c78e09cec5?w=400' },
                    { title: 'Sergeant Nolan on Briefing', author: 'Andrey K. #32', image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=400' },
                    { title: 'Street ART', author: 'Aless B. #97', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400' },
                    { title: 'Stare into the soul', author: 'Ivan Z. #22', image: 'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?w=400' },
                    { title: 'Ночная смена стримера', author: 'Aless B. #97', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400' }
                  ].map((item, index) => (
                    <Card key={index} className="glass-effect border-white/10 overflow-hidden group cursor-pointer hover:border-primary/50 transition-all">
                      <div className="aspect-video overflow-hidden">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="p-3">
                        <h4 className="text-sm font-bold mb-1 truncate">{item.title}</h4>
                        <p className="text-xs text-muted-foreground truncate">{item.author}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Форумы</h2>
                <div className="space-y-4">
                  {categories.map((category) => (
                    <Card key={category.id} className="glass-effect border-white/10 p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <Icon name="MessageSquare" size={24} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                          <p className="text-sm text-muted-foreground">{category.description}</p>
                        </div>
                      </div>
                      <div className="space-y-2 ml-16">
                        {category.topics.map((topic) => (
                          <a
                            key={topic.id}
                            href={topic.link}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                          >
                            <div className="flex items-center gap-3">
                              <Icon name="ChevronRight" size={16} className="text-primary" />
                              <span className="text-sm font-medium group-hover:text-primary transition-colors">
                                {topic.title}
                              </span>
                            </div>
                            <span className="text-xs text-muted-foreground">
                              ({topic.posts} сообщений по этой ссылке)
                            </span>
                          </a>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <Card className="glass-effect border-white/10 p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold mb-2">Кто в онлайне</h3>
                      <p className="text-sm text-muted-foreground">
                        15 пользователей, 0 анонимных, 13 гостей
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Icon name="Users" size={16} className="mr-2" />
                      Посмотреть всех
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {onlineUsers.map((user) => (
                      <a
                        key={user.id}
                        href="#"
                        className="text-sm text-primary hover:underline"
                      >
                        {user.name} {user.rank}
                      </a>
                    ))}
                  </div>
                </div>
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

export default Forum;