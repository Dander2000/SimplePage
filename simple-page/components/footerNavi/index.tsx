// import './index.css';

interface Link {
  /** The text to display for the link */
  text: string;
  /** The URL to link to */
  url: string;
  /** optional hover text */
  hoverText?: string;
}

export interface FooterNaviProps {
  /** Title on the footer*/
  title?: string;
  // /** Is the footer navigation visible? */
  // footerNavi?: boolean;
  footerNaviPosition?: 'left' | 'center' | 'right';
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
export const FooterNavi = ({
  title,
  footerNaviPosition,
  ...props
}: FooterNaviProps) => {

  return (
    <div {...props}>
      <h2 className="text-center">{title ? title : "Navigation"}</h2>
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
        <li><a href="#">Link 4</a></li>
      </ul>
    </div>
  );
};