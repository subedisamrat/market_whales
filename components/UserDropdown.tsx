// "use client";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { useRouter } from "next/navigation";
// import { Button } from "./ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import { LogOut } from "lucide-react";
// import NavItems from "./NavItems";
// import { signOut } from "@/lib/actions/auth.actions";

// const UserDropdown = ({ user }: { user: User }) => {
//   const router = useRouter();

//   const handleSignOut = async () => {
//     await signOut();
//     router.push("/sign-in");
//   };

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button
//           variant="ghost"
//           className="flex items-center gap-3 text-gray-400 hover:text-yellow-600"
//         >
//           <Avatar className="h-8 w-8">
//             <AvatarImage src="https://avatars.githubusercontent.com/u/161034408?s=400&u=bb773258fe11b3a91bbfef96da9080aff0b9c32a&v=4" />
//             <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
//               {user.name[0]}
//             </AvatarFallback>
//           </Avatar>
//           <div className="hidden md:flex flex-col items-start">
//             <span className="text-base font-medium text-gray-400">
//               {user.name}
//             </span>
//           </div>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="text-gray-400">
//         <DropdownMenuLabel>
//           <div className="flex relative items-center gap-3 py-2">
//             <Avatar className="h-10 w-10">
//               <AvatarImage src="https://avatars.githubusercontent.com/u/161034408?s=400&u=bb773258fe11b3a91bbfef96da9080aff0b9c32a&v=4random" />
//               <AvatarFallback className="bg-yellow-500 text-yellow-500 text-sm font-bold">
//                 {user.name[0]}
//               </AvatarFallback>
//             </Avatar>
//             <div className="flex flex-col">
//               <span className="text-base font-medium text-gray-400">
//                 {user.name}
//               </span>
//               <span className="text-sm text-gray-500">{user.email}</span>
//             </div>
//           </div>
//         </DropdownMenuLabel>
//         <DropdownMenuSeparator className="bg-gray-600" />
//         <DropdownMenuItem
//           onClick={handleSignOut}
//           className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer"
//         >
//           <LogOut className="h-4 w-4 mr-2 sm:block" /> Logout
//         </DropdownMenuItem>
//         <DropdownMenuSeparator className="hidden bg-gray-600 sm:block" />
//         <nav className="sm:hidden">
//           <NavItems />
//         </nav>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// };

// export default UserDropdown;

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
          className="flex items-center gap-3 text-gray-400 hover:text-yellow-600 hover:bg-gray-800/50 p-2 rounded-md transition-all duration-200 relative z-50"
        >
          <Avatar className="h-8 w-8 border border-gray-600">
            <AvatarImage src="https://avatars.githubusercontent.com/u/161034408?s=400&u=bb773258fe11b3a91bbfef96da9080aff0b9c32a&v=4" />
            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:flex flex-col items-start">
            <span className="text-base font-medium text-gray-400">
              {user.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="text-gray-400 z-50 w-56 bg-gray-900 border-gray-700 mt-2"
        align="end"
        sideOffset={5}
      >
        <DropdownMenuLabel className="p-0">
          <div className="flex items-center gap-3 py-3 px-2">
            <Avatar className="h-10 w-10 border border-gray-600">
              <AvatarImage src="https://avatars.githubusercontent.com/u/161034408?s=400&u=bb773258fe11b3a91bbfef96da9080aff0b9c32a&v=4" />
              <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-base font-medium text-gray-200">
                {user.name}
              </span>
              <span className="text-sm text-gray-400">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-600" />
        <DropdownMenuItem
          onClick={handleSignOut}
          className="text-gray-200 text-md font-medium focus:bg-gray-800 focus:text-yellow-500 hover:bg-gray-800 hover:text-yellow-500 transition-colors cursor-pointer py-3"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-gray-600 sm:hidden" />
        <nav className="sm:hidden px-2 py-2">
          <NavItems />
        </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
