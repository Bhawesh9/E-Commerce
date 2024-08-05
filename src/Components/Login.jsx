import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Hook to handle navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      // Simulate successful login and redirect to home page
      navigate('/');
    }, 1000);
  };

  return (
    <div className='flex justify-evenly w-full h-full'>

    <div className='bg-zinc-300 w-full'>
      <div className='mt-[10px'>
        <p className='text-2xl font-bold text-center'>Wear Your Confidence</p>
        <p className='text-sm font-normal text-center'>Discover outfits that empower you. Our collection is designed to boost <br/> your confidence and style, making you feel unstoppable every day.</p>
      </div>

      <div className=' mx-auto h-auto '>
      <img className='object-cover overflow-hidden ml-14' src="Discover.png" alt=''/>

      </div>
    </div>
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-white w-full">
      <h1 className="text-4xl font-bold mb-8">KWAAN.</h1>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Sign in <span role="img" aria-label="cart">🛒</span></h2>
        <p className="mb-6 text-gray-600">Please enter your correct information</p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <div className="text-red-600">{error}</div>}
          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Mail</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Mail" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
              <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>
            <a href="/Login" className="text-sm text-indigo-600 hover:text-indigo-500">Forgot Password?</a>
          </div>
          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-2 px-4 bg-black text-white font-semibold rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-400">Or Sign Up with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black">
              <FontAwesomeIcon icon={faFacebookF} />
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-black">
              <FontAwesomeIcon icon={faGoogle} />
            </button>
          </div>
          <div className="text-center mt-4 text-sm">
            Don't you have an account? <a href="/Signup" className="text-indigo-600 hover:text-indigo-500">Sign UP</a>
          </div>
        </form>
      </div>
    </div>

    </div>
  );
}

export default Login;
