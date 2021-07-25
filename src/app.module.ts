/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadImageModule } from './modules/uploadimage.module';

@Module({
  imports: [UploadImageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
