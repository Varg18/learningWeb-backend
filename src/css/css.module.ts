import { Module } from "@nestjs/common";
import { CssService } from "./css.service";
import { CssController } from "./css.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Css } from "./entityes/css.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Css])],
  providers: [CssService],
  controllers: [CssController]
})

export class CssModule {

}