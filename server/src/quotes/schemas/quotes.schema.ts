import * as mongoose from 'mongoose';

export const QuoteSchema = new mongoose.Schema({
    title: { type: String, required: [ true, 'Insira um titulo' ]},
    author: { type: String, required: [ true, 'Insira um autor' ]},
});