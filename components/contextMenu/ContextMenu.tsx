import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import DeleteMessage from "../util/DeleteMessage";
import { writeClient } from "@/sanity/lib/write-client";

export function ShadcnContextMenu({
  children,
  messageId,
  id,
}: {
  children: React.ReactNode;
  messageId: string;
  id: string;
}) {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="">{children}</ContextMenuTrigger>
      <ContextMenuContent className="w-64 border-none">
        <ContextMenuItem>
          <form
            action={async () => {
              "use server";

              await writeClient.delete(id);
            }}
          >
            <DeleteMessage id={messageId} />
          </form>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
