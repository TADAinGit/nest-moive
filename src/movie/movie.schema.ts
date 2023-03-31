import { Document, Schema } from 'mongoose';
import { MovieGenres } from 'src/constants/movie-genres';

const MovieSchema = new Schema(
  {
    imdbId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    overview: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: Date,
      required: true,
    },
    trailers: {
      type: [String],
      required: true,
    },
    relatedVideos: {
      type: [String],
    },
    genres: {
      type: [
        {
          type: String,
          enum: Object.values<string>(MovieGenres),
          unique: true,
        },
      ],
    },
    posters: {
      type: [String],
    },
    backdrops: {
      type: [String],
    },
    reviewIds: {
      type: [String],
    },
  },
  {
    timestamps: true,
    collection: 'movies',
  },
);

export { MovieSchema };

export interface Movie extends Document {
  imdbId: string;
  title: string;
  overview: string;
  releaseDate: Date;
  trailers: string[];
  relatedVideo?: string[];
  genres: string[];
  posters?: string[];
  backdrops?: string[];
  reviewIds?: string[];
}
