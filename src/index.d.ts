declare module "my-component-library" {
    import { ReactNode } from "react";
  
    export interface ButtonProps {
      label: string;
      onClick?: () => void;
      disabled?: boolean;
    }
  
    export const Button: (props: ButtonProps) => ReactNode;
  }
  