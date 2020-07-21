import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/user/user.entity';

@Injectable()
export class AuthService {
    constructor(private usersService: any) {
    }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    // async login(user: Partial<UserEntity>): Promise<Partial<UserEntity>> {
       // const payload = { email: user.email, id: user.id };
        // return {
        //     ...user,
        //     access_token: this.jwtService.sign(payload),
        // };
    // }

    // async register(user: Partial<UserEntity>): Promise<Partial<UserEntity>> {
    //     try {
    //         const s = await this.userService.userRepo.save(user);
    //         return s;
    //     } catch (error) {
    //         return error;
    //     }
    // }
}
