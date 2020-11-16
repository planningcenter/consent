export { railsCsrfFetch } from "./modules/api_request";

export {
  AppsProvider,
  mapApps,
  mapResourcesToCalendar,
} from "./modules/apps_provider";
export { ConnectedPeopleProvider } from "./modules/connected_people_provider";

export { DisplaySwitch } from "./modules/display_switch";

export {
  Topbar as NotSmallTopbar,
  Route as NotSmallRoute,
} from "./modules/not_small_topbar";

export {
  Topbar as SmallTopbar,
  Route as SmallRoute,
} from "./modules/small_topbar";

export {
  Topbar as MediumTopbar,
  Route as MediumRoute,
} from "./modules/medium_topbar";

export {
  default as PlatformAnnouncements,
  StyleProvider as PlatformAnnouncementsStyleProvider,
  StyledAnnouncement as StyledPlatformAnnouncement,
} from "./modules/platform_announcements";

export { ProductAnnouncement } from "./modules/product_announcement";

export {
  Bell as BellIcon,
  X as XIcon,
  Spyglass as SpyglassIcon,
} from "./modules/symbols";
