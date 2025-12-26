import { cn } from "@/lib/utils"

interface DazzcodeProps {
  className?: string
}

export default function Dazzcode({ className }: DazzcodeProps) {
  return (
    <span className={cn("font-bold", className)}>
      <span className="text-red-500">&lt;</span>
      Dazzcode
      <span className="text-red-500">/&gt;</span>
    </span>
  )
}
