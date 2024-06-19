import { Module } from "@nestjs/common";
import { BackgroundRemovalModuleService } from "./backgroundremovalmodule.service";
import { BackgroundRemovalModuleController } from "./backgroundremovalmodule.controller";
import { BackgroundRemovalModuleResolver } from "./backgroundremovalmodule.resolver";

@Module({
  controllers: [BackgroundRemovalModuleController],
  providers: [BackgroundRemovalModuleService, BackgroundRemovalModuleResolver],
  exports: [BackgroundRemovalModuleService],
})
export class BackgroundRemovalModuleModule {}
