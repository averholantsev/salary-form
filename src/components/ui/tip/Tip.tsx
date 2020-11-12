import React, { useState } from 'react';
import './Tip.scss';

interface TipProps {
  hint: string;
}

export const Tip = (props: TipProps) => {
  const { hint } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className="tip-container">
      <div
        className={open ? 'tip active' : 'tip'}
        onClick={() => setOpen(!open)}
      ></div>
      {open ? <div className="hint">{hint}</div> : null}
    </div>
  );
};
