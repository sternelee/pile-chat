"use client";

import { AddFilesButton } from "@/components/buttons/AddFilesButton";
import { EmptyPlaceholder } from "@/components/shared/empty-placeholder";

export default function NoTextPlaceholder({ propertyId, setDescriptionData }) {
  return (
    <EmptyPlaceholder>
      <EmptyPlaceholder.Icon name="brain" />
      <EmptyPlaceholder.Title>Generate description</EmptyPlaceholder.Title>
      <EmptyPlaceholder.Description>
        Let pilechat make the summary and text for you.
      </EmptyPlaceholder.Description>
    </EmptyPlaceholder>
  );
}
