import { Movie, PartialMovie, comments, PostedComment } from "./model";

export function createMovie(
  name: string,
  type: string,
  description: string
): Movie {
  return Movie.addMovie(name, type, description);
}

export function getMovieById(id: u32): Movie {
  return Movie.findMovieById(id);
}

export function getMovies(offset: u32, limit: u32 = 10): Movie[] {
  return Movie.findMovies(offset, limit);
}

export function updateMovie(id: u32, updates: PartialMovie): Movie {
  return Movie.findMovieByIdAndUpdate(id, updates);
}

export function del(id: u32): void {
  Movie.findMovieByIdAndDelete(id);
}

export function addComment(text: string, movieId: u32): void {
  const comment = new PostedComment(text, movieId);
  comments.push(comment);
}
const limit_movie = 10;
export function getComments(): PostedComment[] {
  const numComments = min(limit_movie, comments.length);
  const startIndex = comments.length - numComments;
  const result = new Array<PostedComment>(numComments);
  for (let i = 0; i < numComments; i++) {
    result[i] = comments[i + startIndex];
  }
  return result;
}

export function getCommentsByMovieId(
  id: i32,
  limit: i32 = 10
): PostedComment[] {
  const numComments = min(limit, comments.length);
  const startIndex = comments.length - numComments;
  const result = new Array<PostedComment>(numComments);
  for (let i = 0; i < numComments; i++) {
    if (comments[i].movieId == id) {
      result[i] = comments[i + startIndex];
    }
  }
  return result;
}
