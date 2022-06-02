import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Mongoose } from "mongoose";

export type CommunityDocument = Community & Document;

@Schema()
export class Community {
    @Prop()
    Company:string;

    @Prop()
    CommunityName:string;

    @Prop()
    Description:string;

    @Prop()
    Contacts:[{
        google:string,
        twitter:string,
        telegram:string,
        github:string
    }]
}

export const CommunitySchema = SchemaFactory.createForClass(Community);