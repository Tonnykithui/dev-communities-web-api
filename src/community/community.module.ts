import { Module } from '@nestjs/common';
import { CommunityService } from './community.service';
import { CommunityController } from './community.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Community, CommunitySchema } from './entities/community.entity';

@Module({
  imports:[ MongooseModule.forFeature([{name:Community.name, schema:CommunitySchema}])],
  controllers: [CommunityController],
  providers: [CommunityService]
})
export class CommunityModule {}
