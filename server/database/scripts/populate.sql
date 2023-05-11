insert into genre(description)
values ('Action'),
	   ('Drama'),
	   ('Comedy'),
	   ('Adventure'),
	   ('Romance'),
	   ('Documentary'),
	   ('Crime'),
	   ('Thriller'),
	   ('Animation'),
	   ('Sci-Fi'),
	   ('Horror');

insert into production_company(prod_name)
values('Universal Pictures'),
	('Warner Bros.'),
      ('Walt Disney Studios'),
      ('Columbia Pictures'),
      ('Paramount Pictures'),
      ('20th Century Studios'),
      ('Metro-Goldwayn-Mayer');
      
insert into director(first_name,last_name)
values('Cashel','Colaizzi'),
      ('Kaseem','Slomkowski'),
      ('Mordecai','Sokoloff'),
      ('Harwood','Dopazo'),
      ('Curry','Crosser'),
      ('Devaughn','Tures'),
      ('Adon','Armbrust'),
      ('Hakeem','Britain'),
      ('Jaycee','Mccants'),
      ('Jeovany','Gerosa');
      
insert into actor(first_name,last_name,date_of_birth)
values('Sihle','Zwane','1987-03-12'),
	  ('Bonga','Zulu','1990-08-19'),
	  ('Ntokozo','Mbambo','1954-07-14'),
	  ('Mpume','Shazi','1973-06-09'),
	  ('Naomi','Becker','1935-09-13'),
        ('James', 'Matthew', '1976-03-12'),
	  ('John', 'William', '1976-08-26'),
	  ('Sello', 'Mbatha', '1981-05-25'),
	  ('Frank', 'Muller', '1983-02-12'),
	  ('Zuma', 'Reece', '1969-12-10');

insert into movie(movie_name, movie_summary,release_date,genre_id,prod_id)
values('John Wick', 'A man fighting for his dog', '2023-05-10', 1, 1),
	('', '', '', , ),
      ('', '', '', , ),
      ('', '', '', , ),
      ('', '', '', , ),
      ('', '', '', , ),
      ('', '', '', , ),
      ('', '', '', , ),
      ('', '', '', , ),
      ('', '', '', , ),
      ('', '', '', , ),
      ('', '', '', , );

insert into movie_actor(actor_id, movie_id)
values( , ),
	( , ),
      ( , ),
      ( , ),
      ( , ),
      ( , ),
      ( , ),
      ( , ),
      ( , ),
      ( , );
      
insert into movie_director(director_id, movie_id)
values( , ),
	( , ),
      ( , ),
      ( , ),
      ( , ),
      ( , ),
      ( , ),
      ( , ),
      ( , ),
      ( , );
      
      


      
      
      
      
      
      
      
      
      