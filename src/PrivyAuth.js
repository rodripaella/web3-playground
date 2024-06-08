import React, { useState } from 'react';
import { usePrivy, useLoginWithEmail } from '@privy-io/react-auth';

function LoginWithEmail() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const { sendCode, loginWithCode } = useLoginWithEmail();
  const { ready, authenticated } = usePrivy();

  const handleSendCode = async () => {
    await sendCode({ email });
  };

  const handleLogin = async () => {
    await loginWithCode({ code });
  };

  return (
    <div>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleSendCode}>Send Code</button>
      <input type="text" placeholder="Code" onChange={(e) => setCode(e.target.value)} />
      <button onClick={handleLogin}>Log in</button>
      {ready && authenticated && <p>User authenticated</p>}
    </div>
  );
}

export default LoginWithEmail;
