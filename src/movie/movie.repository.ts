import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src/utils/base.repository';
import { Movie } from './movie.schema';

@Injectable()
export class MovieRepository extends BaseRepository<Movie> {
  constructor(
    @InjectModel('Movie')
    private readonly movieModel: Model<Movie>,
  ) {
    super(movieModel);
  }
}
