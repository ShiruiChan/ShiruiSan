# ShiruiSan – Next.js scaffold

## Запуск
1. npm i
2. npm run dev

## Куда класть код
- Страницы: `app/**/page.tsx`
- Компоненты: `app/(site)/components/*`
- Публичные файлы: `public/*`
- API: `app/api/**/route.ts`

## Tailwind
Стили в `app/globals.css`. Контент-скан настроен.


## Маршруты
- Корень `/` редиректит на `/ru`
- Одна страница рендерится в `app/[lang]/page.tsx`
