import { Injectable } from '@nestjs/common';
import { objectInformationGenerator } from 'agents/tools/object-information-generator.tool';
import { Information } from 'types/information';

@Injectable()
export class InformationService {

  async getInformation(base64Image: string): Promise<Information | null> {
    return await objectInformationGenerator(base64Image);
  }
}
