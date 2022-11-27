INSERT INTO department (name)
VALUES ('Music'),
       ('Literature'),
       ('Science'),
       ('Art'),
       ('Math');

INSERT INTO roles (title, salary, department_id)
VALUES ('Teacher', 42000, 1),
       ('Teaching Assistant', 27000, 2),
       ('Band Director', 50000, 3),
       ('Professor', 70000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Taeyeon', 'Kim', 1, 1),
       ('Jessica', 'Jung', 2, 2),
       ('Sooyoung', 'Choi', 3, 3),
       ('Yuri', 'Kwon', 4, 4),
       ('Hyoyeon', 'Kim', 5, 5),
       ('Sunny', 'Lee', 6, 6),
       ('Yoona', 'Im', 7, 7),
       ('Juhyun', 'Seo', 8, 8),
       ('Tiffany', 'Young', 9, 9);