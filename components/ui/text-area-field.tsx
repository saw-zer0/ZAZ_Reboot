import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface TextAreaFieldProps {
  id: string
  label: string
  placeholder?: string
  rows?: number
}

export const TextAreaField = ({ id, label, placeholder, rows = 4 }: TextAreaFieldProps) => (
  <div>
    <Label htmlFor={id}>{label}</Label>
    <Textarea id={id} placeholder={placeholder} rows={rows} />
  </div>
)