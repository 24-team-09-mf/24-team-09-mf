CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL default NOW(),
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL default NOW()
);

CREATE TABLE users (
    id SERIAL,
    user_id INTEGER PRIMARY KEY,
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
    FOREIGN KEY (parent_id) REFERENCES categories (id) ON DELETE CASCADE
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    message TEXT NOT NULL,
    parent_id INTEGER,
    user_id INTEGER,
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL default NOW(),
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL default NOW(),
    FOREIGN KEY (parent_id) REFERENCES topics (id) ON DELETE CASCADE
);

INSERT INTO categories (title, description) VALUES ('Сообщество 1', 'Обсуждение игры'), ('Поддержка', 'Возникли затруднения с установкой игры, игровым процессом или учетной записью? Приглашаем на форум службы поддержки.');
INSERT INTO users (user_id, login, avatar) VALUES (532132, 'test 0001', 'https://ya-praktikum.tech/api/v2/resources/e1092287-ff24-410f-965d-0bf50bd35955/56c760b9-598e-42ad-acc8-d02afed05c21_61492-derevo_minimalizm_vodoem_holm.jpg'), (532135, 'test 0002', null);
INSERT INTO topics (title, parent_id, user_id) VALUES ('Предложения по улучшению игры', 1, 1), ('Тема 222', 1, 2), ('Нужна помощь !!!', 2, 1);
INSERT INTO posts (message, parent_id, user_id) VALUES ('Оставляйте свои предложения и вопросы', 1, 1), ('Текст для темы 2', 2, 2), ('Ничего не работает !!!', 3, 1);
