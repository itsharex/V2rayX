import { useState } from 'react';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import icon from '../public/icon.png';

const AboutPage = (): JSX.Element => {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const handleCheckUpdate = () => {
    window.update.checkForUpdate();
    // if (updateAvailable) {
    //   window.update.quitAndInstall();
    // }
  };
  window.electron.electronAPI.ipcRenderer.on('update-available', (status) => {
    setUpdateAvailable(status);
  });
  return (
    <section className="flex flex-row items-center justify-around">
      <div className="items-center justify-around rounded-xl bg-white p-9 dark:bg-slate-700 text-black dark:text-white">
        <div className="m-4 flex flex-col items-center">
          <img src={icon} alt="" className="m-4 h-24 w-24" />
          <p className="text-xl text-slate-700 dark:text-white">V2rayX({window.electron.store.get('appVersion')})</p>
        </div>
        <p>An all platform(Macos Windows Linux) V2ray client build with electron.</p>
        <div className="my-4 flex flex-row gap-2">
          <Button variant="outlined" className="relative" onClick={handleCheckUpdate}>
            {!updateAvailable || true ? 'CHECK UPDATE' : 'INSTALL PDATE'}
            {updateAvailable ? (
              <span className="absolute right-[-4px] top-[-4px] h-2 w-2 rounded-full bg-blue-400"></span>
            ) : null}
          </Button>
          <Button variant="outlined" onClick={()=>{
            window.electron.electronAPI.shell.openExternal('https://github.com/shaonhuang/V2rayX')
          }}>HOMEPAGE</Button>
          <Button variant="outlined" onClick={()=>{
            window.electron.electronAPI.shell.openExternal('https://t.me/V2rayX_electron')
          }}>FEEDBACK</Button>
          <Button variant="outlined" onClick={()=>{
            window.electron.electronAPI.shell.openExternal('https://github.com/shaonhuang/V2rayX#ii-features')
          }}>ROADMAP</Button>
        </div>
      </div>
    </section>
  );
};
export default AboutPage;
