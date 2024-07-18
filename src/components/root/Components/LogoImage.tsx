import Image from "next/image";
import Link from "next/link";
import tahellogo from "./../../../../public/tahel.jpg";
function LogoImage({
	cssClass,
	isDisabled,
}: {
	cssClass: string;
	isDisabled?: boolean;
}) {
	return (
		<Link href={isDisabled ? "" : "/main"}>
			<Image
				src={tahellogo}
				width={80}
				height={80}
				className={cssClass}
				alt="logo"
			/>
		</Link>
	);
}

export default LogoImage;
