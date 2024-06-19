import * as graphql from "@nestjs/graphql";
import { BackgroundRemovalModuleService } from "./backgroundremovalmodule.service";

export class BackgroundRemovalModuleResolver {
  constructor(protected readonly service: BackgroundRemovalModuleService) {}

  @graphql.Mutation(() => String)
  async RemoveBackground(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.RemoveBackground(args);
  }
}
