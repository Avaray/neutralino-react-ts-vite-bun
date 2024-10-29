// import { app, events, os, computer } from "@neutralinojs/lib";
import { os } from "@neutralinojs/lib";

export default function Info() {
  const showNotification = () => {
    os.showNotification('This is title', 'This is message');
  };

  const showMessageBox = () => {
    os.showMessageBox(
      'This is title',
      'This is message',
    );
  };

  return (
    <>
      <div className="flex flex-grow p-3 m-8px flex-col justify-between">
        <div className=''>
          <p>Operating System: <span className='font-bold'>{NL_OS} {NL_ARCH}</span></p>
          <p>Framework version: <span className='font-bold'>{NL_VERSION}</span></p>
          <p>Client version: <span className='font-bold'>{NL_CVERSION}</span></p>
          <p>Mode: <span className='capitalize font-bold'>{NL_MODE}</span></p>
        </div>
        <div className=''>
          <button className='btn btn-lg btn-primary mb-2 mr-2' onClick={showNotification} type='button'>Show Notification</button>
          <button className='btn btn-lg btn-accent mb-2 mr-2' onClick={showMessageBox} type='button'>Show Message Box</button>
        </div>
      </div>
      <div className="flex-grow p-4 mr-3vw">
        {/* i-gameicon image fit to window aspect square */}
        <svg className="i-simple-icons:neutralinojs h-full w-full op-3" />
      </div>
    </>


  );
}
