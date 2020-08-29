import { ApiProperty } from '@nestjs/swagger';

export class CreateQuoteDto {
    //Ele mostra o schema no meu swagger 
    @ApiProperty()
    readonly title: string;

    @ApiProperty()
    readonly author: string;
}

/**
 * Schemas
 * 
 * CreateQuoteDto {
 *  title* string
 *  author* string
 * }
 */