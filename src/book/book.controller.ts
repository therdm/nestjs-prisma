import { Book } from "@prisma/client";
import { BookService } from "./book-service";
import { Body, Controller, Delete, Get, Injectable, Param, Post, Put, Req, Res } from "@nestjs/common";

@Controller('api/v1/book')
export class BookController {
    constructor(private readonly  bookService: BookService) {
        
    }

    @Get()
    async getAllBook(@Req() request: Request, @Res()  response: Response): Promise<any> {
        const books = await this.bookService.getAllBook()
        return books
    }

    @Get(':id')
    async getABook(@Param() id:number): Promise<Book | null> {
        return this.bookService.getBook(id)
    } 

    @Post()
    async createABook(@Body() bookData: Book): Promise<Book[]> {
        return this.bookService.getAllBook()
    }

    @Put(':id')
    async updateABook(@Param() id:number, @Body() bookData: Book): Promise<Book> {
        return this.bookService.updateBook(id, bookData)
    }

    @Delete(':id')
    async deleteABook(@Param() id:number): Promise<Book> {
        return this.bookService.deleteBook(id)
    }


}