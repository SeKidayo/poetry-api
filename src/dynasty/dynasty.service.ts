import { Injectable } from '@nestjs/common';
import { CreateDynastyDto } from './dto/create-dynasty.dto';
import { UpdateDynastyDto } from './dto/update-dynasty.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DynastyService {
  constructor(private prisma: PrismaService) {}

  create(createDynastyDto: CreateDynastyDto) {
    return this.prisma.dynasty.create({
      data: createDynastyDto,
    });
  }

  createMany(createDynastyDtoList: CreateDynastyDto[]) {
    return this.prisma.dynasty.createMany({
      data: createDynastyDtoList,
    });
  }

  findAll() {
    return this.prisma.dynasty.findMany();
  }

  findOne(id: string) {
    return this.prisma.dynasty.findUnique({
      where: {
        dynasty_id: id,
      },
    });
  }

  update(id: string, updateDynastyDto: UpdateDynastyDto) {
    return this.prisma.dynasty.update({
      where: {
        dynasty_id: id,
      },
      data: updateDynastyDto,
    });
  }

  remove(id: string) {
    return this.prisma.dynasty.delete({
      where: {
        dynasty_id: id,
      },
    });
  }
}
