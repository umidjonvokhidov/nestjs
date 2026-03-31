import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { MovieEntity } from '../movie/entities/movie.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieService } from '../movie/movie.service';
import { ReviewEntity } from './entities/review.entity';
import { ActorEntity } from '../actor/entities/actor.entity';
import { MoviePosterEntity } from '../movie/entities/poster.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      MovieEntity,
      ReviewEntity,
      ActorEntity,
      MoviePosterEntity,
    ]),
  ],
  controllers: [ReviewController],
  providers: [ReviewService, MovieService],
})
export class ReviewModule {}
