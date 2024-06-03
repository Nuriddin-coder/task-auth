import { Checkbox } from "@/components/ui/checkbox";

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="font-medium text-Primary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Remember for 30 days
      </label>
    </div>
  );
}
