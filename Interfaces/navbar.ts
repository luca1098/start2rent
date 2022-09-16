export interface MenuLinkI {
  href: string;
  label: string;
  isButton?: boolean
  onClick?: () => void
}

export interface NavbarI {
  links: Array<MenuLinkI>
}