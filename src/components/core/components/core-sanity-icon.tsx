import type { HTMLProps } from 'react';

interface CoreSanityIconProps extends HTMLProps<HTMLDivElement> {
  svg?: string;
}

export function CoreSanityIcon({ svg, ...props }: CoreSanityIconProps) {
  if (!svg) {
    return null;
  }

  const processedSvgString = svg
    .replace(/ style="[^"]*"/, '')
    .replace(/(\s)(height|width)="[^"]*"/g, '$1="100%"');

  return <figure dangerouslySetInnerHTML={{ __html: processedSvgString }} { ...props } />;
}
