import { COLOR_OPTIONS, RADIUS_OPTIONS, SIZE_OPTIONS, VARIANT_OPTIONS } from "@/infrustructure/shared/Array";
import ICON_MAP from "@/infrustructure/shared/IconMap";
import { Button, Grid, Input, Select } from "@harjs/react-ui";
import { Option, type BorderRadiuses } from "@harjs/react-ui/types";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

const { Row, Column, Flex } = Grid;

type StoryProps = React.ComponentProps<typeof Input> & {
  borderRadius?: BorderRadiuses;
  icon?: any;
  iconElement?: keyof ReturnType<typeof ICON_MAP>;
  iconPosition?: "start" | "end";
  addonBefore: React.ReactNode;
  addonAfter: React.ReactNode;
  validationText?: string;
  validationScrollTo?: string;
};

const meta = {
  title: "FORM/Input",
  component: Input,
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<StoryProps>;

export const Editor: Story = {
  args: {
    variant: "outlined",
    color: "gray",
    size: "md",
    upperCase: false,
    borderRadius: "4",
    iconElement: "None",
    disabled: false,
  },
  argTypes: {
    border: { table: { disable: true } },
    icon: { table: { disable: true } },
    addonBefore: {
      name: "Addon Before",
      description:
        "A fixed element or component displayed before the input field. It is used to provide contextual information or visual cues prior to user input.",
      table: {
        category: "Addon",
        type: { summary: "string | React.JSX.Element" },
        defaultValue: { summary: "null" },
      },
    },
    addonAfter: {
      name: "Addon After",
      description:
        "A fixed element or component displayed after the input field. It is used to display supplementary information, actions, or unit indicators related to the input.",
      table: {
        category: "Addon",
        type: { summary: "string | React.JSX.Element" },
        defaultValue: { summary: "null" },
      },
    },
    validationText: { table: { disable: true } },
    validationScrollTo: { table: { disable: true } },
  },
  render: ({ borderRadius, ...args }) => {
    return <Input {...args} border={{ radius: borderRadius as any }} />;
  },
};

export const Variant: Story = {
  parameters: { controls: { disable: true } },
  args: {
    color: "gray",
    borderRadius: "4",
  },
  render: (args) => (
    <Flex flexDirection="row" gap="15px">
      <Input {...args} variant="filled" placeholder="Filled" />
      <Input {...args} variant="outlined" placeholder="Outlined" />
      <Input {...args} variant="dashed" placeholder="Dashed" />
      <Input {...args} variant="surface-borderless" placeholder="Surface Borderless" />
      <Input {...args} variant="borderless" placeholder="Borderless" />
    </Flex>
  ),
};

export const Color: Story = {
  parameters: { controls: { disable: true } },
  args: { width: 65, placeholder: "..." },
  render: (args) => (
    <Flex flexDirection="column" gap="16px">
      {VARIANT_OPTIONS.map((variant) => (
        <Flex key={variant} flexDirection="row" alignItems="center" gap="12px" flexWrap="wrap">
          {COLOR_OPTIONS.map((color) => (
            <Flex key={`${variant}-${color}`} flexDirection="column" gap="4px">
              <Input {...args} variant={variant} color={color} />
              <Input {...args} variant={variant} color={color} value="HarJS" />
            </Flex>
          ))}
        </Flex>
      ))}
    </Flex>
  ),
};

export const Disabled: Story = {
  parameters: { controls: { disable: true } },
  args: {
    placeholder: "Disabled",
    disabled: true,
  },
  render: (args) => (
    <Flex flexDirection="column" gap="15px">
      <Input {...args} />
      <Input {...args} value="HarJS" />
    </Flex>
  ),
};

export const Radius: Story = {
  parameters: { controls: { disable: true } },
  args: { color: "gray" },
  render: (args) => (
    <Flex flexDirection="column" gap="15px">
      {RADIUS_OPTIONS.map((radius) => (
        <Input key={radius} {...args} border={{ radius }} placeholder={`Radius ${radius}`} />
      ))}
    </Flex>
  ),
};

export const Size: Story = {
  parameters: { controls: { disable: true } },
  args: { color: "gray" },
  render: (args) => (
    <Flex flexDirection="column" gap="15px">
      {SIZE_OPTIONS.map((size) => (
        <Input key={size} {...args} size={size} placeholder={`Input ${size}`} />
      ))}
    </Flex>
  ),
};

export const Validation: Story = {
  parameters: { controls: { disable: true } },
  args: { color: "gray", validation: { text: "Value is required." } },
  render: (args) => <Input {...args} placeholder="Validation Input" />,
};

const userCircleIcon = ICON_MAP("var(--gray-500)").UserCircle;
const atIcon = ICON_MAP("var(--gray-500)").At;
const passwordIcon = ICON_MAP("var(--gray-500)").Password;
const eyeIcon = ICON_MAP("var(--gray-500)").Eye;
const eyeClosedIcon = ICON_MAP("var(--gray-500)").EyeClosed;

export const WithIcon: Story = {
  parameters: { controls: { disable: true } },
  args: {
    name: "With Icon",
    color: "gray",
  },
  render: (args) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    return (
      <>
        <Row>
          <Column size={6}>
            <Input {...args} placeholder="Username">
              <Input.Icon position="start">{userCircleIcon}</Input.Icon>
            </Input>
          </Column>

          <Column size={6}>
            <Input {...args} placeholder="E-Mail">
              <Input.Icon position="start">{atIcon}</Input.Icon>
            </Input>
          </Column>
        </Row>

        <Row>
          <Column size={12}>
            <Input {...args} type={isPasswordVisible ? "text" : "password"} placeholder="Password">
              <Input.Icon position="start">{passwordIcon}</Input.Icon>
              <Input.Icon position="end" onClick={() => setIsPasswordVisible((prev) => !prev)}>
                {isPasswordVisible ? eyeIcon : eyeClosedIcon}
              </Input.Icon>
            </Input>
          </Column>
        </Row>
      </>
    );
  },
};

