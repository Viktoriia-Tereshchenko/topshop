# 🤝 Руководство по участию в разработке

## Добро пожаловать!

Спасибо за интерес к проекту TopShop! Мы рады вашему участию в разработке.

## Как начать

### 1. Форкните репозиторий
1. Перейдите на [GitHub репозиторий](https://github.com/Viktoriia-Tereshchenko/topshop)
2. Нажмите кнопку "Fork" в правом верхнем углу
3. Склонируйте ваш форк локально

```bash
git clone https://github.com/YOUR_USERNAME/topshop.git
cd topshop
```

### 2. Настройте окружение разработки
```bash
# Установите зависимости
npm install

# Запустите в режиме разработки
npm run dev
```

### 3. Создайте ветку для ваших изменений
```bash
git checkout -b feature/your-feature-name
```

## Стандарты кода

### TypeScript
- Используйте строгую типизацию
- Избегайте `any` типа
- Документируйте интерфейсы и типы

```typescript
// ✅ Хорошо
interface User {
  id: number;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

// ❌ Плохо
const user: any = { id: 1, name: 'John' };
```

### React компоненты
- Используйте функциональные компоненты с хуками
- Разделяйте логику и представление
- Используйте TypeScript для props

```typescript
// ✅ Хорошо
interface UserCardProps {
  user: User;
  onEdit?: (user: User) => void;
}

export const UserCard: React.FC<UserCardProps> = ({ user, onEdit }) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
};
```

### Стилизация
- Используйте Tailwind CSS классы
- Следуйте дизайн-системе проекта
- Обеспечивайте адаптивность

```tsx
// ✅ Хорошо
<div className="bg-gray-900 text-gray-100 p-4 rounded-lg hover:bg-gray-800 transition-colors">
  Content
</div>
```

### Именование
- **Файлы**: PascalCase для компонентов, camelCase для утилит
- **Компоненты**: PascalCase
- **Функции**: camelCase
- **Константы**: UPPER_SNAKE_CASE

```
src/
├── components/
│   ├── UserCard/          # PascalCase для папок компонентов
│   │   └── UserCard.tsx   # PascalCase для файлов компонентов
├── utils/
│   └── formatDate.ts      # camelCase для утилит
└── constants/
    └── routes.ts          # camelCase для констант
```

## Структура коммитов

Используйте [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Типы коммитов
- `feat:` - новая функция
- `fix:` - исправление бага
- `docs:` - изменения в документации
- `style:` - форматирование кода
- `refactor:` - рефакторинг
- `test:` - добавление тестов
- `chore:` - обновления зависимостей

### Примеры
```bash
feat: add user profile page
fix: resolve navigation issue on mobile
docs: update API documentation
style: format code with prettier
refactor: extract user validation logic
test: add unit tests for UserCard component
chore: update dependencies to latest versions
```

## Процесс разработки

### 1. Планирование
- Создайте Issue для описания задачи
- Обсудите подход с командой
- Убедитесь, что задача понятна

### 2. Разработка
- Следуйте стандартам кода
- Пишите тесты для новой функциональности
- Обновляйте документацию при необходимости

### 3. Тестирование
```bash
# Запуск линтера
npm run lint

# Проверка типов TypeScript
npm run type-check

# Запуск тестов (если есть)
npm test
```

### 4. Создание Pull Request
1. Убедитесь, что все тесты проходят
2. Обновите документацию
3. Создайте Pull Request с описанием изменений

### Шаблон Pull Request
```markdown
## Описание
Краткое описание изменений

## Тип изменений
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Что изменилось
- Добавлена новая функция X
- Исправлен баг Y
- Обновлена документация Z

## Тестирование
- [ ] Локально протестировано
- [ ] Добавлены тесты
- [ ] Все тесты проходят

## Скриншоты (если применимо)
Добавьте скриншоты для UI изменений

## Чек-лист
- [ ] Код следует стандартам проекта
- [ ] Добавлены комментарии к сложной логике
- [ ] Обновлена документация
- [ ] Изменения не ломают существующую функциональность
```

## Отладка и разработка

### Полезные команды
```bash
# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Предварительный просмотр сборки
npm run preview

# Линтинг кода
npm run lint

# Исправление ошибок линтера
npm run lint -- --fix
```

### Отладка в браузере
- Используйте React Developer Tools
- Включите Source Maps в режиме разработки
- Используйте console.log для отладки

### Работа с API
- API база: `https://api.escuelajs.co/api/v1`
- Документация API: `docs/API.md`
- Обрабатывайте ошибки API корректно

## Архитектура проекта

### Структура папок
```
src/
├── components/     # Переиспользуемые компоненты
├── pages/         # Страницы приложения
├── hooks/         # Пользовательские хуки
├── context/       # React Context
├── utils/         # Утилитарные функции
├── types/         # TypeScript типы
├── constants/     # Константы
└── assets/        # Статические ресурсы
```

### Паттерны разработки
- **Container/Presentational**: Разделение логики и представления
- **Custom Hooks**: Вынесение логики в хуки
- **Context API**: Управление глобальным состоянием
- **TypeScript**: Строгая типизация

## Тестирование

### Рекомендации по тестированию
- Пишите unit тесты для утилитарных функций
- Тестируйте компоненты с различными props
- Используйте моки для API вызовов
- Покрывайте критическую функциональность

### Пример теста
```typescript
import { render, screen } from '@testing-library/react';
import { UserCard } from '../UserCard';

describe('UserCard', () => {
  it('renders user information correctly', () => {
    const user = {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com'
    };

    render(<UserCard user={user} />);
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });
});
```

## Документация

### Обновление документации
- Обновляйте README.md при добавлении новых функций
- Документируйте API изменения
- Добавляйте примеры использования

### Комментарии в коде
```typescript
/**
 * Создает новый товар в системе
 * @param productData - данные товара
 * @returns Promise с созданным товаром
 * @throws Error если запрос не удался
 */
const createProduct = async (productData: CreateProductData): Promise<Product> => {
  // Реализация
};
```

## Коммуникация

### Каналы связи
- **Issues**: Для багов и предложений
- **Discussions**: Для обсуждений
- **Pull Requests**: Для кода

### Правила общения
- Будьте вежливы и уважительны
- Используйте понятный язык
- Предоставляйте контекст для проблем
- Отвечайте на комментарии своевременно

## Лицензия

Участвуя в проекте, вы соглашаетесь с тем, что ваши вклады будут лицензированы под той же лицензией, что и проект.

## Благодарности

Спасибо всем участникам, которые помогают развивать TopShop! 🎉

---

Если у вас есть вопросы, не стесняйтесь создавать Issue или обращаться к команде разработки.