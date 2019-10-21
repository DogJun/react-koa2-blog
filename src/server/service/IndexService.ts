import { IIdex } from '../interface/IIndex';
import { User } from '../model/User';
import { TAGS, provide } from '../ioc/ioc';
@provide(TAGS.IndexService)
export class IndexService implements IIdex {
  private userStorage: User[] = [
    {
      email: 'huangwenjun@codemao.cn',
      name: 'DogJun',
    },
    {
      email: 'taoyifei@codemao.cn',
      name: 'taoyifei',
    },
  ];
  public getUser(id: string): User {
    const result: User = this.userStorage[id];
    return result;
  }
}