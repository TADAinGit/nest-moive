import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Query,
} from '@nestjs/common';
import { Public } from 'src/auth/public.decorator';
import { CreateMovieDto } from './movie.dto';
import { MovieService } from './movie.service';
import { MovieGenres } from 'src/constants/movie-genres';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Public()
  @Get()
  getAllMovies() {
    return this.movieService.getAllMovies();
  }

  @Public()
  @Get(':imdb')
  getMovieByImdb(@Param('imdb') imdb: string) {
    return this.movieService.getMovieByImdb(imdb);
  }

  @Post('create')
  createNewMovieData(@Body() movie: CreateMovieDto) {
    return this.movieService.createMovie(movie);
  }

  @Put(':id/genre')
  addMovieGenre(@Param('id') id: string, @Body('genre') genre: string) {
    return this.movieService.addGenre(id, genre);
  }
}
