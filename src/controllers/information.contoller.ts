import { Body, Controller, Post } from '@nestjs/common';
import { InformationService } from 'src/services/information.service';
import { Information } from 'types/information';


@Controller('information')
export class InformationController {
    constructor(private readonly informationService: InformationService) {}

   @Post()
    async getInformation(@Body('image') base64Image: string): Promise<Information | null> {
        return await this.informationService.getInformation(base64Image);
    }
}
