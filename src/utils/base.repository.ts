import {
  Document,
  FilterQuery,
  Model,
  QueryOptions,
  UpdateQuery,
} from 'mongoose';
import { CreateMovieDto } from 'src/movie/movie.dto';

export abstract class BaseRepository<T extends Document> {
  constructor(private readonly model: Model<T>) {}

  async create(data: CreateMovieDto): Promise<any> {
    const entity = new this.model(data);
    return await entity.save();
  }

  async findById(id: string, options?: QueryOptions): Promise<T> {
    return this.model.findById(id, null, options);
  }

  async findByCondition(
    filter: any,
    field?: any | null,
    option?: any | null,
    populate?: any | null,
  ): Promise<T[]> {
    return this.model.find(filter, field, option).populate(populate);
  }

  async findOneByCondition(
    filter,
    field?: any | null,
    option?: any | null,
    populate?: any | null,
  ): Promise<T | any> {
    return this.model.findOne(filter, field, option).populate(populate);
  }

  async deleteOne(id: string) {
    return this.model.deleteOne({ _id: id } as FilterQuery<T>);
  }

  async deleteMany(ids: string[]) {
    return this.model.deleteMany({ _id: { $in: ids } } as FilterQuery<T>);
  }

  async deleteByCondition(filter: FilterQuery<T>) {
    return this.model.deleteMany(filter);
  }

  async findOneAndUpdate(
    filter: FilterQuery<T>,
    update: UpdateQuery<T>,
    option?: any | null,
  ) {
    return this.model.findOneAndUpdate(
      filter as FilterQuery<T>,
      update,
      option,
    );
  }

  async findByIdAndUpdate(id: string, update: UpdateQuery<T>) {
    return this.model.findByIdAndUpdate(id, update);
  }

  async updateMany(
    filter: FilterQuery<T>,
    update: UpdateQuery<T>,
    options?: any,
  ) {
    return this.model.updateMany(filter, update, options);
  }

  async aggregation(options: any) {
    return this.model.aggregate(options);
  }

  async populate(result: T[], options: any) {
    return this.model.populate(result, options);
  }
}
