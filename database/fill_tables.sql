INSERT INTO Artist
VALUES
    (1,'Samuel','Smith','UK',30,'Sam Smith'),
    (2,'Harry','Styles','UK', 28,''),
    (3,'Calvin','Broadus Jr.','USA',51,'SnoopDoog'),
    (4,'Isabel','Ripoll','Columbia',45,'Shakira'),
    (5,'Zuzanna','Grabowska','Poland',25,'Sanah'),
    (6,'Dawid','Podsiadło','Poland',29,'');

INSERT INTO Album
VALUES
    (1,'Uczta',5),
    (2,'El Dorado',4),
    (3,'Lata dwudzieste',6),
    (4,'B-Real',3),
    (5,'In the Lonely Hour',1);

INSERT INTO Track
VALUES
    (1,'Waka Waka','POP',1000,2,4),
    (2,'Smoke Weed Everyday','HIP HOP',420,4,3),
    (3,'Nada','POP',99,2,4),
    (4,'Perro Fiel','POP',100,2,4),
    (5,'Trap','POP',700,2,4),
    (6,'Me Enamore','POP',50,2,4),
    (7,'Comme moi','POP',800,2,4),
    (8,'Beautiful','RAP',1000,4,3),
    (9,'Gin and Juice','HIP HOP',1500,4,3),
    (10,'Bad Decisions','RAP',300,4,3),
    (11,'Yound, Wild','HIP HOP',1000,4,3),
    (12,'My Family','HIP HOP',400,4,3),
    (13,'Doggyland','RAP',750,4,3),
    (14,'Who am I?','RAP',80,4,3),
    (15,'Deja vu','POP',1000,2,4),
    (16,'Rabiosa','POP',1000,2,4),
    (17,'To Die For','POP',1000,5,1),
    (18,'Unholy','POP',1000,5,1),
    (19,'Fire on Fire','POP',1000,5,1),
    (20,'Diamonds','POP',1000,5,1),
    (21,'Fix You','POP',1000,5,1),
    (22,'My Oasis','POP',1000,5,1),
    (23,'Like I Can','POP',1000,5,1),
    (24,'WiRUS','POP',1000,3,6),
    (25,'POST','POP',1000,3,6),
    (26,'Nie ma fal','POP',1000,3,6),
    (27,'Trofea','POP',1000,3,6),
    (28,'Trójkąty i kwadraty','POP',1000,3,6),
    (29,'Nic dwa razy','POP',1000,1,5),
    (30,'Hymn','POP',1000,1,5),
    (31,'Szary świat','POP',1000,1,5),
    (32,'Eldorado','POP',1000,1,5),
    (33,'Etc.','POP',1000,1,5),
    (34,'Małomiasteczkowy','POP',1000,3,6),
    (35,'No sory','POP',1000,1,5);

INSERT INTO Client
VALUES
    (1,'Jakub','Wojtaś',23,'kubawojtas@gmail.com','password','923792436'),
    (2,'Wojciech','Jacoszek',22,'wojciechjacoszek@gmail.com','passwd','865400987'),
    (3,'Michał','Filip',23,'michal.filip@gmail.com','pass','943733430'),
    (4,'Maciej','Bek',23,'maciej.bek@gmail.com','word','925790433');

INSERT INTO Employee
VALUES
    (1,'Damian','Gawron',23,'gawron@gmail.com','zaq1','923034288'),
    (2,'Arkadiusz','Murański',22,'muran.arkadiusz@gmail.com','muran','865400987'),
    (3,'Michał','Baron',23,'boxdelo@gmail.com','fame','890890765'),
    (4,'Wojciech','Gola',23,'golawojtek@gmail.com','haslo','776737488');

INSERT INTO Playlist
VALUES
    (1,'moja',3),
    (2,'temp',2),
    (3,'snoop',1),
    (4,'na czasie 2022',null);

INSERT INTO Client_artist
VALUES
    (1,2,3),
    (2,2,2),
    (3,1,6);

INSERT INTO client_track
VALUES
    (1,3,5),
    (2,1,2),
    (3,2,34),
    (4,4,32),
    (5,3,15),
    (6,2,7);

INSERT INTO track_playlist
VALUES
    (1,34,4),
    (2,33,4),
    (3,32,4),
    (4,28,4),
    (5,7,4),
    (6,15,3),
    (7,2,1),
    (8,14,2),
    (9,9,3),
    (10,19,1),
    (11,4,2);