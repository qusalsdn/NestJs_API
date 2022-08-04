import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

// generate로 컨트롤러의 이름을 입력해주고 생성하면 자동으로 입력한 컨트롤러 이름으로 만들어진다.
// 컨트롤러 안에 있는 movies는 기본 라우터를 나타낸다. ex) http://localhost:3000/movies

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  createMovie() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  removeMovie(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  // put은 모든 리소스를 업데이트해준다.
  // patch는 리소스의 일부분만 업데이트해준다.
  @Patch('/:id')
  patchMovie(@Param('id') movieId: string) {
    return `This will patch a movie with the id: ${movieId}`;
  }
}
