CREATE DATABASE tareas;

CREATE TABLE users(
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  mail VARCHAR(200) NOT NULL UNIQUE,
  password VARCHAR(200) NOT NULL
);

INSERT INTO users (name, mail, password) VALUES ('César Rolón', 'cesar@gmail.com', '$2a$10$uammG45cteOe6JhmrrLq/eLDQ3zKaANU9AdZFFOASNQdZZVkZV3cK');

CREATE TABLE tasks(
  id BIGSERIAL NOT NULL PRIMARY KEY,
  description TEXT NOT NULL,
  priority VARCHAR(100),
  author_id BIGINT REFERENCES users (id)
);

INSERT INTO tasks (description, priority, author_id) VALUES ('Tarea de Prueba 1', 'prioridad-baja', 1);
