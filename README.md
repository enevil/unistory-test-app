# Unistory Test App

_[Ссылка](https://velvety-hummingbird-0dbf04.netlify.app/) на приложение_

## Архитектура приложения

-   сomponents/ (Компоненты и UI-библиотека)
-   index.js (Корневой файл с вызовом рендера и доп компонентами-оболочками)
-   index.css (Глобальные стили)
-   MainLayout (Базовый контейнер (Outlet) для роутера)
-   Router (Роутер)
-   Storage (Компонент и хранилище с данными и базовыми CRUD операциями)

## Дополнительные библиотеки

-   react-router-dom (Для базового роутинга)
-   classnames (Более удобная работа с классами)

## Роутинг приложения

-   "/" (Блог с карточками постов)
-   "/add" (Добавить пост)
-   "/:postId" (Просмотр/изменение конкретного поста)

## Скриншоты
![screenshot_blog](https://user-images.githubusercontent.com/91529586/163883838-bb47937f-776b-47b2-b3bb-22191fb4aa72.png)
![screenshot_post](https://user-images.githubusercontent.com/91529586/163883853-c34816d1-77f6-4505-af3f-908c0902aecb.png)


