import { observable, action, toJS } from 'mobx';

class LocalStore {
  @observable session = new Map([
    ['my_cid', '123'],
    ['my_uid', '321'],
  ])

  @action.bound get_session() {
    return toJS(this.session);
  }
  @action.bound set_session(session) {
    console.log('settti')
    this.session.set(session);
  }

}

export default LocalStore;
