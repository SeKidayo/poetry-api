import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DynastyService } from './dynasty.service';
import { CreateDynastyDto } from './dto/create-dynasty.dto';
import { UpdateDynastyDto } from './dto/update-dynasty.dto';

@Controller('dynasty')
export class DynastyController {
  constructor(private readonly dynastyService: DynastyService) {}

  @Post()
  create(@Body() createDynastyDto: CreateDynastyDto) {
    return this.dynastyService.create(createDynastyDto);
  }

  @Post('many')
  createMany(@Body() createDynastyDtoList: CreateDynastyDto[]) {
    return this.dynastyService.createMany(createDynastyDtoList);
  }

  @Get()
  findAll() {
    return this.dynastyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dynastyService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDynastyDto: UpdateDynastyDto) {
    return this.dynastyService.update(id, updateDynastyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dynastyService.remove(id);
  }
}
