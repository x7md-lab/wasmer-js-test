import * as Comlink from 'comlink';
import MyWorker from './worker?worker'

  function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  const worker = new MyWorker();
  const obj = Comlink.wrap(worker);
  await delay(1200);
  document.body.prepend(document.createTextNode('Output:'))
  document.querySelector("#output").innerHTML = await obj.stdout