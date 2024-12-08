import { useState } from 'react'
import { WebContainer} from "@webcontainer/api";
import {files} from "./files";
function App() {
  const [count, setCount] = useState(0)

let webContainerInstance ; 

window.addEventListener('load',async () => {
    webContainerInstance = await WebContainer.boot();

    await webContainerInstance.mount(files);
    console.log("hi")
    // so i am reading a file , like to confirm that the files were mounted into containers.
    const packageJson = await webContainerInstance.fs.readFile('package.json','utf-8');
    console.log(packageJson);
})

  return (
    <>
     
    </>
  )
}

export default App
