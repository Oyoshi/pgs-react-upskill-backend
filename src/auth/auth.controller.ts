import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { LocalAuthGuard } from './guards';
import { User } from '../users/entities';

interface RequestWithUser extends Request {
  user: User;
}

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req: RequestWithUser) {
    return this.authService.login(req.user);
  }
}
