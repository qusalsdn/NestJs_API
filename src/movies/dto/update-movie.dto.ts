import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateMovieDTO } from './create-movie.dto';

// ?를 붙혀 필수가 아니라고 설정해준다.

export class UpdateMovieDTO extends PartialType(CreateMovieDTO) {}
