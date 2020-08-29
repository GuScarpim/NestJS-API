import { Controller, Get, Post, Put, Delete, Body, Param, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { Quote } from './interfaces/quote.interface';
import { ApiTags, ApiParam } from '@nestjs/swagger';

@ApiTags('quotes')
//Criando uma controller com quotes
@Controller('quotes')
export class QuotesController { //Chamada do meu servico
    constructor(private quotesService: QuotesService) {} 
    //Métodos http get, getId, put, delete
    @Get() 
    getQuotes(): Promise<Quote[]> {
        return this.quotesService.getQuotes();
    }

    @ApiParam({ name: 'id' }) //Cria um campo com o Id no Swagger
    @Get(':id') 
    getQuote(@Param('id') id): Promise<Quote> {
        return this.quotesService.getQuote(id);
    }

    @Post()
    async createQuote(@Body() createQuoteDto: CreateQuoteDto): Promise<Quote> { // Dentro do corpo da minha requisição eu passo a minha DTO("model")
        try{
            return await this.quotesService.createQuote(createQuoteDto);// Estou passando os models direto do meu Service
        } catch(err) {
            throw new HttpException(err.message, HttpStatus.UNPROCESSABLE_ENTITY);
        }
    }

    @ApiParam({ name: 'id' })
    @Put(':id')
    updateQuote(@Param('id') id, @Body() updateQuoteDto: CreateQuoteDto): Promise<Quote> {
        return this.quotesService.updateQuote(id, updateQuoteDto);
    }

    @ApiParam({ name: 'id' })
    @Delete(':id')
    deleteQuote(@Param('id') id): Promise<any> {
        return this.quotesService.deleteQuote(id)
    }
}
