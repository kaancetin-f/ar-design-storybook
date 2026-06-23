import { ButtonAction } from "@harjs/react-ui";
import type { Color } from "@harjs/react-ui/types";
import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";

const ICON_MAP = {
  none: null,
  edit: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  ),
  clone: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  ),
  delete: (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
      <line x1="10" y1="11" x2="10" y2="17"></line>
      <line x1="14" y1="11" x2="14" y2="17"></line>
    </svg>
  ),
};

type StoryProps = React.ComponentProps<typeof ButtonAction> & {
  // 1. Buton Ayarları
  btn1Text: string;
  btn1Color: Color;
  btn1Icon: "none" | "edit" | "clone" | "delete";

  // 2. Buton Ayarları
  btn2Text: string;
  btn2Color: Color;
  btn2Icon: "none" | "edit" | "clone" | "delete";

  // 3. Buton Ayarları
  btn3Text: string;
  btn3Color: Color;
  btn3Icon: "none" | "edit" | "clone" | "delete";
};

const meta = {
  title: "FORM/Buttons/Action Buttons",
  component: ButtonAction,
  decorators: [
    (Story) => (
      <div style={{ display: "flex" }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ButtonAction>;

export default meta;

export const Editor: StoryObj<StoryProps> = {
  args: {
    btn1Text: "Düzenle",
    btn1Color: "orange",
    btn1Icon: "edit",

    btn2Text: "Klonla",
    btn2Color: "purple",
    btn2Icon: "clone",

    btn3Text: "Sil",
    btn3Color: "red",
    btn3Icon: "delete",
  },
  argTypes: {
    buttons: { table: { disable: true } },

    // #region 1. Buton Ayarları
    btn1Text: {
      name: "Metin (Text)",
      control: { type: "text" },
      description: "İlk aksiyon butonunun üzerinde yazacak metin.",
      table: { category: "1. Buton Ayarları" },
    },
    btn1Color: {
      name: "Renk (Color)",
      control: { type: "select" },
      options: ["orange", "purple", "red", "blue"],
      description: "İlk aksiyon butonunun tema rengi.",
      table: { category: "1. Buton Ayarları" },
    },
    btn1Icon: {
      name: "İkon (Icon)",
      control: {
        type: "select",
        labels: {
          none: "İkon Yok",
          edit: "Düzenle İkonu",
          clone: "Klonla İkonu",
          delete: "Sil İkonu",
        },
      },
      options: ["none", "edit", "clone", "delete"],
      description: "İlk aksiyon butonunun içerisine yerleştirilecek ikon.",
      table: { category: "1. Buton Ayarları" },
    },
    // #endregion

    // #region 2. Buton Ayarları
    btn2Text: {
      name: "Metin (Text)",
      control: { type: "text" },
      description: "İkinci aksiyon butonunun üzerinde yazacak metin.",
      table: { category: "2. Buton Ayarları" },
    },
    btn2Color: {
      name: "Renk (Color)",
      control: { type: "select" },
      options: ["orange", "purple", "red", "blue"],
      description: "İkinci aksiyon butonunun tema rengi.",
      table: { category: "2. Buton Ayarları" },
    },
    btn2Icon: {
      name: "İkon (Icon)",
      control: {
        type: "select",
        labels: {
          none: "İkon Yok",
          edit: "Düzenle İkonu",
          clone: "Klonla İkonu",
          delete: "Sil İkonu",
        },
      },
      options: ["none", "edit", "clone", "delete"],
      description: "İkinci aksiyon butonunun içerisine yerleştirilecek ikon.",
      table: { category: "2. Buton Ayarları" },
    },
    // #endregion

    // #region 3. Buton Ayarları
    btn3Text: {
      name: "Metin (Text)",
      control: { type: "text" },
      description: "Üçüncü aksiyon butonunun üzerinde yazacak metin.",
      table: { category: "3. Buton Ayarları" },
    },
    btn3Color: {
      name: "Renk (Color)",
      control: { type: "select" },
      options: ["orange", "purple", "red", "blue"],
      description: "Üçüncü aksiyon butonunun tema rengi.",
      table: { category: "3. Buton Ayarları" },
    },
    btn3Icon: {
      name: "İkon (Icon)",
      control: {
        type: "select",
        labels: {
          none: "İkon Yok",
          edit: "Düzenle İkonu",
          clone: "Klonla İkonu",
          delete: "Sil İkonu",
        },
      },
      options: ["none", "edit", "clone", "delete"],
      description: "Üçüncü aksiyon butonunun içerisine yerleştirilecek ikon.",
      table: { category: "3. Buton Ayarları" },
    },
    // #endregion
  },
  render: ({
    btn1Text,
    btn1Color,
    btn1Icon,
    btn2Text,
    btn2Color,
    btn2Icon,
    btn3Text,
    btn3Color,
    btn3Icon,
    ...args
  }) => {
    // Kontrol panelinden gelen düz verileri component'in beklediği "buttons" dizisine dönüştürüyoruz
    const dynamicButtons = [
      {
        text: btn1Text,
        color: btn1Color,
        icon: ICON_MAP[btn1Icon] ? { element: ICON_MAP[btn1Icon], position: "start" } : undefined,
        onClick: () => alert(`${btn1Text} aksiyonu tetiklendi.`),
      },
      {
        text: btn2Text,
        color: btn2Color,
        icon: ICON_MAP[btn2Icon] ? { element: ICON_MAP[btn2Icon], position: "start" } : undefined,
        onClick: () => alert(`${btn2Text} aksiyonu tetiklendi.`),
      },
      {
        text: btn3Text,
        color: btn3Color,
        icon: ICON_MAP[btn3Icon] ? { element: ICON_MAP[btn3Icon], position: "start" } : undefined,
        onClick: () => alert(`${btn3Text} aksiyonu tetiklendi.`),
      },
    ].filter((btn) => btn.text); // Eğer metin silinirse butonu listeden kaldırır

    return <ButtonAction {...args} buttons={dynamicButtons as any} />;
  },
};
