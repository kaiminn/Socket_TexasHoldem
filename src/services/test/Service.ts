import * as _ from 'lodash';
import 'reflect-metadata';
import { inject, provide } from '../../ioc/ioc';
import BaseService from '../../models/BaseService';
import Repository from './Repository';

@provide('TestServer')
export default class TestServer extends BaseService {
    constructor(@inject('TestRepository') private repository: Repository) { super(); }

    public async test(deskID, playID): Promise<any> {
        return this.repository.test(deskID, playID);
    }
}
