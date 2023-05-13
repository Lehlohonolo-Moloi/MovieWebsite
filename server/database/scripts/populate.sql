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
      ('Jeovany','Gerosa'),
      ('Frank', 'Darabont');
      
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
	  ('Zuma', 'Reece', '1969-12-10'),
        ('Morgan', 'Freeman', '1937-06-01'),
        ('Tim', 'Robins', '1958-10-16'),
        ('Bob', 'Gunton', '1945-11-15');

insert into movie(movie_name, movie_summary,release_date,genre_id,prod_id)
values('The Shawshan Redemption', 'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.', '2023-05-10', 2, 4), 
	('Angry Men', 'The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.', '1957-08-10', 7, 5), 
      ('Schindler List', 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.', '1993-02-21', 6, 4), 
      ('American History X', 'A former neo-nazi skinhead tries to prevent his younger brother from going down the same wrong path that he did.', '2019-07-20', 7, 6), 
      ('The Departed', 'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.', '2006-07-23', 8, 6), 
      ('Cinema Paradiso', 'A filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village and forms a deep friendship with the cinema projectionist.', '1988-02-17', 5, 7), 
      ('Memento', 'A man with short-term memory loss attempts to track down his wife murderer.', '2000-09-14', 8, 2), 
      ('Toy Story', 'A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy bedroom.', '1995-04-30', 9, 2), 
      ('Your Name', 'Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?', '2016-06-12', 9, 2), 
      ('Idiots', 'Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them idiots.', '2009-12-30', 3, 6), 
      ('High and Low', 'An executive of a Yokohama shoe company becomes a victim of extortion when his chauffeurs son is kidnapped by mistake and held for ransom.', '1963-08-19', 2, 5), 
      ('Come and See', 'After finding an old rifle, a young boy joins the Soviet resistance movement against ruthless German forces and experiences the horrors of World War II.', '1985-05-13', 2, 6); 

insert into movie_actor(actor_id, movie_id)
values( 11, 1),
	( 12, 1),
      ( 13, 1),
      ( 3, 2),
      ( 6, 2),
      ( 5, 2),
      ( 9, 3),
      ( 2, 3),
      ( 8, 3),
      ( 5, 4),
      ( 11, 4),
      ( 4, 4),
      ( 8, 5),
      ( 1, 5),
      ( 5, 6),
      ( 8, 6),
      ( 4, 6),
      ( 10, 7),
      ( 6, 7),
      ( 7, 8),
      ( 3, 8),
      ( 1, 8),
      ( 10, 9),
      ( 4, 9),
      ( 1, 9),
      ( 5, 10),
      ( 7, 10),
      ( 11, 11),
      ( 9, 11),
      ( 11, 12),
      ( 8, 12),
      ( 5, 12),
      ( 3, 12),
      ( 7, 12);
      
insert into movie_director(director_id, movie_id)
values( 11, 1),
	( 8, 2),
      ( 7, 3),
      ( 2, 4),
      ( 3, 5),
      ( 5, 6),
      ( 6, 7),
      ( 4, 8),
      ( 10, 9),
      ( 1, 10),
      ( 9, 11),
      ( 10, 12);
      
      


      
      
      
      
      
      
      
      
      