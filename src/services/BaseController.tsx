import { requestData } from './utils/request'

export abstract class BaseController {
  protected readonly requestData = requestData
}
