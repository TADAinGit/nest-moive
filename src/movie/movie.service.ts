import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Types, Schema } from 'mongoose';
import { MovieGenres } from 'src/constants/movie-genres';
import { CreateMovieDto } from './movie.dto';
import { MovieRepository } from './movie.repository';
import { Movie } from './movie.schema';

@Injectable()
export class MovieService {
  constructor(private readonly movieRepository: MovieRepository) {}

  async createMovie(movie: CreateMovieDto) {
    return await this.movieRepository.create(movie);
  }

  async getAllMovies() {
    return await this.movieRepository.findByCondition({});
  }

  async getMovieById(id: string): Promise<Movie> {
    const movie = this.movieRepository.findById(id);
    if (movie) {
      return movie;
    }
    throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
  }

  async getMovieByImdb(imdbId: string): Promise<Movie> {
    const movie = this.movieRepository.findOneByCondition({ imdbId });
    if (movie) {
      return movie;
    }
    throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
  }

  async addGenre(imdb: string, genre: string) {
    const movie = await this.movieRepository.findOneByCondition({
      imdbId: imdb,
    });

    if (!movie) {
      throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
    }
    // console.log(movie);
    if (!Object.values<string>(MovieGenres).includes(genre)) {
      throw new HttpException(
        `Invalid genre: ${genre}`,
        HttpStatus.BAD_REQUEST,
      );
    }

    if (movie.genres.includes(genre)) {
      throw new HttpException('Genre exist', HttpStatus.BAD_REQUEST);
    }
    movie.genres.push(genre);

    const updatedMovie = await this.movieRepository.findOneAndUpdate(
      { imdbId: imdb },
      { $set: { genres: movie.genres } },
      { new: true },
    );

    return updatedMovie;
  }
}
