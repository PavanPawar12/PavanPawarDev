import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export function Command({ className, ...props }) {
  return (
    <CommandPrimitive
      className={cn(
        "flex h-full w-full flex-col overflow-hidden rounded-xl bg-transparent",
        className
      )}
      {...props}
    />
  );
}

export function CommandDialog({ open, onOpenChange, children }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showClose={false}
        className="max-w-xl overflow-hidden p-0 top-[20%] translate-y-0"
        aria-label="Command menu"
      >
        <Command shouldFilter>{children}</Command>
      </DialogContent>
    </Dialog>
  );
}

export function CommandInput({ className, ...props }) {
  return (
    <div className="flex items-center gap-2 border-b border-[var(--border)] px-4">
      <Search className="h-4 w-4 shrink-0 text-[var(--text-muted)]" />
      <CommandPrimitive.Input
        className={cn(
          "flex h-12 w-full bg-transparent py-3 text-sm text-[var(--text)]",
          "placeholder:text-[var(--text-muted)] outline-none disabled:opacity-50",
          className
        )}
        {...props}
      />
    </div>
  );
}

export function CommandList({ className, ...props }) {
  return (
    <CommandPrimitive.List
      className={cn("max-h-80 overflow-y-auto overflow-x-hidden p-2", className)}
      {...props}
    />
  );
}

export function CommandEmpty(props) {
  return (
    <CommandPrimitive.Empty
      className="py-6 text-center text-sm text-[var(--text-muted)]"
      {...props}
    />
  );
}

export function CommandGroup({ className, ...props }) {
  return (
    <CommandPrimitive.Group
      className={cn(
        "overflow-hidden p-1 text-[var(--text-muted)]",
        "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5",
        "[&_[cmdk-group-heading]]:font-mono-label [&_[cmdk-group-heading]]:text-[11px]",
        "[&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider",
        className
      )}
      {...props}
    />
  );
}

export function CommandItem({ className, ...props }) {
  return (
    <CommandPrimitive.Item
      className={cn(
        "relative flex cursor-pointer select-none items-center gap-2 rounded-lg px-2 py-2.5",
        "text-sm text-[var(--text)] outline-none",
        "data-[selected=true]:bg-[var(--surface-2)] data-[selected=true]:text-[var(--accent)]",
        className
      )}
      {...props}
    />
  );
}
