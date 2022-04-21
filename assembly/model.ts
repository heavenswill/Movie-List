import {
  PersistentUnorderedMap,
  math,
  PersistentVector,
  Context,
} from "near-sdk-as";

export const movies = new PersistentUnorderedMap<u32, Movie>("movies");

export const ownerMovie = new PersistentUnorderedMap<u32, Array<AccountId>>(
  "access"
);

export const comments = new PersistentVector<PostedComment>("m");

type AccountId = string;

@nearBindgen
export class PostedComment {
  movieId: u32;
  sender: string;
  constructor(public text: string, movieId: u32) {
    this.sender = Context.sender;
    this.movieId = movieId;
    this.text = text;
  }
}

@nearBindgen
export class PartialMovie {
  name: string;
  type: string;
  description: string;
}

@nearBindgen
export class Movie {
  id: u32;
  user: AccountId = Context.sender;
  name: string;
  type: string;
  description: string;

  constructor(name: string, type: string, description: string) {
    this.id = math.hash32<string>(name);
    this.name = name;
    this.type = type;
    this.description = description;
  }

  static addMovie(name: string, type: string, description: string): Movie {
    const movie = new Movie(name, type, description);
    movies.set(movie.id, movie);

    return movie;
  }

  static findMovieById(id: u32): Movie {
    return movies.getSome(id);
  }

  static findMovies(offset: u32, limit: u32): Movie[] {
    return movies.values(offset, offset + limit);
  }

  static findMovieByIdAndUpdate(id: u32, partial: PartialMovie): Movie {
    const movie = this.findMovieById(id);

    movie.name = partial.name;
    movie.type = partial.type;
    movie.description = partial.description;

    movies.set(id, movie);

    return movie;
  }

  static findMovieByIdAndDelete(id: u32): void {
    movies.delete(id);
  }
}
