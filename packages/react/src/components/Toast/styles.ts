import { styled } from '../../styles'

import * as Toast from '@radix-ui/react-toast'

export const ToastContainer = styled('div', {})

export const ToastProvider = styled(Toast.Provider, {})

export const ToastRoot = styled(Toast.Root, {
  background: '$gray600',
  color: '$white',
  padding: '$3 $5',
  borderRadius: '6px',
  position: 'relative',
})

export const ToastTitle = styled(Toast.Title, {
  fontSize: '$lg',
  fontWeight: 'bold',
  fontFamily: '$default',
  color: "$white",
})

export const ToastDescription = styled(Toast.Description, {
  marginTop: '$1',
  fontSize: '$sm',
  fontFamily: '$default',
  color: "$gray200",
})

export const ToastClose = styled(Toast.Close, {
  position: 'absolute',
  top: '$3',
  right: '$2',
  background: 'transparent',
  border: 'none',
  color: '$gray200',
  cursor: 'pointer',
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: '16px',
  right: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  width: '360px',
  maxWidth: '100vw',
  zIndex: '$full',
  outline: 'none',
})