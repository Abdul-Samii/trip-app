declare module formType {
  export interface inputT {
    placeholder: string;
    placeholderTextColor: string;
    style: any;
    inputMode: any;
    value: string;
    keyboardType: any;
    secureTextEntry: boolean;
    onChangeText: (e: any) => void;
  }
}
