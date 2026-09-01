import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { fn } from 'storybook/test';

import { Footer } from '@/components/footer';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Footer',
  component: Footer,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/arg-types
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onClick: fn() },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Full: Story = {
  args: {
    title: 'Full Footer',
    socialLinks: true,
    footerNavi: true,
    copyright: '© 2026 DANDER. All rights reserved.',
  },
};

export const OnlyNavigation: Story = {
  args: {
    title: 'Only Navigation',
    socialLinks: false,
    footerNavi: true,
    copyright: '© 2026 DANDER. All rights reserved.',
  },
};

export const OnlySocialLinks: Story = {
  args: {
    title: 'Only Social Links',
    socialLinks: true,
    footerNavi: false,
    copyright: '© 2026 DANDER. All rights reserved.',
  },
};

export const Empty: Story = {
  args: {
    title: 'Empty Footer',
    socialLinks: false,
    footerNavi: false,
    copyright: '© 2026 DANDER. All rights reserved.',
  },
};
