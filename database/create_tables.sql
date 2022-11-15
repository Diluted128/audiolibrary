CREATE TABLE IF NOT EXISTS Employee (
    id integer primary key,
    firstName varchar(40),
    lastName varchar(40),
    age integer,
    email varchar(60),
    password varchar(20),
    phoneNumber varchar(9)
);

CREATE TABLE IF NOT EXISTS Client (
    id integer primary key,
    firstName varchar(40),
    lastName varchar(40),
    age integer,
    email varchar(60),
    password varchar(20),
    phoneNumber varchar(9)
);

CREATE TABLE IF NOT EXISTS Artist (
    id integer primary key,
    firstName varchar(40),
    lastName varchar(40),
    country varchar(40),
    age integer,
    pseudonym varchar(40)
);

CREATE TABLE IF NOT EXISTS Album (
    id integer primary key,
    name varchar(60),
    artist_id integer
);

ALTER TABLE Album ADD CONSTRAINT fk_album_artist FOREIGN KEY (artist_id) REFERENCES Artist(id);

CREATE TABLE IF NOT EXISTS Track (
  id integer primary key,
  title varchar(40),
  type varchar(40),
  views integer,
  album_id integer,
  artist_id integer
);

ALTER TABLE Track ADD CONSTRAINT fk_track_album FOREIGN KEY (album_id) REFERENCES Album(id);
ALTER TABLE Track ADD CONSTRAINT fk_track_artist FOREIGN KEY (album_id) REFERENCES Artist(id);

CREATE TABLE IF NOT EXISTS Playlist (
    id integer primary key,
    name varchar(40),
    client_id integer
);

ALTER TABLE Playlist ADD CONSTRAINT fk_playlist_client FOREIGN KEY (client_id) REFERENCES Client(id);

CREATE TABLE IF NOT EXISTS Client_Artist (
    id integer primary key,
    client_id integer,
    artist_id integer
);

ALTER TABLE Client_Artist ADD CONSTRAINT fk_client_artist_client FOREIGN KEY (client_id) REFERENCES Client(id);
ALTER TABLE Client_Artist ADD CONSTRAINT fk_client_artist_artist FOREIGN KEY (artist_id) REFERENCES Artist(id);

CREATE TABLE IF NOT EXISTS Client_Track (
    id integer primary key,
    client_id integer,
    track_id integer

);

ALTER TABLE Client_Track ADD CONSTRAINT fk_client_track_client FOREIGN KEY (client_id) REFERENCES Client(id);
ALTER TABLE Client_Track ADD CONSTRAINT fk_client_track_track FOREIGN KEY (track_id) REFERENCES Track(id);

CREATE TABLE IF NOT EXISTS Track_Playlist (
    id integer primary key,
    track_id integer,
    playlist_id integer
);

ALTER TABLE Track_Playlist ADD CONSTRAINT fk_track_playlist_track FOREIGN KEY (track_id) REFERENCES Track(id);
ALTER TABLE Track_Playlist ADD CONSTRAINT fk_track_playlist_playlist FOREIGN KEY (playlist_id) REFERENCES Playlist(id);