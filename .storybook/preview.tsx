import type { Preview } from "@storybook/nextjs-vite";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },

  argTypes: {
    variant: {
      name: "Variant",
      control: {
        type: "select",
        labels: {
          filled: "Filled",
          surface: "Surface",
          outlined: "Outlined",
          dashed: "Dashed",
          borderless: "Borderless",
        },
      },
      options: ["filled", "surface", "outlined", "dashed", "borderless"],
      description: "It determines the visual style variation and background design of the component.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Surface" },
      },
    },
    color: {
      name: "Color",
      control: {
        type: "select",
        labels: {
          blue: "Blue",
          purple: "Purple",
          pink: "Pink",
          red: "Red",
          orange: "Orange",
          yellow: "Yellow",
          green: "Green",
          teal: "Teal",
          cyan: "Cyan",
          gray: "Gray",
          light: "Light",
        },
      },
      options: ["blue", "purple", "pink", "red", "orange", "yellow", "green", "teal", "cyan", "gray", "light"],
      description: "The design system applies one of the defined color palette themes to the button.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Blue" },
      },
    },
    size: {
      name: "Size",
      control: {
        type: "select",
        labels: {
          small: "Small",
          normal: "Normal",
          large: "Large",
        },
      },
      options: ["small", "normal", "large"],
      description: "Scaling the button's padding and font size.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Normal" },
      },
    },

    // #region Border Settings
    borderRadius: {
      name: "Radius",
      control: {
        type: "select",
        labels: {
          sm: "SM",
          lg: "LG",
          xl: "XL",
          xxl: "XXL",
          pill: "PILL",
          none: "NONE",
        },
      },
      options: ["sm", "lg", "xl", "xxl", "pill", "none"],
      description: "Configures the radius (corner rounding) value within the border object.",
      table: {
        category: "Border",
        type: { summary: "string" },
        defaultValue: { summary: "SM" },
      },
    },
    // #endregion
  },
};

export default preview;
