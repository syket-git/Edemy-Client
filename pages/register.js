import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ name, email, password });
  };
  return (
    <div className="font-body">
      <div className=" bg-red-400 text-center py-10">
        <h1 className="text-white text-4xl">Register</h1>
      </div>
      <div className="w-full md:w-6/12 mx-auto my-20 p-10 rounded bg-white shadow-xl">
        <h2 className="text-2xl text-center text-semibold">
          Create an account
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
