import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, LogOutIcon, MenuIcon, Settings } from "lucide-react";

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
            <form
              action={async () => {
                "use server";

                await signOut({ redirectTo: "/auth/signIn" });
              }}
              className="flex w-full"
            >
              <button
                type="submit"
                className="w-full flex-center !justify-start gap-2 text-left"
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
