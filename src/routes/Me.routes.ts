import { RoutesBase } from '../common/services/RoutesBase';
import { userCtrl } from '../controllers/UserController';

class MeRoutes extends RoutesBase {

  constructor() {
    super();
  }

  init(): void {
    this.router.get('/me', userCtrl.test);
  }

}

export default (new MeRoutes()).router;