import {redirect} from 'next/navigation';
import {cookies} from 'next/headers';
import LogoutButton from '../myComponents/auth/LogoutButton';


export default async function AdminLayout({ 
      children,
}:{children: React.ReactNode

}) {
    const authToken = (await cookies()).get('auth-token')?.value

    if(!authToken){
        redirect('/auth/login')
    }
  return (
     <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <LogoutButton />
        {children}
    </div>
    </div>
  )
}