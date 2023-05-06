// import { Test, TestingModule } from '@nestjs/testing';
import { AuthResolver } from './auth.resolver';

describe('AuthResolver', () => {
  let resolver: AuthResolver;

  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     controllers: [AuthController],
  //   }).compile();

  //   controller = module.get<AuthController>(AuthController);
  // });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
