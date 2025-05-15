import React from 'react'
import PostForm from '../myComponents/admin/PostForm'
import Postlist from '../myComponents/admin/PostList'

function page() {
  return (
    <div className=''>
      <h1 className='text-2xl text-center'>Dashboard</h1>
     
      <Postlist />
      
    </div>
  )
}

export default page