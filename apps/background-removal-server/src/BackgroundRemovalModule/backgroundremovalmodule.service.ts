import { Injectable } from "@nestjs/common";

@Injectable()
export class BackgroundRemovalModuleService {
  constructor() {}
  async RemoveBackground(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
