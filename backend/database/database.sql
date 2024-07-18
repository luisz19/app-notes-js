create table user(
	id integer primary key not null auto_increment,
    nome varchar(40),
    email varchar(40),
    senha varchar(40)
);

create table notes (
	id integer primary key not null auto_increment,
    user_id integer not null,
    titulo varchar(40),
    assunto text,
    foreign key(user_id) references user(id)
    
);