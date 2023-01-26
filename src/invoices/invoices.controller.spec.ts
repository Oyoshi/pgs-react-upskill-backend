import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InvoicesController } from './invoices.controller';
import { InvoicesService } from './invoices.service';
import { Invoice, Contact, Item } from './entities';

describe('InvoicesController', () => {
  let controller: InvoicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvoicesController],
      providers: [
        InvoicesService,
        {
          provide: getRepositoryToken(Invoice),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(Contact),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(Item),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<InvoicesController>(InvoicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
