import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface FormInputProps {
  id: string
  label: string
  type?: string
  placeholder?: string
  required?: boolean
  min?: number
}

export const FormInput = ({ id, label, type = "text", placeholder, required, min }: FormInputProps) => (
  <div>
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} type={type} placeholder={placeholder} required={required} min={min} />
  </div>
)