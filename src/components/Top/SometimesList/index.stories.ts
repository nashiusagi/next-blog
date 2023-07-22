import type { Meta, StoryObj } from '@storybook/react'
import SometimesList from '.'

const meta = {
  title: 'Top/SometimesList',
  component: SometimesList,
  tags: ['autodocs'],
  argTypes: {
    sometimesContent: {
      control: 'string',
    },
  },
} satisfies Meta<typeof SometimesList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    sometimesContent: ['hello', 'world'],
  },
}
