import type { Meta, StoryObj } from '@storybook/react'
import StudyingList from '.'

const meta = {
  title: 'Top/StudyingContent',
  component: StudyingList,
  tags: ['autodocs'],
  argTypes: {
    studyingContent: {
      control: 'string',
    },
  },
} satisfies Meta<typeof StudyingList>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    studyingContent: ['hello', 'world'],
  },
}
