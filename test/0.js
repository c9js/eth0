/*────────────────────────────────────────────────────────────────────────────────────────────────*/

Object.defineProperties(global,{__:{set:v=>process.exit(_=v)},_:{set:console.log}});
Object.defineProperty(global, '$', {value:{}});

/*▄────────▄
  █        █
  █  Eth0  █
  █        █
  ▀────────▀*/
$.eth0 = {};

/*▄──────────▄
  █          █
  █  Сервер  █
  █          █
  ▀──────────▀*/
Object.defineProperty($.eth0, 'server', {set: (item) => {
    _=item
}});

$.eth0.server = class {
/*┌────────────────────────────────────┐
  │ Обрабатывает запрос на перевод TRX │
  └────────────────────────────────────┘*/
    'sendTRX' = (request) => {
        _=['Запрос от Клиента!', request]
        this.send(['Message #2']);
    }
};
