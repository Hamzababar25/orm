import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PhotoService } from './photo.service';



export class CreatedPhotoDto {
  name: string;
  id: number;
  description: string;
  filename: string;
  views: number;
  isPublished: boolean;
  
 

}


@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  findAll(): any {
    return this.photoService.findAll();
  }

  @Post()
  async create(@Body() createdphoDto: CreatedPhotoDto) {
     return this.photoService.createpho(createdphoDto)
  
  }

}
