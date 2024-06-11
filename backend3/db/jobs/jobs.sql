create table jobs
(
    id               int auto_increment
        primary key,
    name             varchar(255)                       null,
    company_name     varchar(255)                       null,
    company_location varchar(255)                       null,
    salary           varchar(255)                       null,
    description      varchar(255)                       null,
    url              varchar(255)                       null,
    created          datetime default CURRENT_TIMESTAMP null,
    modified         datetime                           null,
    constraint url
        unique (url)
);

