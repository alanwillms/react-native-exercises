import {GestureResponderEvent} from 'react-native';

export default interface OnPressFunction {
  (event: GestureResponderEvent): void;
}
