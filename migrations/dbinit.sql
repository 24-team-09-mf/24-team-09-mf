CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    posts_count INTEGER NOT NULL default 0,
    last_message INTEGER,
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL default NOW(),
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL default NOW()
);

CREATE TABLE topics (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    author INTEGER,
    "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL default NOW(),
    "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL default NOW(),
    parent_id INTEGER,
    CONSTRAINT parent_fk FOREIGN KEY (parent_id) REFERENCES categories (id)
);

INSERT INTO categories (name, description) VALUES ('Сообщество', 'Обсуждение игры'), ('Поддержка', 'Возникли затруднения с установкой игры, игровым процессом или учетной записью? Приглашаем на форум службы поддержки.');
INSERT INTO topics (name, parent_id) VALUES ('Тема 111', 1), ('Тема 222', 2);