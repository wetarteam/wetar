import React from "react";
import { useOverrides, Override, StackItem, Stack } from "@quarkly/components";
import { Text, Box } from "@quarkly/widgets";
const defaultProps = {
	"margin-top": "40px",
	"flex-wrap": "wrap"
};
const overrides = {
	"stackItem": {
		"kind": "StackItem",
		"props": {
			"width": "25%",
			"lg-width": "50%",
			"sm-width": "100%"
		}
	},
	"stackItemOverride": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"background": "#ffdb59",
			"border-style": "solid",
			"border-width": "3px"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"as": "h3",
			"font": "normal 600 36px/1 --fontFamily-googleOpenSans",
			"margin": "5px 0 20px 0",
			"text-align": "center",
			"children": "PAGES"
		}
	},
	"box": {
		"kind": "Box",
		"props": {
			"height": "0",
			"margin": "0 0 20px 0",
			"padding-bottom": "100%",
			"background": "url(https://uploads.quarkly.io/60d350285179a1001e683fe8/images/animation_200_kqalxfth.gif?v=2021-06-24T07:52:56.200Z) 50% 0/cover no-repeat"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"color": "#002ba5",
			"margin": "0",
			"text-align": "center",
			"children": <>
				For personal sites, Hobby sites, Business sites, Product sites.{"\n"}
				<br />
				{"\n\n"}
			</>
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"as": "p",
			"margin": "20px 0 5px 0",
			"text-align": "center",
			"children": <>
				Static website,
				<br />
				Free SSL,
				<br />
				Unlimited Bandwidth
				<br />
				10gb storage,
				<br />
				CDN Bandwidth,
				<br />
				Best support,
				<br />
				Free Upgrade
				<br />
				99.9 % Uptime Guaranteed.
				<br />
				<br />
				{"\n\n"}
			</>
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"font": "900 70px --fontFamily-googleOpenSans",
			"text-align": "center",
			"children": "₹99"
		}
	},
	"stackItem1": {
		"kind": "StackItem",
		"props": {
			"width": "25%",
			"lg-width": "50%",
			"sm-width": "100%"
		}
	},
	"stackItemOverride1": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"background": "#28eca5",
			"border-style": "solid",
			"border-width": "3px"
		}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"as": "h3",
			"font": "normal 600 36px/1 --fontFamily-googleOpenSans",
			"margin": "5px 0 20px 0",
			"text-align": "center",
			"children": "PAGES +"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"height": "0",
			"margin": "0 0 20px 0",
			"padding-bottom": "100%",
			"background": "url(https://uploads.quarkly.io/60d350285179a1001e683fe8/images/animation_500_kqanb8ze.gif?v=2021-06-24T08:32:04.576Z) 50% 0/cover no-repeat"
		}
	},
	"text5": {
		"kind": "Text",
		"props": {
			"color": "#002ba5",
			"margin": "0",
			"text-align": "center",
			"children": <>
				Optimized for small and Medium Business, Blogs
				<br />
				{"\n\n"}
			</>
		}
	},
	"text6": {
		"kind": "Text",
		"props": {
			"as": "p",
			"margin": "20px 0 5px 0",
			"text-align": "center",
			"children": <>
				Dynamic website,
				<br />
				Free SSL
				<br />
				10gb Bandwidth
				<br />
				10gb storage
				<br />
				CDN Bandwidth,
				<br />
				Best support,
				<br />
				Free Upgrade,
				<br />
				99.9 % Uptime Guaranteed.{"\n\n"}
				<br />
				{"\n\n"}
			</>
		}
	},
	"text7": {
		"kind": "Text",
		"props": {
			"font": "900 70px --fontFamily-googleOpenSans",
			"text-align": "center",
			"children": "₹129"
		}
	},
	"stackItem2": {
		"kind": "StackItem",
		"props": {
			"width": "25%",
			"lg-width": "50%",
			"sm-width": "100%"
		}
	},
	"stackItemOverride2": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"border-style": "solid",
			"border-width": "3px",
			"background": "#7dfff1"
		}
	},
	"text8": {
		"kind": "Text",
		"props": {
			"as": "h3",
			"font": "normal 600 36px/1 --fontFamily-googleOpenSans",
			"margin": "5px 0 20px 0",
			"text-align": "center",
			"children": "STORES"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"height": "0",
			"margin": "0 0 20px 0",
			"padding-bottom": "100%",
			"background": "url(https://uploads.quarkly.io/60d350285179a1001e683fe8/images/animation_500_kqanum15.gif?v=2021-06-24T08:46:39.918Z) 50% 0/cover no-repeat"
		}
	},
	"text9": {
		"kind": "Text",
		"props": {
			"color": "#002ba5",
			"margin": "0",
			"text-align": "center",
			"children": <>
				Start selling online and Start your business.
				<br />
				{"\n\n"}
			</>
		}
	},
	"text10": {
		"kind": "Text",
		"props": {
			"as": "p",
			"margin": "20px 0 5px 0",
			"text-align": "center",
			"children": <>
				Unlimited products,
				<br />
				Free SSL,
				<br />
				25,000 visits,
				<br />
				Woo commerce powered
				<br />
				CDN Bandwidth,
				<br />
				Best support,
				<br />
				Free Upgrade,
				<br />
				99.9 % Uptime Guaranteed.{"\n\n"}
				<br />
				{"\n\n"}
			</>
		}
	},
	"text11": {
		"kind": "Text",
		"props": {
			"font": "900 70px --fontFamily-googleOpenSans",
			"text-align": "center",
			"children": "₹199"
		}
	},
	"stackItem3": {
		"kind": "StackItem",
		"props": {
			"width": "25%",
			"lg-width": "50%",
			"sm-width": "100%"
		}
	},
	"stackItemOverride3": {
		"kind": "Override",
		"props": {
			"slot": "StackItemContent",
			"flex-direction": "column",
			"background": "#ffb74b",
			"border-style": "solid",
			"border-width": "3px"
		}
	},
	"text12": {
		"kind": "Text",
		"props": {
			"as": "h3",
			"font": "normal 600 36px/1 --fontFamily-googleOpenSans",
			"margin": "5px 0 20px 0",
			"text-align": "center",
			"children": "PAGES UX"
		}
	},
	"box3": {
		"kind": "Box",
		"props": {
			"height": "0",
			"margin": "0 0 20px 0",
			"padding-bottom": "100%",
			"background": "url(https://uploads.quarkly.io/60d350285179a1001e683fe8/images/animation_500_kqaoewp7.gif?v=2021-06-24T09:02:51.359Z) 50% 0/cover no-repeat"
		}
	},
	"text13": {
		"kind": "Text",
		"props": {
			"color": "#002ba5",
			"margin": "0",
			"text-align": "center",
			"children": <>
				UX powered sites .Powerful business. Powerful Hosting.
				<br />
				{"\n\n"}
			</>
		}
	},
	"text14": {
		"kind": "Text",
		"props": {
			"as": "p",
			"margin": "20px 0 5px 0",
			"text-align": "center",
			"children": <>
				Static & Dyamic website,
				<br />
				Free SSL
				<br />
				Storage & Bandwidth as per requirement
				<br />
				CDN Bandwidth,
				<br />
				Best support,
				<br />
				Free Upgrade.
				<br />
				Daily Backup,
				<br />
				Powerful Animations & Interactions,
				<br />
				Easy CMS & Ecommerce,
				<br />
				Powerful SEO.{"\n\n"}
				<br />
				{"\n\n"}
			</>
		}
	},
	"text15": {
		"kind": "Text",
		"props": {
			"font": "900 40px --fontFamily-googleOpenSans",
			"text-align": "center",
			"children": <>
				Cloud
				<br />
				Hosting
			</>
		}
	}
};

