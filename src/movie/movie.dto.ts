import {
  IsDateString,
  IsNotEmpty,
  IsString,
  IsArray,
  IsOptional,
} from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty()
  imdbId: string;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  overview: string;

  @IsNotEmpty()
  @IsDateString()
  releaseDate: Date;

  @IsNotEmpty()
  @IsArray()
  trailers: string[];

  @IsArray()
  relatedVideos: string[];

  @IsNotEmpty()
  @IsArray()
  genres: string[];

  @IsArray()
  posters: string[];

  @IsArray()
  backdrops: string[];

  reviewIds: string[];
}

export class UpdateMovieDto {
  @IsOptional()
  @IsString()
  imdbId?: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  overview?: string;

  @IsOptional()
  @IsDateString()
  releaseDate?: Date;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  trailers?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  relatedVideo?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  genres?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  posters?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  backdrops?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  reviewIds?: string[];
}
