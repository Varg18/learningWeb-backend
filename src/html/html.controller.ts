import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get, HttpCode, HttpException, HttpStatus, NotFoundException,
  Param,
  Post,
  Put
} from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { HtmlService } from "./html.service";
import { Html } from "./entityes/html.entity";

@Controller('html')
export class HtmlController {

  constructor(private readonly postService: HtmlService) {

  }

  @Get()
  getAll() {
    return this.postService.getAll()
  }

  @Get(':id')
  async getOne(@Param('id') id: number): Promise<Html> {
    const post = await this.postService.getById(id)
    if (post === undefined) {
      console.log(12312312312);
      throw new NotFoundException("Forbidden")
    }
    return post
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createPostDto: CreatePostDto): Promise<Html> {
    const post = new Html()
    post.title = createPostDto.title
    post.text = createPostDto.text
    return this.postService.create(post)
  }

  @Delete(':id')
  remove(@Param('id') id: number ): Promise<void> {
      return this.postService.remove(id)
  }

  @Put(':id')
  async update(@Body() { title, text }: UpdatePostDto, @Param('id') id:number): Promise<Html> {
    const post  = await this.postService.getById(id)
    if (post === undefined) {
      throw new NotFoundException("Invalid post " + id )
    }
    post.title = title
    post.text = text
    return this.postService.update(post)
  }
}
