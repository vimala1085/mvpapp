import { UserPipe } from './user.pipe';

describe('UserPipe', () => {
  it('create an instance', () => {
    const pipe = new UserPipe();
    expect(pipe).toBeTruthy();
  });

  it('Shoud return list of users using searchstring',()=>{
    const pipeInst=new UserPipe();     
    var users=[{'name': 'test'},{'name': 'test1'}]
    expect(pipeInst.transform(users,'test').length).toBeGreaterThan(0);
  })
});
