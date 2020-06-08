class TextCreate {
  constructor() {
    const elem = document.createElement('input');
    elem.type = 'text';
    return elem
  }
}

class PasswordCreate {
  constructor() {
    const elem = document.createElement('input');
    elem.type = 'password';
    return elem
  }
}

class TextareaCreate {
  constructor() {
    const elem = document.createElement('textarea');
    elem.name = 'myTextarea';
    elem.cols = 30;
    elem.rows = 10;
    return elem;
  }
}

export class Factory {

  create(type = 'text') {
    let elem;
    switch (type) {
      case 'text': {
        elem = new TextCreate();
        break; 
      }
      case 'password': {
        elem = new PasswordCreate();
        break; 
      }
      case 'textarea': {
        elem = new TextareaCreate();
        break; 
      }
    }

    elem.clear = function() {
      this.value = '';
    }

    return elem;
  }
};
