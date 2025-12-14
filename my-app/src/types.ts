export type ThemeType = 'light' | 'dark';

export interface ThemeProps {
  theme: ThemeType;
}

export type ThemeColors = {
  background: string;
  text: string;
  buttonBackground: string;
  buttonText: string;
  border: string;
};