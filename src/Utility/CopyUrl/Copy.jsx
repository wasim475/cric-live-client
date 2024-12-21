import React, { useState, useEffect, useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MdContentCopy } from "react-icons/md";
import { stateInfo } from '../../provider/StateProvider';

const Copy = () => {
  const{Copyvalue, setCopyValue}= useContext(stateInfo)
  const [copied, setCopied] = useState(false);

  // Reset the copied state after 1.5 seconds
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 1500);

      // Cleanup timer on component unmount or copied state change
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <>
      <CopyToClipboard text={Copyvalue} onCopy={() => setCopied(true)}>
        <button> <MdContentCopy /> </button>
      </CopyToClipboard>

      {copied && <span className='absolute' style={{ color: 'red' }}> Match Link Copied!</span>}
    </>
  );
};

export default Copy;
