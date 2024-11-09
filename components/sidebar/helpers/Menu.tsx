import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut, LogOutIcon, MenuIcon } from "lucide-react";

export function SidebarMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link">
          <MenuIcon className="dark:text-[var(--accent-grey-800)] scale-125" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem>Settings</DropdownMenuItem>
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
                <LogOutIcon size={16} />
                <span className="max-sm:hidden">Log Out</span>
                <LogOut className="size-6 sm:hidden text-red-500" />
              </button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
