import { isPending, type Pending } from "@/content/site";

/** Renders a supplied value, or its placeholder label visibly marked as such. */
export function PendingText({ value }: { value: string | Pending }) {
	if (isPending(value)) return <span className="text-faint italic">{value.label}</span>;
	return <>{value}</>;
}
