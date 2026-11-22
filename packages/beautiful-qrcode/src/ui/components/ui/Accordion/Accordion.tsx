import type { ParentComponent } from 'solid-js';

import { ChevronDownIcon } from '@/ui/components/icons';

import styles from './Accordion.module.css';

interface AccordionProps {
  title: string;
}

export const Accordion: ParentComponent<AccordionProps> = (props) => (
  <details class={styles.accordion}>
    <summary>
      <span class="body-s">{props.title}</span>
      <ChevronDownIcon class={styles.icon} aria-hidden="true" />
    </summary>
    <div class={styles.content}>{props.children}</div>
  </details>
);
