'use client' // Needed for hooks like useRouter and useEffect

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUserStore } from '@/stores/useUserStore'
import { createClient } from '@/lib/supabase/client' // Use client for potential actions

export default function DashboardPage() {
  const router = useRouter()
  const { user, setUser } = useUserStore()
  const supabase = createClient()

  useEffect(() => {
    // Check if user is logged in on mount, redirect if not
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session?.user) {
        router.push('/') // Redirect to login page
      } else {
        // Ensure user state is up-to-date
        if (!user) {
          setUser(session.user);
        }
      }
    })

    // Listen for auth changes (e.g., logout)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
       if (event === 'SIGNED_OUT') {
         setUser(null)
         router.push('/')
       } else if (event === 'SIGNED_IN') {
         setUser(session?.user ?? null)
       }
    });

    return () => {
      subscription?.unsubscribe()
    }

  }, [router, user, setUser, supabase])

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Error logging out:', error)
    } else {
      setUser(null) // Clear user state immediately
      router.push('/') // Redirect to login page
    }
  }

  if (!user) {
    // Show loading state or null while checking auth/redirecting
    return <p>Loading authentication...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="mb-4">Welcome, {user.email}!</p>

      {/* Add placeholder content for the dashboard */}
      <div className="bg-card p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Your OKRs</h2>
        <p>Placeholder for OKR display or ReactFlow canvas.</p>
        {/* Add ReactFlow component here later */}
      </div>

      <div className="bg-card p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">AI Feature</h2>
        <p>Placeholder for OpenAI integration.</p>
        {/* Example: Button to trigger AI function */}
        {/* <button className="btn">Analyze Performance</button> */}
      </div>

      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-destructive text-destructive-foreground rounded hover:bg-destructive/90"
      >
        Logout
      </button>
    </div>
  )
} 