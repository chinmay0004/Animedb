--UP MIGRATIONS:

CREATE TABLE anime(
    id UUID PRIMARY KEY,
    external_id INTEGER UNIQUE NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    status TEXT,
    episodes INTEGER,
    aired_from DATE,
    aired_to DATE,
    image_url TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE genres(
   id UUID PRIMARY KEY,
   name TEXT NOT NULL UNIQUE,
   created_at TIMESTAMP DEFAULT NOW(),
   updated_at TIMESTAMP DEFAULT NOW() 
);

CREATE TABLE anime_genres(
    anime_id UUID NOT NULL,
    genre_id UUID NOT NULL,
    PRIMARY KEY(anime_id, genre_id),
    FOREIGN KEY(anime_id) REFERENCES anime(id) ON DELETE CASCADE,
    FOREIGN KEY(genre_id) REFERENCES genres(id) ON DELETE CASCADE
);

CREATE TABLE studios(
    id UUID PRIMARY KEY,
    external_id INTEGER UNIQUE NOT NULL,
    name TEXT UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE anime_studios(
    anime_id UUID NOT NULL,
    studio_id UUID NOT NULL,
    PRIMARY KEY(anime_id, studio_id),
    FOREIGN KEY (anime_id) REFERENCES anime(id) ON DELETE CASCADE,
    FOREIGN KEY (studio_id) REFERENCES studios(id) ON DELETE CASCADE
);

CREATE TABLE characters(
    id UUID PRIMARY KEY,
    external_id INTEGER UNIQUE NOT NULL,
    anime_id UUID NOT NULL,
    name TEXT NOT NULL,
    image_url TEXT,
    description TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY(anime_id) REFERENCES anime(id) ON DELETE CASCADE
);

CREATE TABLE users(
    id UUID PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);



