import type { StoryObj, Meta } from "@storybook/react"
import { Toast, ToastProps } from "@igniteuistudying/react"

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  args: {
    title: "Appointment made",
    description: "Wednesday, October 23th at 4 p.m.",
  },
  argTypes: {
    children: { table: { disable: true } },
    asChild: { table: { disable: true } },
    duration: {
      control: {
        type: "number"
      }
    }
  },
  decorators: [
    (Story) => {
      return(
        <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '30vh',
        }}
        >
          <Story />
        </div>
      )
    },
  ]
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
