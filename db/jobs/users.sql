create table users
(
    id         int auto_increment
        primary key,
    username   varchar(50)                        not null,
    password   varchar(255)                       not null,
    email      varchar(50)                        not null,
    first_name varchar(50)                        not null,
    last_name  varchar(50)                        not null,
    created    datetime default CURRENT_TIMESTAMP not null,
    modified   date                               null
)
    collate = utf8mb3_unicode_ci;

