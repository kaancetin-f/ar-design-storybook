import { Button, Grid } from "@harjs/react-ui";
import type { BorderRadiuses } from "@harjs/react-ui/types";

type StoryProps = React.ComponentProps<typeof Button> & {
  borderRadius?: BorderRadiuses;
  shape?: ["circle"] | ["square"] | [];
  positionInset: ("top" | "bottom" | "left" | "right")[];
  positionType: "fixed" | "absolute";
  iconElement: keyof typeof ICON_MAP;
  iconPosition: "start" | "end";
};

const ICON_MAP = {
  None: null,
  Search: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" viewBox="0 0 256 256">
      <path d="M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z" opacity="0.2"></path>
      <path d="M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
    </svg>
  ),
  Check: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" viewBox="0 0 256 256">
      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
    </svg>
  ),
  Settings: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" viewBox="0 0 256 256">
      <path
        d="M207.86,123.18l16.78-21a99.14,99.14,0,0,0-10.07-24.29l-26.7-3a81,81,0,0,0-6.81-6.81l-3-26.71a99.43,99.43,0,0,0-24.3-10l-21,16.77a81.59,81.59,0,0,0-9.64,0l-21-16.78A99.14,99.14,0,0,0,77.91,41.43l-3,26.7a81,81,0,0,0-6.81,6.81l-26.71,3a99.43,99.43,0,0,0-10,24.3l16.77,21a81.59,81.59,0,0,0,0,9.64l-16.78,21a99.14,99.14,0,0,0,10.07,24.29l26.7,3a81,81,0,0,0,6.81,6.81l3,26.71a99.43,99.43,0,0,0,24.3,10l21-16.77a81.59,81.59,0,0,0,9.64,0l21,16.78a99.14,99.14,0,0,0,24.29-10.07l3-26.7a81,81,0,0,0,6.81-6.81l26.71-3a99.43,99.43,0,0,0,10-24.3l-16.77-21A81.59,81.59,0,0,0,207.86,123.18ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"
        opacity="0.2"
      ></path>
      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.6,107.6,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.29,107.29,0,0,0-26.25-10.86,8,8,0,0,0-7.06,1.48L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.6,107.6,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8.06,8.06,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8.06,8.06,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
    </svg>
  ),
  // YENİ EKLENEN SAĞ OK İKONU
  PaperPlaneRight: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" viewBox="0 0 256 256">
      <path
        d="M227.91,134.86,59.93,231a8,8,0,0,1-11.44-9.67L80,128,48.49,34.72a8,8,0,0,1,11.44-9.67l168,95.85A8,8,0,0,1,227.91,134.86Z"
        opacity="0.2"
      ></path>
      <path d="M231.87,114l-168-95.89A16,16,0,0,0,40.92,37.34L71.55,128,40.92,218.67A16,16,0,0,0,56,240a16.15,16.15,0,0,0,7.93-2.1l167.92-96.05a16,16,0,0,0,.05-27.89ZM56,224a.56.56,0,0,0,0-.12L85.74,136H144a8,8,0,0,0,0-16H85.74L56.06,32.16A.46.46,0,0,0,56,32l168,95.83Z"></path>
    </svg>
  ),
};

import type { Meta, StoryObj } from "@storybook/react-vite";

const { Box } = Grid;

const meta = {
  title: "FORM/Buttons/Button",
  component: Button,
  decorators: [
    (Story) => (
      <Box>
        <Story />
      </Box>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;

export const Editor: StoryObj<StoryProps> = {
  args: {
    children: "Button",
    variant: "filled",
    color: "blue",
    size: "normal",
    upperCase: false,
    fullWidth: false,
    borderRadius: "sm",
    iconElement: "None",
  },
  argTypes: {
    border: { table: { disable: true } },
    position: { table: { disable: true } },
    icon: { table: { disable: true } },

    children: {
      name: "Children",
      control: { type: "text" },
      description: "Determines the `text` or `child elements` inside the button component.",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "Button" },
      },
    },

    upperCase: {
      name: "Upper Case",
      control: { type: "boolean" },
      description: "When enabled, automatically transforms all characters within the button text to `uppercase`.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "False" },
      },
    },
    fullWidth: {
      name: "Full Width",
      control: { type: "boolean" },
      description: "When enabled, forces the button to span the `full width` `100%` of its parent container.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "False" },
      },
    },

    // #region Ikon
    shape: {
      name: "Shape",
      control: {
        type: "inline-check",
        labels: {
          circle: "Circle",
          square: "Square",
        },
      },
      options: ["circle", "square"],
      description: "Customizes the geometric form of the button, allowing it to take a `circle` or `square` shape.",
      table: {
        category: "Ikon",
        type: { summary: "string" },
        defaultValue: { summary: "Square" },
      },
    },
    iconElement: {
      name: "Icon",
      control: {
        type: "select",
        labels: {
          none: "None",
          search: "Search",
          check: "Check",
          settings: "Settings",
        },
      },
      options: ["none", "search", "check", "settings"],
      description: "Selects the sample `icon component` to be placed inside the button.",
      table: {
        category: "Ikon",
        type: { summary: "string" },
        defaultValue: { summary: "None" },
      },
    },
    iconPosition: {
      name: "Position",
      control: {
        type: "inline-radio",
        labels: {
          start: "Start",
          end: "End",
        },
      },
      options: ["start", "end"],
      description:
        "Determines the alignment direction `left / right` of the selected icon relative to the button text.",
      table: {
        category: "Ikon",
        type: { summary: "string" },
        defaultValue: { summary: "Start" },
      },
    },
    // #endregion

    // #region Position
    positionInset: {
      name: "Inset",
      control: {
        type: "inline-check",
        labels: {
          top: "Top",
          bottom: "Bottom",
          left: "Left",
          right: "Right",
        },
      },
      options: ["top", "bottom", "left", "right"],
      description:
        "Determines the `CSS inset` directional layout `top, bottom, left, right` within the positioning object.",
      table: {
        category: "Position",
        type: { summary: "array" },
        defaultValue: { summary: "[]" },
      },
    },
    positionType: {
      name: "Type",
      control: {
        type: "select",
        labels: {
          absolute: "Absolute",
          fixed: "Fixed",
        },
      },
      options: ["absolute", "fixed"],
      description: "Determines the `CSS position` type `absolute / fixed` within the positioning object.",
      table: {
        category: "Position",
        type: { summary: "string" },
        defaultValue: { summary: "Absolute" },
      },
    },
    // #endregion
  },
  render: ({ ...args }) => {
    const finalShape = Array.isArray(args.shape) && args.shape.length > 0 ? args.shape[0] : undefined;

    const hasPosition = (Array.isArray(args.positionInset) && args.positionInset.length > 0) || args.positionType;
    const positionObj = hasPosition ? { position: { inset: args.positionInset, type: args.positionType } } : {};

    const selectedIcon = ICON_MAP[args.iconElement];
    const iconObj = selectedIcon ? { icon: { element: selectedIcon, position: args.iconPosition } } : {};

    return (
      <Button
        {...args}
        color="blue"
        shape={finalShape as any}
        border={{ radius: args.borderRadius as any }}
        {...positionObj}
        {...iconObj}
      >
        {args.children}
      </Button>
    );
  },
};

