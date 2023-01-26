import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InvoicesController } from './invoices.controller';
import { InvoicesService } from './invoices.service';
import { Invoice, Contact, Item } from './entities';
import { INVOICES_MOCK, INVOICE_MOCK, INVOICE_ID_MOCK } from './invoices.mock';

describe('InvoicesController', () => {
  let invoicesController: InvoicesController;
  let invoicesService: InvoicesService;

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

    invoicesController = module.get<InvoicesController>(InvoicesController);
    invoicesService = module.get<InvoicesService>(InvoicesService);
  });

  it('should be defined', () => {
    expect(invoicesController).toBeDefined();
  });

  describe('find', () => {
    it('should return all invoices', async () => {
      jest.spyOn(invoicesService, 'find').mockResolvedValue(INVOICES_MOCK);
      expect(await invoicesController.find()).toBe(INVOICES_MOCK);
    });
  });

  describe('findOne', () => {
    it('should return invoice with given ID', async () => {
      jest.spyOn(invoicesService, 'findOne').mockResolvedValue(INVOICE_MOCK);
      expect(await invoicesController.findOne(INVOICE_ID_MOCK)).toBe(
        INVOICE_MOCK,
      );
    });

    it('should throw an exception when ID is not found', async () => {
      jest
        .spyOn(invoicesService, 'findOne')
        .mockRejectedValue(new NotFoundException('No invoice with given id'));
      await expect(invoicesController.findOne('abcd-2137')).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
