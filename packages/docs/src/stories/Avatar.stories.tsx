import type { StoryObj, Meta } from "@storybook/react"
import { Avatar, AvatarProps } from "@igniteuistudying/react"

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/Igor-de-Lima52.png',
    alt: 'Igor de Lima'
  },
  argTypes: {
    src: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
}