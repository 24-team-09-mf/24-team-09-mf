CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL default NOW(),
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL default NOW()
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    login TEXT NOT NULL,
    avatar TEXT,
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL default NOW(),
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL default NOW()
);

CREATE TABLE topics (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    parent_id INTEGER,
    user_id INTEGER,
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL default NOW(),
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL default NOW(),
    FOREIGN KEY (parent_id) REFERENCES categories (id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    message TEXT NOT NULL,
    parent_id INTEGER,
    user_id INTEGER,
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL default NOW(),
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL default NOW(),
    FOREIGN KEY (parent_id) REFERENCES topics (id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE emojis (
    id SERIAL PRIMARY KEY,
    emoji_name VARCHAR(255) NOT NULL
);

CREATE TABLE post_emojis (
    id SERIAL PRIMARY KEY,
    post_id INTEGER,
    emoji_id INTEGER,
    user_id INTEGER,
    FOREIGN KEY (post_id) REFERENCES posts (id) ON DELETE CASCADE,
    FOREIGN KEY (emoji_id) REFERENCES emojis (id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE site_themes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL default NOW(),
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL default NOW()
);

CREATE TABLE themes (
    id SERIAL PRIMARY KEY,
    parent_id INTEGER,
    user_id INTEGER,
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL default NOW(),
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL default NOW(),
    FOREIGN KEY (parent_id) REFERENCES site_themes (id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

INSERT INTO categories (title, description) VALUES ('Сообщество 1', 'Обсуждение игры'), ('Поддержка', 'Возникли затруднения с установкой игры, игровым процессом или учетной записью? Приглашаем на форум службы поддержки.');
INSERT INTO users (user_id, login, avatar) VALUES (532132, 'test 0001', 'https://ya-praktikum.tech/api/v2/resources/e1092287-ff24-410f-965d-0bf50bd35955/56c760b9-598e-42ad-acc8-d02afed05c21_61492-derevo_minimalizm_vodoem_holm.jpg'), (532135, 'test 0002', null);
INSERT INTO topics (title, parent_id, user_id) VALUES ('Предложения по улучшению игры', 1, 1), ('Тема 222', 1, 2), ('Нужна помощь !!!', 2, 1);
INSERT INTO posts (message, parent_id, user_id) VALUES ('Оставляйте свои предложения и вопросы', 1, 1),('Текст для темы 2', 2, 2), ('Ничего не работает !!!', 3, 1);
INSERT INTO emojis (emoji_name) VALUES ('emojiCat.svg'), ('emojiPoop'), ('emojiRobot');
INSERT INTO post_emojis (post_id, emoji_id, user_id) VALUES (1, 1, 1), (2, 2, 1), (3, 3, 1);
INSERT INTO site_themes (title) VALUES ('dark'), ('light');
INSERT INTO themes (parent_id, user_id) VALUES (1, 1), (2, 2);