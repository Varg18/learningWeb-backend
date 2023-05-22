import { Module } from "@nestjs/common";
import { JsService } from "./js.service";
import { JsController } from "./js.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Js } from "./entityes/js.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Js])],
  providers: [JsService],
  controllers: [JsController]
})

export class JsModule {

}