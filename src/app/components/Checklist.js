import React, { useState } from 'react';
import QRCode from "qrcode"

const Checklist = ({setSrc}) => {
  const [items, setItems] = useState([
    { id: 1, text: 'Phone Number', checked: false, value: '555-1801' },
    { id: 2, text: 'LinkedIn', checked: false, value: 'linkedIN Link' },
    { id: 3, text: 'GitHub', checked: false, value: 'GitHub Link' },
    { id: 4, text: 'Instagram', checked: false, value: 'Instagram Link' },
    { id: 5, text: 'Twitter', checked: false, value: 'Twitter Link' },
    { id: 6, text: 'Facebook', checked: false, value: 'Facebook Link' },
    { id: 7, text: 'Youtube', checked: false, value: 'Youtube Link' },
    { id: 8, text: 'Reddit', checked: false, value: 'Reddit Link' },
    { id: 9, text: 'Spotify', checked: false, value: 'Spotify Link' },
  ]);

  const [additionalData, setAdditionalData] = useState('');
  

  const handleCheckboxChange = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const handleSubmit = () => {
    // Collect data from checked items and additionalData state
    console.log('Checked Items:', items.filter(item => item.checked));
    console.log('Additional Data:', additionalData);
    // Add logic for further processing or submission
    QRCode.toDataURL('http://localhost:3000/user/generated').then(setSrc)
  };

  

  return (
    <div>
      <h2>Checklist</h2>
      {items.map(item => (
        <div key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange(item.id)}
            />
            {item.text}
          </label>
        </div>
      ))}
      <div>
        <label>
          Notes:
          <input
            type="text"
            value={additionalData}
            onChange={(e) => setAdditionalData(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleSubmit}>Generate!</button>
    </div>
  );
};

export default Checklist;