import BaseRequester from './BaseRequester'
import APIConstants from './APIConstants'
import LocalStorage from '../helpers/LocalStorage'

class UserRequester extends BaseRequester {

  static async getCurrentUser() {
    try {
      localUser = await LocalStorage.getUser();
      currentUser = await BaseRequester.get(APIConstants.users.user(localUser.id));
      LocalStorage.storeUser(currentUser);
      return Promise.resolve(currentUser);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async updateUser(user) {
    params = {
      marketplace_user: {
        first_name: user.first_name,
        last_name: user.last_name,
        company_name: user.company_name,
        email: user.email,
      },
      onfleet_driver_id: user.onfleet_driver_id,
      onfleet_user: {
        name: `${user.first_name} ${user.last_name}`,
      }
    }

    try {
      user = await BaseRequester.patch(APIConstants.users.user(user.id), params);
      LocalStorage.storeUser(user);
      return Promise.resolve(user);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static async updateRegion(user_id, region) {
    params = {
      marketplace_user: {
        marketplace_region_id: region.id,
      }
    }

    try {
      user = await BaseRequester.patch(APIConstants.users.user(user_id), params);
      LocalStorage.storeUser(user);
      return Promise.resolve(user);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  static updatePassword(user_id, current_password, new_password, new_password_confirmation) {
    params = {
      marketplace_user: {
        current_password: current_password,
        password: new_password,
        password_confirmation: new_password_confirmation,
      }
    }

    return BaseRequester.patch(APIConstants.login.changePassword(user_id), params);
  }
}

export default UserRequester;
