import type { StoryObj, Meta } from "@storybook/react"
import { Text, TextProps } from "@ignite-ui/react"

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam voluptate veniam dicta est. Ab, officiis pariatur? Tenetur fugit, nam debitis amet nihil autem, harum, nobis rem architecto ad ex repudiandae!',
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  },
}