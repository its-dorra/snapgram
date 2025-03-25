import { useFieldContext } from "@/hooks/useForm";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

interface TextFieldProps {
  label: string;
  className?: string;
  isObsucred?: boolean;
}

export default function TextField({
  label,
  className,
  isObsucred,
}: TextFieldProps) {
  const field = useFieldContext<string>();

  return (
    <div className="flex flex-col gap-1 ">
      <div className="flex flex-col gap-3">
        <Label className="text-light-2">{label}</Label>
        <Input
          className={cn(
            "w-full rounded-sm bg-dark-4 outline-none focus-visible:ring-0 border-none",
            className
          )}
          type={isObsucred ? "password" : "text"}
          value={field.state.value}
          onChange={(e) => field.handleChange(e.target.value)}
          onBlur={field.handleBlur}
        />
      </div>
      <div>
        {field.state.meta.errors.map((error, i) => (
          <div key={i} className="text-red-500 text-sm">
            {error.message}
          </div>
        ))}
      </div>
    </div>
  );
}
