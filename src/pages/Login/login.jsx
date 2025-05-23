import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import ContinueWithGoogle from './ContinuewithGoogle';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-[#0D0D0D] text-white flex flex-col justify-center items-center px-6 space-y-8 overflow-hidden">
      {/* 💡 Top Gradient Glow */}
      <div
        className="absolute top-[-150px] left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-[#9333EA] via-[#7B2CBF] to-transparent opacity-50 blur-[80px] z-0"
      />

      {/* 🔒 Main Content */}
      <div className="relative z-10 w-full max-w-sm space-y-8">
        {/* Logo and Subtext */}
        <div className="text-center space-y-2">
          <h1 className="text-6xl font-bold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">OUTFLOW</h1>
          <p className="text-sm text-gray-400 mt-2">Get started with us</p>
          <p className="text-xs text-gray-500">Complete a simple authentication process</p>
        </div>

        {/* Sign-in Buttons */}
        <div className="space-y-4">
          {/* Email and Password Login */}
          <button
            className="flex items-center justify-center gap-3 w-full py-3 px-4 rounded-full bg-white text-black font-medium text-sm shadow-md hover:bg-gray-100 transition-colors"
            onClick={() => navigate('/email')}
          >
            <FaEnvelope size={18} />
            Sign in with Email
          </button>

          {/* Google Login */}
          <ContinueWithGoogle />
        </div>

        {/* Terms and Privacy */}
        <div className="text-gray-500 text-xs mt-8 text-center mx-auto max-w-xs">
          By signing in, you agree to our{' '}
          <span 
            className="underline cursor-pointer hover:text-gray-300" 
            onClick={() => navigate('/terms')}
          >
            Terms
          </span>{' '}
          and{' '}
          <span 
            className="underline cursor-pointer hover:text-gray-300" 
            onClick={() => navigate('/privacy')}
          >
            Privacy Policy
          </span>.
        </div>
      </div>
    </div>
  );
}