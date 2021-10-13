import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';

const MONGO_URL_CONNECTION = `mongodb+srv://paulo:paulo123@cluster0.kjv9h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(MONGO_URL_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }),
    ProdutosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
