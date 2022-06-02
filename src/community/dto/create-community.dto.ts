
export class CreateCommunityDto {
    Company:string;
    CommunityName:string;
    Description:string;
    Contacts:[{
        google:string,
        twitter:string,
        telegram:string,
        github:string
    }]
}
