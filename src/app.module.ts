import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommunityModule } from './community/community.module';

@Module({
  imports: [CommunityModule, MongooseModule.forRoot('mongodb://localhost/devcomm')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
