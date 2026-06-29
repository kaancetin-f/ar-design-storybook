import ICON_MAP from "@/infrustructure/shared/IconMap";
import { Grid, Input } from "@harjs/react-ui";
import type { BorderRadiuses } from "@harjs/react-ui/types";

type StoryProps = React.ComponentProps<typeof Input> & {
  borderRadius?: BorderRadiuses;
  icon: any;
  iconElement: keyof ReturnType<typeof ICON_MAP>;
  iconPosition: "start" | "end";
  validationText?: string;
  validationScrollTo?: string;
};

import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

const { Row, Column, Box, Flex } = Grid;

const meta = {
  title: "FORM/Input",
  component: Input,
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Input>;

export default meta;

export const Editor: StoryObj<StoryProps> = {
  args: {
    variant: "outlined",
    color: "blue",
    size: "md",
    upperCase: false,
    borderRadius: "sm",
    iconElement: "None",
    disabled: false,
  },
  argTypes: {
    border: { table: { disable: true } },
    icon: { table: { disable: true } },
    validationText: { table: { disable: true } },
    validationScrollTo: { table: { disable: true } },
  },
  render: ({ ...args }) => {
    return <Input {...args} color="blue" border={{ radius: args.borderRadius as any }} />;
  },
};

export const Variant: StoryObj<StoryProps> = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  args: {
    color: "gray",
    borderRadius: "sm",
  },
  render: ({ ...args }) => {
    return (
      <Flex flexDirection="row" gap={"15px"}>
        <Input variant="filled" {...args} placeholder="Filled" />
        <Input variant="outlined" {...args} placeholder="Outlined" />
        <Input variant="dashed" {...args} placeholder="Dashed" />
        <Input variant="surface-borderless" {...args} placeholder="Surface Borderless" />
        <Input variant="borderless" {...args} placeholder="Borderless" />
      </Flex>
    );
  },
};

export const Color: StoryObj<StoryProps> = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  args: { width: 65, placeholder: "..." },
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

    const variants = ["filled", "surface-borderless", "outlined", "dashed"] as const;

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {variants.map((variant) => (
          <div key={variant} style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
            {colors.map((color) => (
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <Input {...args} key={`${variant}-${color}`} variant={variant} color={color} />
                <Input {...args} key={`${variant}-${color}`} variant={variant} color={color} value={"HarJS"} />
              </div>
            ))}
          </div>
        ))}
      </div>
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
    placeholder: "Disabled",
    disabled: true,
  },
  render: ({ ...args }) => {
    return (
      <Flex flexDirection="column" gap={"15px"}>
        <Input {...args} />
        <Input {...args} value={"HarJS"} />
      </Flex>
    );
  },
};

export const Radius: StoryObj<StoryProps> = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  args: {
    color: "gray",
  },
  render: ({ ...args }) => {
    return (
      <Flex flexDirection="column" gap={"15px"}>
        <Input border={{ radius: "none" }} {...args} placeholder="Radius none" />
        <Input border={{ radius: "sm" }} {...args} placeholder="Radius sm" />
        <Input border={{ radius: "lg" }} {...args} placeholder="Radius lg" />
        <Input border={{ radius: "xl" }} {...args} placeholder="Radius xl" />
        <Input border={{ radius: "xxl" }} {...args} placeholder="Radius xxl" />
        <Input border={{ radius: "pill" }} {...args} placeholder="Radius pill" />
      </Flex>
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
    color: "gray",
  },
  render: ({ ...args }) => {
    const sizes = ["xs", "sm", "md", "lg", "xl", "xxl"] as const;

    return (
      <Flex flexDirection="column" gap={"15px"}>
        {sizes.map((size) => (
          <Input size={size} {...args} placeholder={`Input ${size}`} />
        ))}
      </Flex>
    );
  },
};

const userCircle = ICON_MAP("var(--gray-500)").UserCircle;
const at = ICON_MAP("var(--gray-500)").At;
const password = ICON_MAP("var(--gray-500)").Password;
const eye = ICON_MAP("var(--gray-500)").Eye;
const eyeClosed = ICON_MAP("var(--gray-500)").EyeClosed;
export const WithIcon: StoryObj<StoryProps> = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  args: {
    name: "With Icon",
    color: "gray",
  },
  render: ({ ...args }) => {
    // states
    const [isShow, setIsShow] = useState<boolean>(false);

    return (
      <>
        <Row>
          <Column size={6}>
            <Input {...args} placeholder="Username">
              <Input.Icon position="start">{userCircle}</Input.Icon>
            </Input>
          </Column>

          <Column size={6}>
            <Input {...args} placeholder="E-Mail">
              <Input.Icon position="start">{at}</Input.Icon>
            </Input>
          </Column>
        </Row>

        <Row>
          <Column size={12}>
            <Input {...args} type={isShow ? "text" : "password"} placeholder="Password">
              <Input.Icon position="start">{password}</Input.Icon>
              <Input.Icon position="end" onClick={() => setIsShow((prev) => !prev)}>
                {isShow ? eye : eyeClosed}
              </Input.Icon>
            </Input>
          </Column>
        </Row>
      </>
    );
  },
};

export const Addons: StoryObj<StoryProps> = {
  parameters: {
    controls: {
      disable: true,
    },
  },
  args: {
    color: "gray",
  },
  render: ({ ...args }) => {
    return (
      <Flex flexDirection="column" gap={"15px"}>
        <Input {...args} placeholder="Web site address">
          <Input.AddonBefore>https://</Input.AddonBefore>
          <Input.AddonAfter>.design</Input.AddonAfter>
        </Input>

        <Input {...args} placeholder="Username">
          <Input.AddonBefore>@</Input.AddonBefore>
        </Input>

        <span>Your vanity URL</span>
        <Input {...args}>
          <Input.AddonBefore>https://example.com/users/</Input.AddonBefore>
        </Input>

        <span>Multiple Addon</span>

        <Input {...args}>
          <Input.AddonBefore>₺</Input.AddonBefore>
          <Input.AddonBefore>0.00</Input.AddonBefore>
        </Input>

        <Input {...args}>
          <Input.AddonAfter>₺</Input.AddonAfter>
          <Input.AddonAfter>0.00</Input.AddonAfter>
        </Input>
      </Flex>
    );
  },
};
