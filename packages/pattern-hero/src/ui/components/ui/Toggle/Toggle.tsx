import { createUniqueId, type ParentComponent } from 'solid-js';
import styles from './Toggle.module.css';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Toggle: ParentComponent<ToggleProps> = (props) => {
  const id = createUniqueId();

  return (
    <>
      <label for={id} id={`${id}-label`} class={`${styles.withIcon} body-m`}>
        {props.children}
      </label>
      <label class="switch-container">
        <input
          type="checkbox"
          class="checkbox-hidden"
          aria-labelledby={`${id}-label`}
          id={id}
          checked={props.checked}
          onChange={(e) => props.onChange(e.currentTarget.checked)}
        />
        <span class="switch-slider"></span>
      </label>
    </>
  );
};
