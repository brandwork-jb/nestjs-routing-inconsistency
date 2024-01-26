import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('v2/test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':type/:id')
  async getChildsByParentTypeAndId(
    @Param('type') type: string,
    @Param('id') id: string,
  ) {
    console.log(
      `getChildsByParentTypeAndId called with type '${type}' and id '${id}'`,
    );
  }

  @Get(':id/token')
  async getChildTokenByChildId(@Param('id') id: string) {
    console.log(`getChildTokenByChildId called with id '${id}'`);
  }
}
