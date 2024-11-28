import { TooltipArrow, TooltipContainer, TooltipContent, TooltipRoot, TooltipTrigger } from './styles'
import { ComponentProps } from 'react'

export interface TooltipProps
  extends ComponentProps<typeof TooltipContainer> {}


export function Tooltip({children}: TooltipProps) {
  return (
    <TooltipContainer>
      <TooltipRoot>
        <TooltipTrigger asChild>
          <div>
            {children}
          </div>
        </TooltipTrigger>
        <TooltipContent sideOffset={0}>
          October 21th - Unavailable
          <TooltipArrow />
        </TooltipContent>
      </TooltipRoot>
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'
