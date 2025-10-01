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
                    <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-white/10 rounded-lg shadow-lg overflow-hidden">
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
                          <div className="absolute left-full top-0 ml-1 w-56 bg-card border border-white/10 rounded-lg shadow-lg overflow-hidden">
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
                    <div className="absolute top-full left-0 mt-2 w-72 bg-card border border-white/10 rounded-lg shadow-lg overflow-hidden">
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
            <div className="flex items-center gap-4">
              <Button size="sm" className="gradient-blue" onClick={() => navigate('/')}>
                ⚡ Начать играть
              </Button>
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