import type { ComponentType } from 'react';
import type { ThemeType, ThemeProps } from '../types';

type WithoutTheme<P extends ThemeProps> = Omit<P, 'theme'>;

type WithThemeProps<P extends ThemeProps> = WithoutTheme<P> & {
  theme?: ThemeType;
};

export function withTheme<P extends ThemeProps>(
  WrappedComponent: ComponentType<P>
): ComponentType<WithThemeProps<P>> {
  
  const ComponentWithTheme: ComponentType<WithThemeProps<P>> = (props) => {
    const { theme = 'light', ...restProps } = props;

    const componentProps: P = {
      ...restProps,
      theme
    } as P;
    
    return <WrappedComponent {...componentProps} />;
  };

  const displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  ComponentWithTheme.displayName = `withTheme(${displayName})`;
  
  return ComponentWithTheme;
}