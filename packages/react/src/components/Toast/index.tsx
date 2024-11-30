import { X } from 'phosphor-react';
import { ToastClose, ToastContainer, ToastDescription, ToastProvider, ToastRoot, ToastTitle, ToastViewport } from './styles'
import { ComponentProps, useState } from 'react'

export interface ToastProps
  extends ComponentProps<typeof ToastProvider> {
    title: string;
    description: string;
    open: boolean;
    openFunction: (value: boolean) => void;
  }


export function Toast({title, description, open, openFunction, ...rest}: ToastProps) {
  return (
    <ToastContainer>
      <ToastProvider>
        <ToastRoot open={open} onOpenChange={openFunction} {...rest}>
          <ToastTitle>{title}</ToastTitle>
          <ToastDescription>{description}</ToastDescription>
          <ToastClose>
            <X size={20} />
          </ToastClose>
        </ToastRoot>
        <ToastViewport />
      </ToastProvider>
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
