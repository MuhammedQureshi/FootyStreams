export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "GOAL808",
	description: "A football streaming platform",
	navItems: [
	{
		label: "Home",
		href: "/",
	},
    {
      label: "Collection",
      href: "/",
    },
    {
      label: "Schedule",
      href: "/",
    },
    {
      label: "Blog",
      href: "/",
    },
    {
      label: "More",
      href: "/",
    }
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Collection",
      href: "/",
    },
    {
      label: "Schedule",
      href: "/",
    },
    {
      label: "Blog",
      href: "/",
    },
    {
      label: "More",
      href: "/",
    },
	{
		label: "Logout",
		href: "/logout",
	},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
