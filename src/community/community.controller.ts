import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommunityService } from './community.service';
import { CreateCommunityDto } from './dto/create-community.dto';
import { UpdateCommunityDto } from './dto/update-community.dto';

@ApiTags('Community')
@Controller('community')
export class CommunityController {
  constructor(private readonly communityService: CommunityService) {}

  @Post()
  @ApiOperation({summary:'Create Hackathon event'})
  @ApiBody({
    schema:{
      type:'object',
      properties:{
        Company:{
          type:'string',
          example:'sibasi',
          description:'Enter name of company hosting hackathon'
        },
        CommunityName:{
          type:"string",
          example:"Sibasi hAck",
          description:'Enter name of hackathon event'
        },
        Description:{
          type:"string",
          example:"Lorem ipsum something",
          description:'Brief overview of hackathon event'
        },
        Contacts:
           { 
             type:'array',
             example:[
              {
               google:"string",
               twitter:"string",
               telegram:"string",
               github:"string"
              }]
           }
        }
    }
  })
  @ApiResponse({
    status:201,
    description:'Document successfully added....'
  })
  @ApiResponse({
    status:201,
    description:'Document successfully added....'})
  async create(@Body() createCommunityDto: CreateCommunityDto) {
    return await this.communityService.create(createCommunityDto);
  }

  @Get()
  @ApiOperation({summary:'Gets all communities registered'})
  @ApiResponse({
    status:200,
    description:'returned Results.. '
  })
  @ApiResponse({
    status:500,
    description:'Internal server error'
  })
  async findAll() {
    return await this.communityService.findAll();
  }

  @ApiOperation({summary:'Get a certain company by ID'})
  @ApiParam({
     name:"id",
     type:"string",
     description:'Company to delete',
     example:'#344554FDSBG'
  })
  @ApiResponse({
    status:204,
    description:'Deleted document'
  })
  @ApiResponse({
    status:500,
    description:'Internal server error'
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.communityService.findOne(id);
  }

  @Post(':id')
  @ApiOperation({summary:'UPD a certain company by ID'})
  @ApiParam({
     name:"id",
     type:"string",
     description:'Company to update',
     example:'#344554FDSBG'
  })
  @ApiBody({
    schema:{
      type:'object',
      properties:{
        Company:{
          type:'string',
          example:'sibasi',
          description:'Enter name of company hosting hackathon'
        },
        CommunityName:{
          type:"string",
          example:"Sibasi hAck",
          description:'Enter name of hackathon event'
        },
        Description:{
          type:"string",
          example:"Lorem ipsum something",
          description:'Brief overview of hackathon event'
        },
        Contacts:
           { 
             type:'array',
             example:[
              {
               google:"string",
               twitter:"string",
               telegram:"string",
               github:"string"
              }]
           }
      }
    }
  })
  @ApiResponse({
    status:204,
    description:'Updated document'
  })
  @ApiResponse({
    status:500,
    description:'Internal server error'
  })
  async update(@Param('id') id: string, @Body() updateCommunityDto: UpdateCommunityDto) {
    return await this.communityService.update(id, updateCommunityDto);
  }

  @Delete(':id')
  @ApiOperation({summary:'Delete a certain company by ID'})
  @ApiParam({
     name:"id",
     type:"string",
     description:'Company to delete',
     example:'#344554FDSBG'
  })
  @ApiResponse({
    status:204,
    description:'Deleted document'
  })
  @ApiResponse({
    status:500,
    description:'Internal server error'
  })
  async remove(@Param('id') id: string) {
     return await this.communityService.remove(id);
  }
}
