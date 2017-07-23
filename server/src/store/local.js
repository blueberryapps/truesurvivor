import { observable, action, toJS, computed } from 'mobx';

class LocalStore {
  @observable session = new Map([
    ['my_cid', '123'],
    ['my_uid', '321'],
  ])

  @action.bound get_session() {
    return toJS(this.session);
  }
  @action.bound set_session({my_cid, my_uid}) {
    console.log('session set')
    this.session.set('my_cid', my_cid);
    this.session.set('my_uid', my_uid);
  }

  @computed get cid() {
    return toJS(this.session.get('my_cid'))
  }
  @computed get uid() {
    return toJS(this.session.get('my_uid'))
  }

}

export default LocalStore;
