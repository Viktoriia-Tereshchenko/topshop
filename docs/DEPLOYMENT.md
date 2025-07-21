# 🚀 Руководство по развертыванию

## Обзор

Этот документ описывает процесс развертывания приложения TopShop на различных платформах.

## Предварительные требования

### Локальная разработка
- Node.js 18+
- npm или yarn
- Git

### Продакшен
- Современный веб-сервер (Nginx, Apache)
- SSL сертификат
- Домен (опционально)

## Локальная разработка

### 1. Клонирование репозитория
```bash
git clone https://github.com/Viktoriia-Tereshchenko/topshop.git
cd topshop
```

### 2. Установка зависимостей
```bash
npm install
```

### 3. Запуск в режиме разработки
```bash
npm run dev
```

Приложение будет доступно по адресу: `http://localhost:5173`

### 4. Сборка для продакшена
```bash
npm run build
```

Собранные файлы будут в папке `dist/`

## Развертывание на Vercel

### 1. Подготовка
Убедитесь, что у вас есть аккаунт на [Vercel](https://vercel.com)

### 2. Подключение репозитория
1. Войдите в Vercel Dashboard
2. Нажмите "New Project"
3. Подключите ваш GitHub репозиторий
4. Выберите репозиторий `topshop`

### 3. Настройка проекта
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 4. Переменные окружения (если нужны)
```env
VITE_API_URL=https://api.escuelajs.co/api/v1
```

### 5. Деплой
Нажмите "Deploy" и дождитесь завершения сборки.

## Развертывание на Netlify

### 1. Подготовка
Создайте аккаунт на [Netlify](https://netlify.com)

### 2. Подключение репозитория
1. Войдите в Netlify Dashboard
2. Нажмите "New site from Git"
3. Подключите GitHub и выберите репозиторий

### 3. Настройка сборки
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Base directory**: (оставьте пустым)

### 4. Деплой
Нажмите "Deploy site"

## Развертывание на GitHub Pages

### 1. Подготовка
Убедитесь, что у вас есть права на push в репозиторий.

### 2. Настройка GitHub Actions
Создайте файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### 3. Настройка GitHub Pages
1. Перейдите в Settings репозитория
2. Найдите раздел "Pages"
3. В "Source" выберите "GitHub Actions"

### 4. Деплой
При каждом push в main ветку будет автоматический деплой.

## Развертывание на собственном сервере

### 1. Подготовка сервера
```bash
# Установка Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Установка Nginx
sudo apt-get install nginx
```

### 2. Клонирование и сборка
```bash
git clone https://github.com/Viktoriia-Tereshchenko/topshop.git
cd topshop
npm install
npm run build
```

### 3. Настройка Nginx
Создайте конфигурацию `/etc/nginx/sites-available/topshop`:

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/topshop/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Кэширование статических файлов
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### 4. Активация сайта
```bash
sudo ln -s /etc/nginx/sites-available/topshop /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 5. Настройка SSL (Let's Encrypt)
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## Переменные окружения

### Локальная разработка
Создайте файл `.env.local`:

```env
VITE_API_URL=https://api.escuelajs.co/api/v1
VITE_APP_TITLE=TopShop
```

### Продакшен
Настройте переменные в вашей платформе деплоя:

```env
VITE_API_URL=https://api.escuelajs.co/api/v1
VITE_APP_TITLE=TopShop
NODE_ENV=production
```

## Мониторинг и аналитика

### 1. Google Analytics
Добавьте в `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. Мониторинг ошибок
Добавьте Sentry или аналогичный сервис:

```typescript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: process.env.NODE_ENV,
});
```

## Оптимизация производительности

### 1. Сжатие файлов
```bash
npm install --save-dev compression-webpack-plugin
```

### 2. Кэширование
Настройте заголовки кэширования в Nginx:

```nginx
location ~* \.(js|css)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

location ~* \.(png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### 3. CDN
Используйте CDN для статических файлов (Cloudflare, AWS CloudFront).

## Безопасность

### 1. HTTPS
Всегда используйте HTTPS в продакшене.

### 2. Заголовки безопасности
Добавьте в Nginx:

```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
```

### 3. CSP (Content Security Policy)
Настройте CSP в `index.html`:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';">
```

## Troubleshooting

### Проблемы с CORS
Если возникают проблемы с CORS, убедитесь что API поддерживает ваш домен.

### Проблемы с роутингом
Для SPA приложений настройте fallback на `index.html`:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### Проблемы с производительностью
1. Проверьте размер бандла: `npm run build -- --analyze`
2. Оптимизируйте изображения
3. Используйте lazy loading для компонентов

## Автоматизация деплоя

### GitHub Actions для автоматического деплоя
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
    - run: npm ci
    - run: npm run build
    - name: Deploy to server
      uses: appleboy/ssh-action@v0.1.5
      with:
        host: ${{ secrets.HOST }}
        username: ${{ secrets.USERNAME }}
        key: ${{ secrets.KEY }}
        script: |
          cd /var/www/topshop
          git pull origin main
          npm install
          npm run build
          sudo systemctl reload nginx
```