import { styled } from '../../styles'

import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipContainer = styled(Tooltip.Provider, {
  
})

export const TooltipRoot = styled(Tooltip.Root, {

})

export const TooltipTrigger = styled(Tooltip.Trigger, {
  width: '$16',
  height: '$16',
  background: '$gray700',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$gray100',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  border: '2px solid $gray700',
})

export const TooltipContent = styled(Tooltip.Content, {
  color: '$gray100',
  background: '$gray900',
  borderRadius: '$xs',
  fontFamily: '$default',
  fontWeight: '$medium',
  fontSize: '$sm',
  padding: '$3 $4',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
