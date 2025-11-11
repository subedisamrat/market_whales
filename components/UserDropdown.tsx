"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LogOut } from "lucide-react";
import NavItems from "./NavItems";
import { signOut } from "@/lib/actions/auth.actions";

const UserDropdown = ({ user }: { user: User }) => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/sign-in");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-3 text-gray-400 hover:text-yellow-600 hover:bg-gray-800/50 p-2 rounded-lg transition-all duration-200 relative z-50 group"
        >
          <Avatar className="h-8 w-8 border border-gray-600 group-hover:border-yellow-500/50 transition-colors cursor-pointer">
            <AvatarImage src="/assets/images/profile.png" alt="Profile" />
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold transition-colors group-hover:bg-yellow-600">
              {user.name?.[0]?.toUpperCase() || "U"}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col items-start">
            <span className="text-base font-medium text-gray-400 group-hover:text-yellow-600 transition-colors">
              {user.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="text-gray-400 z-50 w-64 bg-gray-900 border-gray-700 mt-2 rounded-lg shadow-xl"
        align="end"
        sideOffset={8}
        collisionPadding={16}
      >
        <DropdownMenuLabel className="p-0 hover:bg-transparent focus:bg-transparent">
          <div className="flex items-center gap-3 py-3 px-3 rounded-t-lg">
            <Avatar className="h-11 w-11 border border-gray-600">
              <AvatarImage src="/assets/images/profile.png" alt="Profile" />
              <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                {user.name?.[0]?.toUpperCase() || "U"}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-base font-semibold text-gray-200 truncate">
                {user.name}
              </span>
              <span className="text-sm text-gray-400 truncate">
                {user.email}
              </span>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="bg-gray-600 mx-2" />

        <DropdownMenuItem
          onClick={handleSignOut}
          className="text-gray-200 text-md font-medium focus:bg-gray-800 focus:text-yellow-500 hover:bg-gray-800 hover:text-yellow-500 active:bg-gray-750 transition-colors cursor-pointer py-3 px-3 my-1 rounded-md"
        >
          <LogOut className="h-4 w-4 mr-3 shrink-0" />
          <span>Logout</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="bg-gray-600 sm:hidden mx-2" />

        <nav className="sm:hidden px-3 py-2">
          <NavItems />
        </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