export const Variant: StoryObj<StoryProps> = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  args: {
    color: "blue",
  },
  render: ({ ...args }) => {
    return (
      <>
        <Button variant="filled" {...args}>
          Filled
        </Button>
        <Button variant="surface" {...args}>
          Surface
        </Button>
        <Button variant="outlined" {...args}>
          Outlined
        </Button>
        <Button variant="dashed" {...args}>
          Dashed
        </Button>
        <Button variant="borderless" {...args}>
          Borderless
        </Button>
      </>
    );
  },
};

export const Color: StoryObj<StoryProps> = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  args: {
    variant: "filled",
  },
  render: ({ ...args }) => {
    return (
      <>
        <Button {...args} color="red">
          Red
        </Button>
        <Button {...args} color="orange">
          Orange
        </Button>
        <Button {...args} color="yellow">
          Yellow
        </Button>
        <Button {...args} color="green">
          Green
        </Button>
        <Button {...args} color="teal">
          Teal
        </Button>
        <Button {...args} color="cyan">
          Cyan
        </Button>
        <Button {...args} color="blue">
          Blue
        </Button>
        <Button {...args} color="purple">
          Purple
        </Button>
        <Button {...args} color="pink">
          Pink
        </Button>
        <Button {...args} color="gray">
          Gray
        </Button>
        <Button {...args} color="light">
          Light
        </Button>
      </>
    );
  },
};

export const Error: StoryObj<StoryProps> = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  args: {
    children: "Error",
    color: "red",
  },
  render: ({ ...args }) => {
    return (
      <>
        <Button variant="filled" {...args}>
          {args.children}
        </Button>
        <Button variant="surface" {...args}>
          {args.children}
        </Button>
        <Button variant="outlined" {...args}>
          {args.children}
        </Button>
        <Button variant="dashed" {...args}>
          {args.children}
        </Button>
        <Button variant="borderless" {...args}>
          {args.children}
        </Button>
      </>
    );
  },
};

export const Size: StoryObj<StoryProps> = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  args: {
    color: "blue",
  },
  render: ({ ...args }) => {
    return (
      <>
        <Button variant="filled" size="large" {...args}>
          Large
        </Button>

        <Button variant="filled" size="normal" {...args}>
          Normal
        </Button>

        <Button variant="filled" size="small" {...args}>
          Small
        </Button>
      </>
    );
  },
};

export const WithIcon: StoryObj<StoryProps> = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  args: {
    name: "With Icon",
    children: "Button",
    variant: "filled",
  },
  render: ({ ...args }) => {
    return (
      <>
        <Button color="green" icon={{ element: ICON_MAP.Check }} {...args}>
          Append
        </Button>

        <Button color="orange" icon={{ element: ICON_MAP.PaperPlaneRight, position: "end" }} {...args}>
          Send
        </Button>

        <Button color="blue" shape="square" icon={{ element: ICON_MAP.Search }} {...args}>
          {args.children}
        </Button>

        <Button color="blue" shape="circle" icon={{ element: ICON_MAP.Settings }} {...args}>
          {args.children}
        </Button>
      </>
    );
  },
};

export const FullWidth: StoryObj<StoryProps> = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  args: {
    name: "Full Width",
    children: "Button",
    variant: "filled",
    color: "blue",
  },
  render: ({ ...args }) => {
    return (
      <Button {...args} fullWidth>
        Append
      </Button>
    );
  },
};
