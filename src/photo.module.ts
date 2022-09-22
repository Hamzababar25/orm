import { Module } from '@nestjs/common';
import { DatabaseModule } from './database.module';
import { PhotoController } from './photo.controller';
import { Photo } from './photo.entity';
import { photoProviders } from './photo.providers';
import { PhotoService } from './photo.service';


@Module({
  imports: [DatabaseModule],
  controllers: [PhotoController],
 
  providers: [
    ...photoProviders,
    PhotoService

  ],
})
export class PhotoModule {}