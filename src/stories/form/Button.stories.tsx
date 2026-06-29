import ICON_MAP from "@/infrustructure/shared/IconMap";
import { Button, ButtonAction, ButtonGroup, Grid } from "@harjs/react-ui";
import type { BorderRadiuses } from "@harjs/react-ui/types";

type StoryProps = React.ComponentProps<typeof Button> & {
  borderRadius?: BorderRadiuses;
  shape?: ["circle"] | ["square"] | [];
  positionInset: ("top" | "bottom" | "left" | "right")[];
  positionType: "fixed" | "absolute";
  iconElement: keyof ReturnType<typeof ICON_MAP>;
  iconPosition: "start" | "end";
  validationText?: string;
  validationScrollTo?: string;
};

import type { Meta, StoryObj } from "@storybook/react-vite";

const { Box } = Grid;

const meta = {
  title: "FORM/Button",
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
    size: "md",
    upperCase: false,
    fullWidth: false,
    borderRadius: "sm",
    iconElement: "None",
    disabled: false,
  },
  argTypes: {
    border: { table: { disable: true } },
    position: { table: { disable: true } },
    icon: { table: { disable: true } },
    validationText: { table: { disable: true } },
    validationScrollTo: { table: { disable: true } },

    children: {
      name: "Children",
      control: { type: "text" },
      description: "Determines the `text` or `child elements` inside the button component.",
      table: {
        type: { summary: "React.ReactNode" },
        defaultValue: { summary: "Button" },
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
      },
      options: Object.keys(ICON_MAP),
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

    // const selectedIcon = ICON_MAP("var(--white)")[args.iconElement];
    // const iconObj = selectedIcon ? { icon: { element: selectedIcon, position: args.iconPosition } } : {};

    return (
      <Button
        {...args}
        color="blue"
        shape={finalShape as any}
        border={{ radius: args.borderRadius as any }}
        {...positionObj}
        // {...iconObj}
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
        <Button variant="surface-borderless" {...args}>
          Surface - Borderless
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
  render: ({ ...args }) => {
    const colors = [
      "blue",
      "purple",
      "pink",
      "red",
      "orange",
      "yellow",
      "green",
      "teal",
      "cyan",
      "gray",
      "light",
    ] as const;

    const variants = ["filled", "surface", "surface-borderless", "outlined", "dashed", "borderless"] as const;

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {variants.map((variant) => (
          <div key={variant} style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            {colors.map((color) => (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Button {...args} key={`${variant}-${color}`} variant={variant} color={color}>
                  {color.charAt(0).toLocaleUpperCase()}
                  {color.slice(1)}
                </Button>
              </div>
            ))}
          </div>
        ))}
      </div>
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
        <Button variant="surface-borderless" {...args}>
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

export const Disabled: StoryObj<StoryProps> = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  args: {
    children: "Disabled Button",
    disabled: true,
  },
  render: ({ ...args }) => {
    return <Button {...args}>{args.children}</Button>;
  },
};

export const Radius: StoryObj<StoryProps> = {
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
        <Button border={{ radius: "none" }} {...args}>
          Radius none
        </Button>
        <Button border={{ radius: "sm" }} {...args}>
          Radius sm
        </Button>
        <Button border={{ radius: "lg" }} {...args}>
          Radius lg
        </Button>
        <Button border={{ radius: "xl" }} {...args}>
          Radius xl
        </Button>
        <Button border={{ radius: "xxl" }} {...args}>
          Radius xxl
        </Button>
        <Button border={{ radius: "pill" }} {...args}>
          Radius pill
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
    const sizes = ["xs", "sm", "md", "lg", "xl", "xxl"] as const;

    return (
      <>
        {sizes.map((size) => (
          <Button variant="filled" size={size} {...args}>
            Button {size}
          </Button>
        ))}
      </>
    );

    return (
      <>
        <Button variant="filled" size="sm" {...args}>
          Small
        </Button>
        <Button variant="filled" size="md" {...args}>
          Normal
        </Button>
        <Button variant="filled" size="lg" {...args}>
          Large
        </Button>
      </>
    );
  },
};

const check = ICON_MAP("var(--white)").Check;
const paperPlaneRight = ICON_MAP("var(--white)").PaperPlaneRight;
const search = ICON_MAP("var(--white)").Search;
const settings = ICON_MAP("var(--white)").Settings;
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
        <Button color="green" icon={{ element: check }} {...args}>
          Append
        </Button>
        <Button color="orange" icon={{ element: paperPlaneRight, position: "end" }} {...args}>
          Send
        </Button>
        <Button color="blue" shape="square" icon={{ element: search }} {...args}>
          {args.children}
        </Button>
        <Button color="blue" shape="circle" icon={{ element: settings }} {...args}>
          {args.children}
        </Button>
      </>
    );
  },
};

export const Group: StoryObj<StoryProps> = {
  name: "Button Group",
  parameters: {
    controls: {
      disable: true,
    },
  },
  args: {
    variant: "outlined",
    color: "blue",
  },
  render: ({ ...args }) => {
    return (
      <ButtonGroup {...args}>
        <Button variant="filled">Save</Button>
        <Button color="gray">Save as Draft</Button>
        <Button variant="borderless" color="red">
          Cancel
        </Button>
      </ButtonGroup>
    );
  },
};

const caretLineDown = ICON_MAP("var(--white)").CaretLineDown;
const notePencil = ICON_MAP("var(--white)").NotePencil;
const trash = ICON_MAP("var(--white)").Trash;
export const Action: StoryObj<StoryProps> = {
  name: "Button Action",
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
        <ButtonAction {...args} title="Dropdown" variant="filled" _color="blue" _icon={{ element: caretLineDown }}>
          <Button>Menu Link 1</Button>
          <Button>Menu Link 2</Button>
        </ButtonAction>

        <ButtonAction {...args} title="Process" variant="outlined" _color="blue">
          <Button color="orange" icon={{ element: notePencil }}>
            Edit
          </Button>
          <Button variant="filled" color="red" icon={{ element: trash }}>
            Delete
          </Button>
        </ButtonAction>

        <ButtonAction {...args} variant="outlined" _color="blue">
          <Button color="orange" icon={{ element: notePencil }}>
            Edit
          </Button>
          <Button variant="filled" color="red" icon={{ element: trash }}>
            Delete
          </Button>
        </ButtonAction>
      </>
    );
  },
};
