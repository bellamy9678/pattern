export class Singleton {
  constructor() {
    return Singleton.getInstance()
  }

  static privateVar = "privateVar";
  static instance = null;

  static init() {
    return {
      a: 1,
      getPrivate: () => {
        console.log(Singleton.privateVar);
      },
    };
  }

  static getInstance() {
    if (Singleton.instance === null) {
      Singleton.instance = Singleton.init();
    }
    return Singleton.instance;
  }

};
