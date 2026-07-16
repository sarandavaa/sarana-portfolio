import type { Metadata } from "next";
import AlertContent from "@/components/AlertContent";

export const metadata: Metadata = {
  title: "Security Alert Mobile Design — Sarana Davaa",
  description: "Alert",
};

export default function Alert() {
  return <AlertContent />;
}
