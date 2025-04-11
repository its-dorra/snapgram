import { useFieldContext } from "@/hooks/useForm";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface TextFieldProps {
  label: string;
  className?: string;
  isObsucred?: boolean;
  inputType?: "input" | "text-area";
}

export default function TextField({
  label,
  className,
  isObsucred,
  inputType = "input",
}: TextFieldProps) {
  const field = useFieldContext<string>();

  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col gap-3">
        <Label className="text-light-2">{label}</Label>
        {inputType === "input" ? (
          <Input
            className={cn(
              "bg-dark-4 w-full rounded-sm border-none outline-none focus-visible:ring-0",
              className,
            )}
            type={isObsucred ? "password" : "text"}
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            onBlur={field.handleBlur}
          />
        ) : (
          <Textarea
            className={cn(
              "bg-dark-4 w-full resize-none rounded-sm border-none outline-none focus-visible:ring-0",
              className,
            )}
            rows={4}
            value={field.state.value}
            onChange={(e) => field.handleChange(e.target.value)}
            onBlur={field.handleBlur}
          />
        )}
      </div>
      <div>
        {field.state.meta.errors.map((error, i) => (
          <div key={i} className="text-sm text-red-500">
            {error.message}
          </div>
        ))}
      </div>
    </div>
  );
}
