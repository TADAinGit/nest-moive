import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieSchema } from './movie.schema';
import { MovieRepository } from './movie.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Movie', schema: MovieSchema }]),
  ],
  providers: [MovieService, MovieRepository],
  controllers: [MovieController],
})
export class MovieModule {}
