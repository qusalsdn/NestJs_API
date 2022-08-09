import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

// generate로 컨트롤러의 이름을 입력해주고 생성하면 자동으로 입력한 컨트롤러 이름으로 만들어진다.
// 컨트롤러 안에 있는 movies는 기본 라우터를 나타낸다. ex) http://localhost:3000/movies

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('search')
  search(@Query('year') seachingYear: string) {
    return `We are searching for a movie made after: ${seachingYear}`;
  }

  // Get id의 라우터가 제일 위에 있으면 다른 라우터들은 id로 인식하게 된다.

  @Get(':id')
  getOne(@Param('id') movieId: string): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  createMovie(@Body() movieData) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  removeMovie(@Param('id') movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }

  // put은 모든 리소스를 업데이트해준다.
  // patch는 리소스의 일부분만 업데이트해준다.
  @Patch(':id')
  patchMovie(@Param('id') movieId: string, @Body() updateData) {
    return this.moviesService.update(movieId, updateData);
  }
}
