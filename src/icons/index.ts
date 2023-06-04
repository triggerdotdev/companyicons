import { Icon } from "../types";

import { AirtableIcon } from "./companies/airtable";
export { AirtableIcon };
import { AsanaIcon } from "./companies/asana";
export { AsanaIcon };
import { FacebookIcon } from "./companies/facebook";
export { FacebookIcon };
import { GitHubDarkIcon, GitHubLightIcon } from "./companies/github";
export { GitHubDarkIcon, GitHubLightIcon };
import { HubspotIcon } from "./companies/hubspot";
export { HubspotIcon };
import { LinearDarkIcon, LinearLightIcon } from "./companies/linear";
export { LinearDarkIcon, LinearLightIcon };
import { NotionIcon } from "./companies/notion";
export { NotionIcon };
import { SalesforceIcon } from "./companies/salesforce";
export { SalesforceIcon };
import { SendGridIcon } from "./companies/sendgrid";
export { SendGridIcon };
import { ShopifyIcon } from "./companies/shopify";
export { ShopifyIcon };
import { SlackIcon } from "./companies/slack";
export { SlackIcon };
import { StripeIcon } from "./companies/stripe";
export { StripeIcon };
import { TwilioIcon } from "./companies/twilio";
export { TwilioIcon };
import { TwitterIcon } from "./companies/twitter";
export { TwitterIcon };

export const icons: Record<string, Icon> = {
  airtable: { all: AirtableIcon },
  asana: { all: AsanaIcon },
  facebook: { all: FacebookIcon },
  github: { light: GitHubLightIcon, dark: GitHubDarkIcon, default: "dark" },
  hubspot: { all: HubspotIcon },
  linear: { light: LinearLightIcon, dark: LinearDarkIcon, default: "light" },
  notion: { all: NotionIcon },
  salesforce: { all: SalesforceIcon },
  sendgrid: { all: SendGridIcon },
  shopify: { all: ShopifyIcon },
  slack: { all: SlackIcon },
  stripe: { all: StripeIcon },
  twilio: { all: TwilioIcon },
  twitter: { all: TwitterIcon },
};
