export interface Social {
  label: string;
  handle: string;
  href: string;
}

// Only channels that resolve to Sean's real contact surface. No invented
// profiles — the email is the canonical way to reach him.
export const socials: Social[] = [
  { label: "Email", handle: "seanshairah@gmail.com", href: "mailto:seanshairah@gmail.com" },
  { label: "GitHub", handle: "seanshairah", href: "https://github.com/seanshairah" },
];
