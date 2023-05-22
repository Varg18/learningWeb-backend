import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Css } from "./entityes/css.entity";
import { Repository } from "typeorm";

@Injectable()
export class CssService {

  constructor(
    @InjectRepository(Css)
    private htmlRepository: Repository<Css>
  ) {}

  async getAll(): Promise<Css[]> {
    return this.htmlRepository.find()
  }

  async getById(id: number): Promise<Css> {
    return this.htmlRepository.findOneBy({ id })
  }

  async create(postDto: CreatePostDto): Promise<Css> {
    return this.htmlRepository.save(postDto)
  }

  async update(post: Css): Promise<Css> {
    return this.htmlRepository.save(post)
  }

  async remove(id: number): Promise<void> {
    await this.htmlRepository.delete(id)
  }
}