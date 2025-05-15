import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { PanelLeft, LogOut } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default async function AdminLayout({ 
  children,
}: {
  children: React.ReactNode
}) {
  const authToken = (await cookies()).get('auth-token')?.value;

  if (!authToken) {
    redirect('/auth/login');
  }

  return (
    <div className="flex min-h-screen w-full">
      {/* Desktop Sidebar - Always visible on desktop */}
      <div className="hidden border-r bg-muted/40 md:block w-64">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px]">
            <Link href="/admin" className="flex items-center gap-2 font-semibold">
              <span>Admin Panel</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-1">
              <Link
                href="/admin/newPost"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                New Post
              </Link>
              <Link
                href="/admin"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                All Posts
              </Link>
              <Link
                href="/admin/categories"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                Categories
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <form action="/api/logout" method="POST">
              <Button variant="outline" className="w-full gap-2">
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Mobile Header with Toggle Button */}
      <div className="flex flex-col md:hidden w-full">
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 lg:h-[60px]">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col p-0 bg-white">
              <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px]">
                  <span className="font-semibold">
                    <Image
                    src={"/logo.png"}
                    alt='Zaxbox-log'
                    width={30}
                    height={30}
                     />
                  </span>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-1 py-2">
                    <Link
                      href="/admin/newPost"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                      New Post
                    </Link>
                    <Link
                      href="/admin"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                      All Posts
                    </Link>
                    <Link
                      href="/admin/categories"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                      Categories
                    </Link>
                  </nav>
                </div>
                <div className="mt-auto p-4">
                  <form action="/api/logout" method="POST">
                    <Button variant="outline" className="w-full gap-2">
                      <LogOut className="h-4 w-4" />
                      Logout
                    </Button>
                  </form>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <h1 className="text-lg font-semibold">Zaxbox</h1>
          </div>
        </header>

        {/* Main Content for Mobile */}
        <main className="flex-1 p-4 overflow-auto">
          {children}
        </main>
      </div>

      {/* Main Content for Desktop */}
      <div className="hidden md:flex flex-col flex-1">
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}