import { Alert, AlertTitle } from "@repo/ui/components/alert";
import { AlertCircle } from "lucide-react";

interface Props {
  children: React.ReactNode | undefined;
  variant?: "default" | "destructive";
}

export default function Message({ children, variant }: Props) {
  if (children === undefined) return null;

  return (
    <Alert variant={variant}>
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{children}</AlertTitle>
    </Alert>
  );
}
