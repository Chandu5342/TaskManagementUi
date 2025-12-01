import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Home() {
  const { user, token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate('/dashboard');
    }
  }, [token, navigate]);

  if (token) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Task Manager
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Organize, collaborate, and complete your tasks with ease
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/login"
              className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-200 shadow-md"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition duration-200 shadow-md"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Create Tasks</h3>
            <p className="text-gray-600">Easily create and organize tasks with descriptions, priorities, and due dates</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Assign & Track</h3>
            <p className="text-gray-600">Assign tasks to team members and track progress in real time</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Upload Files</h3>
            <p className="text-gray-600">Attach documents and files directly to your tasks</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-indigo-600 rounded-lg shadow-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-indigo-100 mb-8 text-lg">Join thousands of users managing their tasks efficiently</p>
          <Link
            to="/register"
            className="inline-block px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition duration-200"
          >
            Create Free Account
          </Link>
        </div>
      </div>
    </div>
  );
}