const Pricings1 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Stack {...rest}>
		<StackItem {...override("stackItem")}>
			<Override {...override("stackItemOverride")} />
			<Text {...override("text")} />
			<Box {...override("box")} />
			<Text {...override("text1")} />
			<Text {...override("text2")} />
			<Text {...override("text3")} />
		</StackItem>
		<StackItem {...override("stackItem1")}>
			<Override {...override("stackItemOverride1")} />
			<Text {...override("text4")} />
			<Box {...override("box1")} />
			<Text {...override("text5")} />
			<Text {...override("text6")} />
			<Text {...override("text7")} />
		</StackItem>
		<StackItem {...override("stackItem2")}>
			<Override {...override("stackItemOverride2")} />
			<Text {...override("text8")} />
			<Box {...override("box2")} />
			<Text {...override("text9")} />
			<Text {...override("text10")} />
			<Text {...override("text11")} />
		</StackItem>
		<StackItem {...override("stackItem3")}>
			<Override {...override("stackItemOverride3")} />
			<Text {...override("text12")} />
			<Box {...override("box3")} />
			<Text {...override("text13")} />
			<Text {...override("text14")} />
			<Text {...override("text15")} />
		</StackItem>
		{children}
	</Stack>;
};

Object.assign(Pricings1, { ...Stack,
	defaultProps,
	overrides
});
export default Pricings1;