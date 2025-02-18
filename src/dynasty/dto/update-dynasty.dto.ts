import { PartialType } from '@nestjs/mapped-types';
import { CreateDynastyDto } from './create-dynasty.dto';

export class UpdateDynastyDto extends PartialType(CreateDynastyDto) {}
