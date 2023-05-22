import { Module } from "@nestjs/common";
import { HtmlService } from "./html.service";
import { HtmlController } from "./html.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Html } from "./entityes/html.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Html])],
  providers: [HtmlService],
  controllers: [HtmlController]
})

export class HtmlModule {

}