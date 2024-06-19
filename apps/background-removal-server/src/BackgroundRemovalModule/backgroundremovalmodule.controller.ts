import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { BackgroundRemovalModuleService } from "./backgroundremovalmodule.service";

@swagger.ApiTags("backgroundRemovalModules")
@common.Controller("backgroundRemovalModules")
export class BackgroundRemovalModuleController {
  constructor(protected readonly service: BackgroundRemovalModuleService) {}

  @common.Post("/remove-background")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RemoveBackground(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.RemoveBackground(body);
      }
}
