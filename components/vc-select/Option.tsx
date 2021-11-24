import type { FunctionalComponent } from 'vue';

import type { OptionCoreData } from './interface';

export interface OptionProps extends Omit<OptionCoreData, 'label'> {
  /** Save for customize data */
  [prop: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export interface OptionFC extends FunctionalComponent<OptionProps> {
  /** Legacy for check if is a Option Group */
  isSelectOption: boolean;
}

const Option: OptionFC = () => null;
Option.isSelectOption = true;
Option.displayName = 'ZSelectOption';
export default Option;
