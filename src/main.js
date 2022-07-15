import * as Comlink from 'comlink';
// import { init, WASI } from '@wasmer/wasi';
// await init();

// const wasi = new WASI({
//   env: {
//       // 'ENVVAR1': '1',
//       // 'ENVVAR2': '2'
//   },
//   args: [
//       'qjs' // 'qjs', '--help'
//   ],
//   bindings: {
//     ...WASI.defaultBindings,
//   }
// });

// const moduleBytes = fetch("./qjs.wasm");
// const module = await WebAssembly.compileStreaming(moduleBytes);
// // Instantiate the WASI module
// console.log(wasi)
// await wasi.instantiate(module, {
  
// });

// // Run the start function
// // let exitCode = wasi.start();
// let stdout = wasi.getStdoutString();

 // This should print "hello world (exit code: 0)"
// console.log(`${stdout}`);

  const worker =  new Worker(new URL('./worker.js', import.meta.url), {
      type: 'module'
  })

  const obj = Comlink.wrap(worker);
  console.log(`std.out:`, await obj.stdout)
  // for (let i = 0; i < 10; i++){
  //   await obj.inc();
  // }
 