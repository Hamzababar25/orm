
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreatedPhotoDto } from './photo.controller';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @Inject('PHOTO_REPOSITORY')
    private photoRepository: Repository<Photo>,
  ) {}

  async createpho(createphoDto:CreatedPhotoDto): Promise<Photo> {
    const createdpho = await this.photoRepository.create(createphoDto);
    return createdpho;
  }

  async findAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }
}