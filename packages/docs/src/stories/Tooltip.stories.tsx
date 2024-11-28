import type { StoryObj, Meta } from "@storybook/react"
import { Tooltip, TooltipProps } from "@igniteuistudying/react"

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {
    children: "21",
  },
  decorators: [
    (Story) => (
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
    ),
  ]
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
