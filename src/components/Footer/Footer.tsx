export interface FooterProps {
  className: string;
}

const Footer = ({ className }: FooterProps): JSX.Element => {
  return (
    <div
      className={`"w-full px-4 lg:px-6 py-2.5 border-t bg-[#deb7be] text-sm font-semibold italic text-slate-500 border-t-white bg-body " ${className} `}
    >
      Copyright: Nguyen Tuan Khoa
    </div>
  );
};

export default Footer;
