import { Injectable } from '@nestjs/common';
import { UserData, UserResponse } from './interface/user';
interface IUserService {
  getAllUsers(): Promise<UserResponse>;
}
@Injectable()
export class UserService implements IUserService {
  async getAllUsers(): Promise<UserResponse> {
    try {
      const user: UserData[] = [
        {
          id: 1,
          name: 'John Doe',
          email: 'asd@gmail.com',
          age: 4,
          address: 'asdas',
          phone: '123-2131-23',
        },
      ];
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
      return {
        success: true,
        message: 'Berhasil Mendapatkan Data',
        error: false,
        data: user,
      };
    } catch (error: any) {
      console.info(error);
      return {
        success: false,
        message: 'Gagal Mendapatkan Data',
        error: true,
      };
    }
  }
}
