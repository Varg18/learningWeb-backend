import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HtmlModule } from "./html/html.module";
import { CssModule } from "./css/css.module";
import { JsModule } from "./js/js.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Html } from "./html/entityes/html.entity";
import { Css } from "./css/entityes/css.entity";
import { Js } from "./js/entityes/js.entity"
 
@Module({
  imports: [HtmlModule, CssModule, JsModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'Posts',
    entities: [Html, Css, Js],
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule {}
