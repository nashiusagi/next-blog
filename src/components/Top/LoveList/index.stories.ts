import type { Meta, StoryObj } from '@storybook/react'
import LoveList from '.'

const meta = {
  title: 'Top/LoveList',
  component: LoveList,
  tags: ['autodocs'],
  argTypes: {
    loveContent: {
      control: 'string',
    },
  },
} satisfies Meta<typeof LoveList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    loveContent: ['hello', 'world'],
  },
}
