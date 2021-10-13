import { Test, TestingModule } from '@nestjs/testing';
import { produtosService } from './produtos.service';

describe('produtosService', () => {
  let service: produtosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [produtosService],
    }).compile();

    service = module.get<produtosService>(produtosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
