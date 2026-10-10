# motion-lab — эксперименты с моушен-графикой

Стек: Remotion 4 (React) + Blender 5.2 через Blender MCP. Превью: `npm run dev` (Remotion Studio).

## Формат по умолчанию
- 1080x1920, 30 fps, длительность считаем в кадрах (секунды × 30)
- Другие площадки: YouTube 1920x1080, лента Instagram 1080x1350

## Стиль
- Палитра: #0B0B0F (фон), #F5F5F0 (текст), акцент #FF5A1F
- Шрифт: Inter через @remotion/google-fonts
- Входы — spring(); переходы — interpolate с Easing.bezier(0.16, 1, 0.3, 1)
- Stagger 2–4 кадра, держать финальный кадр (hold) не меньше 1 с

## Правила кода
- Всё движение — только от useCurrentFrame(). Никаких CSS-анимаций, transition и Math.random() (для случайности — random(seed) из remotion)
- Каждая сцена — отдельный компонент в src/scenes/, сборка и тайминг через <Sequence> / @remotion/transitions
- Тексты, цвета, длительности — в props композиции (zod-схема), чтобы шаблон можно было тиражировать
- Медиа из public/ подключать через staticFile()
- Работать по одной сцене за раз, остальные — заглушки
- После правок: `npx tsc --noEmit`; для визуальной проверки — `npx remotion still <Comp> out/check.png --frame=<N>` и посмотреть картинку

## 3D (Blender)
- Blender MCP описан в .mcp.json. Перед сессией: Blender → N-панель → BlenderMCP → Start (порт 9876), сцену сохранить
- Рендер из Blender: PNG-секвенция с альфой в public/blender/<имя>/, затем вставка в Remotion

## Рендер
- MP4: `npx remotion render <Comp> out/<name>.mp4`
- С альфой: `--codec=prores --prores-profile=4444` (.mov)
- Результаты рендера — в out/ (в git не попадают)

## Сеть (важно)
- Домены remotion.dev и remotion.media из этой сети недоступны (таймаут). npm, GitHub, PyPI и Google Storage работают
- Поэтому рендер идёт через стоковый Chrome Headless Shell от Google: путь прописан в remotion.config.ts (~/.remotion-browser/)
- Скилл remotion-docs и прямые ссылки на remotion.dev могут не открываться — опирайся на скиллы в .claude/skills и типы в node_modules

## Структура
- src/ios/ — переиспользуемый iOS-кит (экран 393×852 pt): Phone, Stack (push-навигация), Keyboard, components (Row, Group, Toggle, Tap, FieldRow, Swap…), icons
- UI внутри телефона — системный шрифт (SF Pro на macOS); подписи вокруг — Inter
- src/family/ — ролик FamilySetup: timeline.ts (все моменты в кадрах + подписи), Captions, FamilySetup
- src/scenes/family/ — экраны ролика; время событий берут из T в timeline.ts, а не из локальных кадров
- Чтобы сдвинуть тайминг — правь только timeline.ts
