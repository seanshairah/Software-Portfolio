import type { MockupPreset } from "@/content/projects/types";
import { LogisticsMockup } from "./logistics";
import { HousingMockup } from "./housing";
import { BlessBriMockup } from "./blessbri";
import { KinosMockup } from "./kinos";
import { TransportMockup } from "./transport";
import { FarmingMockup } from "./farming";
import { PaymentsMockup } from "./payments";

const registry: Record<MockupPreset, () => React.ReactElement> = {
  logistics: LogisticsMockup,
  housing: HousingMockup,
  blessbri: BlessBriMockup,
  kinos: KinosMockup,
  transport: TransportMockup,
  farming: FarmingMockup,
  payments: PaymentsMockup,
};

export function ProjectMockup({ preset }: { preset: MockupPreset }) {
  const Comp = registry[preset];
  return <Comp />;
}

export {
  LogisticsMockup,
  HousingMockup,
  BlessBriMockup,
  KinosMockup,
  TransportMockup,
  FarmingMockup,
  PaymentsMockup,
};
