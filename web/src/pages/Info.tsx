// import { app, events, os, computer } from "@neutralinojs/lib";
import { useEffect, useState } from 'react';
import { os, computer } from "@neutralinojs/lib";
import { Centered } from '../components/Centered';

export default function Info() {
  const [osInfo, setOsInfo] = useState({ name: '', version: '' });
  const [loading, setLoading] = useState(true);

  const showNotification = () => {
    os.showNotification('This is title of notification', 'And this is message. It should be displayed in notifications area.');
  };

  const showMessageBox = () => {
    os.showMessageBox(
      'This is title of message box',
      'And this is message. It should be displayed in message box.',
    );
  };

  useEffect(() => {
    const fetchOSInfo = async () => {
      try {
        const info = await computer.getOSInfo();
        setOsInfo(info);
      } catch (error) {
        console.error("Error fetching OS info:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOSInfo();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="flex-grow p-4 ml-3vw flex items-center">
        <div>
          <p>Operating System: {NL_OS} {NL_ARCH}</p>
          <p>Framework version: {NL_VERSION}</p>
          <p>Client version: {NL_CVERSION}</p>
          <p>Mode: {NL_MODE}</p>
          <p>App path: {NL_RESMODE}</p>
        </div>
      </div>
      <div className="flex-grow p-4 mr-3vw ">
        {/* i-gameicon image fit to window aspect square */}
        <svg className="i-simple-icons:neutralinojs op-3 h-full w-full" />
      </div>
    </>


  );
}
