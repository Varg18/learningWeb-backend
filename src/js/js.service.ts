import { Injectable } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Js } from "./entityes/js.entity";
import { Repository } from "typeorm";

@Injectable()
export class JsService {

  constructor(
    @InjectRepository(Js)
    private htmlRepository: Repository<Js>
  ) {}

  async getAll(): Promise<Js[]> {
    return this.htmlRepository.find()
  }

  async getById(id: number): Promise<Js> {
    return this.htmlRepository.findOneBy({ id })
  }

  async create(postDto: CreatePostDto): Promise<Js> {
    return this.htmlRepository.save(postDto)
  }

  async update(post: Js): Promise<Js> {
    return this.htmlRepository.save(post)
  }

  async remove(id: number): Promise<void> {
    await this.htmlRepository.delete(id)
  }
}