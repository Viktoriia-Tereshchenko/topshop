# 📡 API Документация

## Обзор

TopShop использует внешний API для получения данных о товарах, категориях и пользователях.

## Базовый URL

```
https://api.escuelajs.co/api/v1
```

## Эндпоинты

### Товары (Products)

#### Получить все товары
```
GET /products
```

**Параметры:**
- `limit` (number) - количество товаров на странице
- `offset` (number) - смещение для пагинации
- `title` (string) - поиск по названию

**Пример ответа:**
```json
[
  {
    "id": 1,
    "title": "Product Name",
    "price": 100,
    "description": "Product description",
    "category": {
      "id": 1,
      "name": "Category Name",
      "image": "https://example.com/image.jpg"
    },
    "images": ["https://example.com/image1.jpg"]
  }
]
```

#### Получить товар по ID
```
GET /products/{id}
```

#### Создать новый товар
```
POST /products
```

**Тело запроса:**
```json
{
  "title": "New Product",
  "price": 100,
  "description": "Product description",
  "categoryId": 1,
  "images": ["https://example.com/image.jpg"]
}
```

#### Обновить товар
```
PUT /products/{id}
```

#### Удалить товар
```
DELETE /products/{id}
```

### Категории (Categories)

#### Получить все категории
```
GET /categories
```

#### Получить категорию по ID
```
GET /categories/{id}
```

#### Создать новую категорию
```
POST /categories
```

**Тело запроса:**
```json
{
  "name": "Category Name",
  "image": "https://example.com/image.jpg"
}
```

### Пользователи (Users)

#### Получить всех пользователей
```
GET /users
```

#### Получить пользователя по ID
```
GET /users/{id}
```

#### Создать нового пользователя
```
POST /users
```

**Тело запроса:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "avatar": "https://example.com/avatar.jpg"
}
```

## Обработка ошибок

API возвращает стандартные HTTP коды состояния:

- `200` - Успешный запрос
- `201` - Ресурс создан
- `400` - Неверный запрос
- `401` - Не авторизован
- `404` - Ресурс не найден
- `500` - Внутренняя ошибка сервера

## Примеры использования в коде

### Получение товаров с фильтрацией

```typescript
const fetchProducts = async (categoryId?: number, searchTerm?: string) => {
  let url = 'https://api.escuelajs.co/api/v1/products';
  const params = new URLSearchParams();
  
  if (categoryId) {
    params.append('categoryId', categoryId.toString());
  }
  
  if (searchTerm) {
    params.append('title', searchTerm);
  }
  
  if (params.toString()) {
    url += `?${params.toString()}`;
  }
  
  const response = await fetch(url);
  return response.json();
};
```

### Создание нового товара

```typescript
const createProduct = async (productData: {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}) => {
  const response = await fetch('https://api.escuelajs.co/api/v1/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  });
  
  if (!response.ok) {
    throw new Error('Failed to create product');
  }
  
  return response.json();
};
```

## Ограничения API

- **Rate Limiting**: API имеет ограничения на количество запросов
- **CORS**: API поддерживает CORS для веб-приложений
- **Аутентификация**: Некоторые эндпоинты могут требовать аутентификации

## Рекомендации по использованию

1. **Кэширование**: Кэшируйте часто запрашиваемые данные
2. **Обработка ошибок**: Всегда обрабатывайте ошибки API
3. **Loading состояния**: Показывайте индикаторы загрузки
4. **Пагинация**: Используйте пагинацию для больших списков
5. **Валидация**: Валидируйте данные перед отправкой 