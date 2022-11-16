INSERT INTO Artist (firstName, lastName, country, age, pseudonym)
VALUES
    ('Samuel','Smith','UK',30,'Sam Smith'),
    ('Harry','Styles','UK', 28,''),
    ('Calvin','Broadus Jr.','USA',51,'SnoopDoog'),
    ('Isabel','Ripoll','Columbia',45,'Shakira'),
    ('Zuzanna','Grabowska','Poland',25,'Sanah'),
    ('Dawid','Podsiadło','Poland',29,'');

INSERT INTO Album (name, artist_id)
VALUES
    ('Uczta',5),
    ('El Dorado',4),
    ('Lata dwudzieste',6),
    ('B-Real',3),
    ('In the Lonely Hour',1);

INSERT INTO Track (title, type, views, album_id, artist_id)
VALUES
    ('Waka Waka','POP',1000,2,4),
    ('Smoke Weed Everyday','HIP HOP',420,4,3),
    ('Nada','POP',99,2,4),
    ('Perro Fiel','POP',100,2,4),
    ('Trap','POP',700,2,4),
    ('Me Enamore','POP',50,2,4),
    ('Comme moi','POP',800,2,4),
    ('Beautiful','RAP',1000,4,3),
    ('Gin and Juice','HIP HOP',1500,4,3),
    ('Bad Decisions','RAP',300,4,3),
    ('Yound, Wild','HIP HOP',1000,4,3),
    ('My Family','HIP HOP',400,4,3),
    ('Doggyland','RAP',750,4,3),
    ('Who am I?','RAP',80,4,3),
    ('Deja vu','POP',1000,2,4),
    ('Rabiosa','POP',1000,2,4),
    ('To Die For','POP',1000,5,1),
    ('Unholy','POP',1000,5,1),
    ('Fire on Fire','POP',1000,5,1),
    ('Diamonds','POP',1000,5,1),
    ('Fix You','POP',1000,5,1),
    ('My Oasis','POP',1000,5,1),
    ('Like I Can','POP',1000,5,1),
    ('WiRUS','POP',1000,3,6),
    ('POST','POP',1000,3,6),
    ('Nie ma fal','POP',1000,3,6),
    ('Trofea','POP',1000,3,6),
    ('Trójkąty i kwadraty','POP',1000,3,6),
    ('Nic dwa razy','POP',1000,1,5),
    ('Hymn','POP',1000,1,5),
    ('Szary świat','POP',1000,1,5),
    ('Eldorado','POP',1000,1,5),
    ('Etc.','POP',1000,1,5),
    ('Małomiasteczkowy','POP',1000,3,6),
    ('No sory','POP',1000,1,5);

INSERT INTO Client (firstName, lastName, age, email, password, phoneNumber)
VALUES
    ('Jakub','Wojtaś',23,'kubawojtas@gmail.com','password','923792436'),
    ('Wojciech','Jacoszek',22,'wojciechjacoszek@gmail.com','passwd','865400987'),
    ('Michał','Filip',23,'michal.filip@gmail.com','pass','943733430'),
    ('Maciej','Bek',23,'maciej.bek@gmail.com','word','925790433');

INSERT INTO Employee (firstName, lastName, age, email, password, phoneNumber)
VALUES
    ('Damian','Gawron',23,'gawron@gmail.com','zaq1','923034288'),
    ('Arkadiusz','Murański',22,'muran.arkadiusz@gmail.com','muran','865400987'),
    ('Michał','Baron',23,'boxdelo@gmail.com','fame','890890765'),
    ('Wojciech','Gola',23,'golawojtek@gmail.com','haslo','776737488');

INSERT INTO Playlist (name, client_id)
VALUES
    ('moja',3),
    ('temp',2),
    ('snoop',1),
    ('na czasie 2022',null);

INSERT INTO Client_artist (client_id, artist_id)
VALUES
    (2,3),
    (2,2),
    (1,6);

INSERT INTO client_track (client_id, track_id)
VALUES
    (3,5),
    (1,2),
    (2,34),
    (4,32),
    (3,15),
    (2,7);

INSERT INTO track_playlist (track_id, playlist_id)
VALUES
    (34,4),
    (33,4),
    (32,4),
    (28,4),
    (7,4),
    (15,3),
    (2,1),
    (14,2),
    (9,3),
    (19,1),
    (4,2);