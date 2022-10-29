import { useState } from 'react'
import { HashRouter, Routes, Route } from "react-router-dom";

// Layout
import { Layout } from "@/components/Layout";

//Pages
import { Home } from "@/pages/Home";
import { NotFound } from "@/pages/NotFound";
import { Blog } from "@/pages/Blog";
import { BlogPost } from "@/pages/BlogPost";
import { Login } from "@/pages/Login";
import { Logout } from "@/pages/Logout";
import { Profile } from "@/pages/Profile";


// Auth
import { AuthProvider, AuthRoute } from "@/auth";


function App() {

  return (
    <>
      
      <HashRouter>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/blog" element={<Blog />}>
                <Route path=":slug" element={<BlogPost />} />
              </Route>

              <Route path="/login" element={<Login />} />
              
              <Route 
                path="/logout" 
                element={
                <AuthRoute>
                  <Logout />
                </AuthRoute>
                } 
              />

              <Route 
                path="/profile" 
                element={
                <AuthRoute>
                  <Profile />
                </AuthRoute>
                } 
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App
