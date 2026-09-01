// import './index.css';

interface Link {
  /** The text to display for the link */
  text: string;
  /** The URL to link to */
  url: string;
  /** optional hover text */
  hoverText?: string;
}

export interface SocialLinksProps {
  /** Title on the footer*/
  title?: string;
  socialLinksPosition?: 'left' | 'center' | 'right';
  // /** Is the footer navigation visible? */
  // footerNavi?: boolean;
  // footerNaviPosition?: 'left' | 'center' | 'right';
  // footerNaviIndex?: number;
  // /** What background color to use */
  // backgroundColor?: string;
  // /** What border color to use */
  // borderColor?: string;
  // /** What border width to use */
  // borderWidth?: string;
  // /** What border style to use */
  // borderStyle?: 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'none';
  // /** Footer contents */
  // links: Array<Link>;
  // /** Optional click handler */
  // onClick?: () => void;
}

/** Primary UI component for user interaction */
export const SocialLinks = ({
  title,
  socialLinksPosition,
  ...props
}: SocialLinksProps) => {

  return (
    <div className="socialLinks" {...props}>
      <h2 className="text-center">{title ? title : 'Follow Us'}</h2>
      <div className={[`text-${socialLinksPosition ? socialLinksPosition : 'left'}`,"flex flex-col"].join(" ")}>
        <a href="#"><button>Instagram</button></a>
        <a href="#"><button>TikTok</button></a>
        <a href="#"><button>Discord</button></a>
        <a href="#"><button>LinkedIn</button></a>
      </div>
    </div>
  );
};