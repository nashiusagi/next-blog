import type { Meta, StoryObj } from '@storybook/react'
import DailyList from '.'

const meta = {
  title: 'Top/DailyContent',
  component: DailyList,
  tags: ['autodocs'],
  argTypes: {
    dailyContent: {
      control: 'string',
    },
  },
} satisfies Meta<typeof DailyList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    dailyContent: ['hello', 'world'],
  },
}
