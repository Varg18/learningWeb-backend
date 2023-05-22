import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Html } from "./entityes/html.entity";
import { Repository } from "typeorm";

@Injectable()
export class HtmlService {

  constructor(
    @InjectRepository(Html)
    private htmlRepository: Repository<Html>
  ) {}

  async getAll(): Promise<Html[]> {
    return this.htmlRepository.find()
  }

  async getById(id: number): Promise<Html> {
    return this.htmlRepository.findOneBy({ id })
  }

  async create(postDto: CreatePostDto): Promise<Html> {
    return this.htmlRepository.save(postDto)
  }

  async update(post: Html): Promise<Html> {
    return this.htmlRepository.save(post)
  }

  async remove(id: number): Promise<void> {
    await this.htmlRepository.delete(id)
  }
}