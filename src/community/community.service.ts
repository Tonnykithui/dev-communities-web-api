import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommunityDto } from './dto/create-community.dto';
import { UpdateCommunityDto } from './dto/update-community.dto';
import { Community, CommunityDocument } from './entities/community.entity';

@Injectable()
export class CommunityService {
  constructor(@InjectModel(Community.name) private communityModel : Model<CommunityDocument>){}

  async create(createCommunityDto: CreateCommunityDto) {
    if(!createCommunityDto.CommunityName || !createCommunityDto.Company
       || !createCommunityDto.Contacts || !createCommunityDto.Description){
         throw new HttpException('Please fill all details.', HttpStatus.BAD_REQUEST)
       }
    //check if already exists n update record
    const documentExists = new this.communityModel(createCommunityDto)
    return documentExists.save();
  }

  async findAll() {
    return await this.communityModel.find();
  }

  async findOne(id: string) {
    try{
      const docExists = await this.communityModel.findById(id);
      return docExists;
    } catch(e){
      throw new HttpException('Document not found', HttpStatus.NOT_FOUND);
    }
  }

  async update(id: string, updateCommunityDto: Partial<UpdateCommunityDto>) {
    if(this.findOne(id)){
      await this.communityModel.findByIdAndUpdate(updateCommunityDto);
      return HttpStatus.NO_CONTENT;
    } else{
      return new HttpException('Record does not exists', HttpStatus.BAD_REQUEST);
    }
  }

  async remove(id: string) {
    try{
      await this.communityModel.findByIdAndDelete(id)
      return 'Deleted'
    } catch(e){
      throw e
    }
  }
}
