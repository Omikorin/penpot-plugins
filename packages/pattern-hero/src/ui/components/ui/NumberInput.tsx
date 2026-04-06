import { createUniqueId, type ParentComponent } from 'solid-js';

interface NumberInputProps {
  value: number;
  onInput: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  required?: boolean;
}

export const NumberInput: ParentComponent<NumberInputProps> = (props) => {
  const id = createUniqueId();

  return (
    <>
      <label for={id} id={`${id}-label`} class="with-icon body-m">
        {props.children}
      </label>
      <div>
        <input
          type="number"
          class="input"
          aria-labelledby={`${id}-label`}
          id={id}
          min={props.min ?? 1}
          max={props.max ?? 100}
          step={props.step ?? 1}
          required={props.required ?? true}
          value={props.value}
          onInput={(e) => props.onInput(Number(e.currentTarget.value))}
        />
      </div>
    </>
  );
};
