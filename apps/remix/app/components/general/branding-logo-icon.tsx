import type { ImgHTMLAttributes } from 'react';

export type LogoProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'>;

export const BrandingLogoIcon = ({ className, ...props }: LogoProps) => {
  return <img src="/logo.png" alt="OneMed Sign" className={className} {...props} />;
};
