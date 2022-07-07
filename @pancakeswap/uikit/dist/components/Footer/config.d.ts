import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, MediumIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.canaryx.xyz/finance/contact-us",
      },
      {
        label: "Blog",
        href: "https://canaryx.xyz.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.canaryx.xyz/contact-us/telegram",
      },
      {
        label: "CANARY",
        href: "https://docs.canaryx.xyz/tokenomics/canary",
      },
      {
        label: "—",
      },
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.canaryx.xyz/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.canaryx.xyz/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.canaryx.xyz/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://docs.canaryx.xyz/",
      },
      {
        label: "Documentation",
        href: "https://docs.canaryx.xyz/finance",
      },
      {
        label: "Bug Bounty",
        href: "https://docs.canaryx.xyz/",
      },
      {
        label: "Audits",
        href: "https://docs.canaryx.xyz/",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/canaryxtoken",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "English",
        href: "https://t.me/canaryx",
      },

      {
        label: "Announcements",
        href: "https://t.me/CanaryX",
      },
    ],
  },
  {
    label: "Reddit",
    icon: RedditIcon,
    href: "https://reddit.com/r/",
  },
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://instagram.com/canaryx_official",
  },
  {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/",
  },
  {
    label: "Discord",
    icon: DiscordIcon,
    href: "https://discord.gg/",
  },
  {
    label: "Medium",
    icon: MediumIcon,
    href: "https:/canaryx.medium.com/",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
