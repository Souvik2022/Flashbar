import { useEffect } from 'react';
import { useRouter } from 'next/router';

// A HOC that redirects to the homepage if the user is not authenticated
// You can use this to protect pages that require authentication
const withAuth = (WrappedComponent) => {
  return function AuthenticatedComponent(props) {
    const router = useRouter();

    useEffect(() => {
      // For now, just redirect to homepage
      // You can add your authentication logic here
      const isAuthenticated = false; // Replace with your auth check
      if (!isAuthenticated) {
        router.push('/'); // Redirect to homepage if not authenticated
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;