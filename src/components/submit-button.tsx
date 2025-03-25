import { useFormContext } from "@/hooks/useForm";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { loaderIcon } from "@/assets";

interface SubmitButtonProps {
  label: string;
  className?: string;
}

export default function SubmitButton({ label, className }: SubmitButtonProps) {
  const form = useFormContext();

  return (
    <form.Subscribe selector={(state) => [state.isSubmitting, state.canSubmit]}>
      {([isSubmitting, canSubmit]) => (
        <Button
          className={cn(
            "bg-primary-500 hover:bg-primary-600 cursor-pointer",
            className
          )}
          disabled={isSubmitting || !canSubmit}
        >
          {isSubmitting ? (
            <img className="size-6" src={loaderIcon} alt="loader icon" />
          ) : (
            label
          )}
        </Button>
      )}
    </form.Subscribe>
  );
}
