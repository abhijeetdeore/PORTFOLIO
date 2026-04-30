import { mySocials } from "@/constants";
const Footer = () => {
    return (
<section className="flex flex-wrap items-center justify-between gap-5 pb-5 text-sm text-neutral-400 c-space ">
    <div className="mb-4 bg-gradient-to-r from-transparentvia-neutral-700 to-transparent h-[1px] w-full"></div>
    <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
    </div>
    <div className="flex gap-3">
{mySocials.map((social, index)=>(<a href={social.href} key={index}>
    <img src={social.icon} className="w-5 h-5"/></a>))}
    </div>
    <p>© 2026 Abhijeet. All rights reserved.</p>
</section>
    );
};
export default Footer 