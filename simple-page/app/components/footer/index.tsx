"use client";
// import './index.css';
import { FooterNavi } from '@components/footerNavi';
import { SocialLinks } from '@components/socialLinks';

export interface FooterProps {
  /** Title on the footer*/
  title?: string;
  /** Is the social links section visible? */
  socialLinks: boolean;
  socialLinksPosition?: 'left' | 'center' | 'right';
  socialLinksIndex?: number;
  /** Is the footer navigation visible? */
  footerNavi: boolean;
  footerNaviPosition?: 'left' | 'center' | 'right';
  footerNaviIndex?: number;
  /** What background color to use */
  backgroundColor?: string;
  /** Footer contents */
  copyright: string;
  /** Optional click handler */
  onClick?: () => void;
}

const FooterContent = ({
  footerNavi, 
  footerNaviIndex, 
  socialLinks, 
  socialLinksIndex,
  socialLinksPosition,
  footerNaviPosition
}: {
  footerNavi: boolean;
  footerNaviIndex: number | undefined;
  socialLinks: boolean;
  socialLinksIndex: number | undefined;
  socialLinksPosition?: 'left' | 'center' | 'right';
  footerNaviPosition?: 'left' | 'center' | 'right';
}) => {

  if (!footerNavi && !socialLinks) return (<div></div>);
  if (footerNavi && !socialLinks) return (<FooterNavi footerNaviPosition={footerNaviPosition} />);
  if (!footerNavi && socialLinks) return (<SocialLinks socialLinksPosition={socialLinksPosition} />);

  if (footerNaviIndex == undefined || socialLinksIndex == undefined || footerNaviIndex > socialLinksIndex) return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 md:flex-row gap-4">
      <FooterNavi footerNaviPosition={footerNaviPosition} />
      <SocialLinks socialLinksPosition={socialLinksPosition} />
    </div>
  )  
  else return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 md:flex-row gap-4">
      <SocialLinks socialLinksPosition={socialLinksPosition} />
      <FooterNavi footerNaviPosition={footerNaviPosition} />
    </div>
  )
}

/** Primary UI component for user interaction */
export const Footer = ({
  title,
  socialLinks,
  socialLinksPosition,
  socialLinksIndex,
  // socialLinksSize,
  footerNavi,
  footerNaviPosition,
  footerNaviIndex,
  // footerNaviSize,
  backgroundColor,
  copyright,
  ...props
}: FooterProps) => {
  
  return (
    <footer className="flex flex-col" {...props}>
      <h2 className="text-center" >{title ? title : 'Dander'}</h2>
      <hr />
      <FooterContent 
        footerNavi={footerNavi}
        footerNaviIndex={footerNaviIndex}
        socialLinks={socialLinks}
        socialLinksIndex={socialLinksIndex}
        socialLinksPosition={socialLinksPosition}
        footerNaviPosition={footerNaviPosition}
      />
      <p className="text-center">{copyright}</p>

      <style jsx>{`
        footer {
          background-color: ${backgroundColor};
        }

        footer .socialLinks *{
          text-align: ${socialLinksPosition};
        }

        footer .footerNavi *{
          text-align: ${footerNaviPosition};
        }
      `}</style>
    </footer>
  );
};