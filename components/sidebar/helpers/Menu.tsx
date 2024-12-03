import Link from "next/link";
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOutIcon, MenuIcon, Settings, User } from "lucide-react";
import ShowAllUsers from "@/components/showAllUsers/ShowAllUsers";

export function SidebarMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link" className="border-transparent">
          <MenuIcon className="dark:text-[var(--grey-600)] scale-125" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 border-transparent ms-1">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Settings /> Settings
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"/"} className="flex gap-2 w-full">
              <ShowAllUsers>
                <User size={18} /> Users
              </ShowAllUsers>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <form
              action={async () => {
                "use server";

                await signOut({ redirectTo: "/signIn" });
              }}
              className="flex w-full"
            >
              <button
                type="submit"
                className="w-full flex-center !justify-start gap-2 text-left hover:text-[--red-500] active:text-[var(--red-900)]"
              >
                <LogOutIcon size={18} />
                Log Out
              </button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
