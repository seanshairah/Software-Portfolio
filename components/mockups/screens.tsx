import type { MockupPreset } from "@/content/projects/types";
import type { Screen } from "@/components/portfolio/screen-switcher";
import { BlessBriMockup } from "./blessbri";
import { TransportMockup } from "./transport";
import { PaymentsMockup } from "./payments";
import { ProductShot } from "./product-shot";

/**
 * Case-study galleries. Shipped products show real, captured screens (in
 * /public/screens); the concept / proposed-architecture projects keep their
 * built mockups. Student names on the Ivy payments screen are redacted, and the
 * Frazier admin/messages views (which carried real people's emails and chat)
 * are intentionally left out.
 */
export const projectScreens: Record<MockupPreset, Screen[]> = {
  logistics: [
    { label: "Job pool", node: <ProductShot src="/screens/frazier-jobpool.webp" alt="Frazier Logistics — job pool and assignment" w={1366} h={768} priority /> },
    { label: "Shipment tracking", node: <ProductShot src="/screens/frazier-shipments.webp" alt="Frazier Logistics — shipment tracking" w={1366} h={768} /> },
    { label: "Operations", node: <ProductShot src="/screens/frazier-operations.webp" alt="Frazier Logistics — operations overview" w={1366} h={768} /> },
    { label: "Landing", node: <ProductShot src="/screens/frazier-landing.webp" alt="Frazier Logistics — customs clearance without the wait" w={1366} h={768} /> },
  ],
  housing: [
    { label: "Overview", node: <ProductShot src="/screens/ivy-overview.webp" alt="Ivy House — owner overview dashboard" w={1366} h={598} priority /> },
    { label: "Rooms", node: <ProductShot src="/screens/ivy-rooms.webp" alt="Ivy House — rooms and occupancy" w={1366} h={597} /> },
    { label: "Payments", node: <ProductShot src="/screens/ivy-payments.webp" alt="Ivy House — student payments, names redacted" w={1366} h={597} /> },
    { label: "Reports", node: <ProductShot src="/screens/ivy-reports.webp" alt="Ivy House — financial reports" w={1366} h={599} /> },
  ],
  blessbri: [{ label: "Residences", node: <BlessBriMockup /> }],
  kinos: [
    { label: "Today", node: <ProductShot src="/screens/kinos-today.webp" alt="KinOS — today, the daily family brief" w={1366} h={598} priority /> },
    { label: "Attention needed", node: <ProductShot src="/screens/kinos-attention.webp" alt="KinOS — attention needed" w={1366} h={599} /> },
    { label: "Before KinOS", node: <ProductShot src="/screens/kinos-before.webp" alt="KinOS — scattered family updates before KinOS" w={1366} h={596} /> },
    { label: "Landing", node: <ProductShot src="/screens/kinos-landing.webp" alt="KinOS — the people you love, in one calm orbit" w={1366} h={608} /> },
  ],
  transport: [{ label: "Overview", node: <TransportMockup /> }],
  farming: [
    { label: "Dashboard", node: <ProductShot src="/screens/msasa-dashboard.webp" alt="Msasa Farm ERP — dashboard" w={1366} h={768} priority /> },
    { label: "System map", node: <ProductShot src="/screens/msasa-systemmap.webp" alt="Msasa Farm ERP — system map" w={1366} h={768} /> },
    { label: "Farm map", node: <ProductShot src="/screens/msasa-map.webp" alt="Msasa Farm ERP — satellite farm map" w={1366} h={768} /> },
    { label: "Intelligence", node: <ProductShot src="/screens/msasa-intelligence.webp" alt="Msasa Farm ERP — owner intelligence and risk triage" w={1366} h={768} /> },
    { label: "Sensors", node: <ProductShot src="/screens/msasa-sensors.webp" alt="Msasa Farm ERP — sensors and devices" w={1366} h={768} /> },
  ],
  payments: [{ label: "Overview", node: <PaymentsMockup /> }],
};
