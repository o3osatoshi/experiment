"use client";

import { Pencil } from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button/button";

export default function Edit() {
  return (
    <Button variant="ghost" size="icon">
      <Pencil />
    </Button>
  );
}