export const Addons: Story = {
  parameters: { controls: { disable: true } },
  args: { color: "gray" },
  render: (args) => (
    <Flex flexDirection="column" gap="15px">
      <Input {...args} placeholder="Web site address">
        <Input.AddonBefore>https://</Input.AddonBefore>
        <Input.AddonAfter>.design</Input.AddonAfter>
      </Input>

      <Input {...args} placeholder="Username">
        <Input.AddonBefore>@</Input.AddonBefore>
      </Input>

      <span>Your vanity URL</span>
      <Input {...args} placeholder="...">
        <Input.AddonBefore>https://example.com/users/</Input.AddonBefore>
      </Input>
    </Flex>
  ),
};

export const MultipleAddons: Story = {
  parameters: { controls: { disable: true } },
  args: { color: "gray" },
  render: (args) => {
    const [currency, setCurrency] = useState<string | null>("tr-TR");
    const [currencies] = useState<Option[]>([
      { value: "tr-TR", text: "₺" },
      { value: "en-US", text: "$" },
    ]);

    return (
      <Flex flexDirection="column" gap="15px">
        <Input {...args}>
          <Input.AddonBefore>₺</Input.AddonBefore>
          <Input.AddonBefore>0.00</Input.AddonBefore>
        </Input>

        <Input {...args}>
          <Input.AddonAfter>
            <Input placeholder="..." />
          </Input.AddonAfter>
          <Input.AddonAfter>₺</Input.AddonAfter>
          <Input.AddonAfter>0.00</Input.AddonAfter>
        </Input>

        <Input {...args}>
          <Input.AddonAfter>{Intl.NumberFormat(currency ?? "tr-TR").format(0.01)}</Input.AddonAfter>
          <Input.AddonAfter>
            <Select
              options={currencies}
              value={currencies.find((x) => x.value === currency)}
              onChange={(option) => setCurrency(option?.value as string)}
              placeholder="Currency"
            />
          </Input.AddonAfter>
        </Input>

        <Input {...args}>
          <Input.AddonAfter>
            <Input placeholder="..." />
          </Input.AddonAfter>
          <Input.AddonAfter>
            <Button color="blue">Send</Button>
          </Input.AddonAfter>
        </Input>
      </Flex>
    );
  },
};

export const Number: Story = {
  parameters: { controls: { disable: true } },
  args: { type: "number", color: "gray" },
  render: (args) => {
    return (
      <Flex flexDirection="column" gap="15px">
        <Input {...args} placeholder="Number" />
        <Input.Decimal {...args} placeholder="Decimal" />
        <Input.FormattedDecimal {...args} placeholder="Formatted Decimal" />
      </Flex>
    );
  },
};

export const PhoneNumber: Story = {
  parameters: { controls: { disable: true } },
  args: { type: "number", color: "gray" },
  render: (args) => {
    return (
      <Input.Phone
        {...args}
        options={[{ value: "90", text: "+(90)" }]}
        values={{ value: "", option: "" }}
        placeholder="Phone Number"
      />
    );
  },
};
