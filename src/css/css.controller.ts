import {
  Body,
  Controller,
  Delete,
  Get, HttpCode, HttpStatus, NotFoundException,
  Param,
  Post,
  Put
} from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { CssService } from "./css.service";
import { Css } from "./entityes/css.entity";

@Controller('css')
export class CssController {

  constructor(private readonly postService: CssService) {

  }

  @Get()
  getAll() {
    return this.postService.getAll()
  }

  @Get(':id')
  async getOne(@Param('id') id: number): Promise<Css> {
    const post = await this.postService.getById(id)
    if (post === undefined) {
      console.log(12312312312);
      throw new NotFoundException("Forbidden")
    }
    return post
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createPostDto: CreatePostDto): Promise<Css> {
    const post = new Css()
    post.title = createPostDto.title
    post.text = createPostDto.text
    return this.postService.create(post)
  }

  @Delete(':id')
  remove(@Param('id') id: number ): Promise<void> {
      return this.postService.remove(id)
  }

  @Put(':id')
  async update(@Body() { title, text }: UpdatePostDto, @Param('id') id:number): Promise<Css> {
    const post  = await this.postService.getById(id)
    if (post === undefined) {
      throw new NotFoundException("Invalid post " + id )
    }
    post.title = title
    post.text = text
    return this.postService.update(post)
  }
}
