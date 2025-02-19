import React, { Component, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}

const ErrorFallback = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-2xl font-bold mb-4">Something went wrong.</h1>
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorBoundary;
