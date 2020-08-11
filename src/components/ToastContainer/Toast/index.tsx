import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Toast } from './styles';

const Toast: React.FC = () => {
  return (
    <Toast
      key={message.id}
      type={message.type}
      hasDescription={!!message.description}
    >
      <FiAlertCircle />

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Toast>
  );
};

export default Toast;
