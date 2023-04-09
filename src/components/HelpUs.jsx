import React, { useEffect, useRef, useState } from 'react';

export const HelpUs = () => {
  const packages = [
    { packageType: 'one-off', price: 10 },
    { packageType: 'one-off', price: 50 },
    { packageType: 'monthly', price: 2, packageName: 'paws' },
    { packageType: 'monthly', price: 5, packageName: 'tail' },
    { packageType: 'monthly', price: 10, packageName: 'purr' },
    { packageType: 'monthly', price: 20, packageName: 'catnip' },
  ];
  const [selection, setSelection] = useState('monthly');
  const switchPackages = (ev) => {
    setSelection(ev.target.dataset.id);
  };
  const monthlyBtn = useRef();
  useEffect(() => {
    monthlyBtn.current.focus();
  }, []);

  return (
    <section className='helpUs'>
      <h3>choose your donation</h3>
      <article>
        <button data-id='one-off' onClick={switchPackages}>
          one-off
        </button>
        <button ref={monthlyBtn} data-id='monthly' onClick={switchPackages}>
          monthly
        </button>
      </article>
      <div>
        {packages
          .filter((pkg) => pkg.packageType === selection)
          .map((pkg) => {
            return (
              <article
                key={crypto.randomUUID()}
                className={pkg.packageType === 'monthly' ? 'monthly' : 'oneOff'}
              >
                <span>{pkg.packageType}</span>
                <p>{pkg.price}</p>
                <p>
                  Can you spare £{pkg.price}
                  {pkg.packageType === 'monthly' ? ' a month' : ''}?
                </p>
                <p>Every penny helps</p>

                <input type='button' value='donate' className='btn primaryBtn' />
              </article>
            );
          })}
      </div>
    </section>
  );
};
