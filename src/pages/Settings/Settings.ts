import Block from '../../services/Block';
import template from './template';
import { SettingsProp } from './types';

class Settings extends Block<SettingsProp> {
  render(): string {
    return this.compile(template);
  }
}

export default Settings;
