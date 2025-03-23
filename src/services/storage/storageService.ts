import {
  BaseStoreManager,
  LocalStorageManager,
} from '../../utils/storage/storageManagers';

export class StorageService {
  static #instance: StorageService;
  private manager: BaseStoreManager;

  constructor(manager: BaseStoreManager) {
    this.manager = manager;
  }

  get(key: string) {
    return this.manager.getItem(key);
  }

  set(key: string, value: string) {
    this.manager.setItem(key, value);
  }

  remove(key: string) {
    this.manager.removeItem(key);
  }

  clear() {
    this.manager.clear();
  }

  public static get instance() {
    if (!StorageService.instance) {
      const manager = new LocalStorageManager();
      StorageService.#instance = new StorageService(manager);
    };
    return StorageService.#instance;
  }
};