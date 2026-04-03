import { Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { MovieService } from './movie.service';
import {
  ApiBody,
  ApiHeader,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Movie')
@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @ApiOperation({
    summary: 'Get all movies',
    description: 'Returns a list of all movies',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'List of movies retrieved successfully',
  })
  @Get()
  findAll() {
    return [
      {
        id: 1,
        title: 'The Shawshank Redemption',
      },
      {
        id: 2,
        title: 'The Godfather',
      },
      {
        id: 3,
        title: 'The Dark Knight',
      },
    ];
  }

  @ApiOperation({
    summary: 'Get movie by ID',
    description: 'Returns a movie with the specified ID',
  })
  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'The ID of the movie to retrieve',
  })
  @ApiQuery({
    name: 'year',
    type: 'number',
    description: 'The release year of the movie',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Movie retrieved successfully',
  })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Movie not found' })
  @Get(':id')
  findById() {
    return {
      id: 1,
      title: 'The Shawshank Redemption',
    };
  }

  @ApiOperation({
    summary: 'Create a new movie',
    description: 'Creates a new movie with the provided data',
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: {
          type: 'string',
          example: 'Fight Club',
        },
      },
    },
  })
  @Post()
  create() {}
}
