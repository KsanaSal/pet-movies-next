import Link from "next/link";
import LogoMovieIcon from "../assets/icons/LogoMovieIcon";
import UserIcon from "../assets/icons/UserIcon";

const Header = () => {
    return (
        <header className="flex max-w-screen h-[230px] bg-headerPatternMob md:bg-headerPatternTab lg:bg-headerPatternDes bg-no-repeat bg-cover bg-center px-[16px] md:px-[32px] lg:px-[40px] text-primaryLight">
            <div className="flex justify-between w-full mt-[40px]">
                <Link href={"/"} className="flex gap-[8px] text-primaryLight">
                    <div className="flex items-center justify-center w-[30px h-[30px] rounded-[4px] bg-primaryDarkGradient p-[4px] border border-transparent-primaryLight7">
                        <LogoMovieIcon className="w-[24px] h-[24px]" />
                    </div>

                    <h1 className="hidden md:flex text-[30px] font-medium">
                        Filmoteka
                    </h1>
                </Link>
                <div className="flex gap-[20px] md:gap-[30px] h-max items-center text-[12px] md:text-[14px] lg:text-[18px]">
                    <Link
                        href={"/"}
                        className="rounded-[4px] bg-primaryDarkGradient p-[4px] border border-transparent-primaryLight7 font-medium uppercase px-[8px] py-[4px] h-[22px] flex items-center justify-center"
                    >
                        Home
                    </Link>
                    <Link
                        href={"/library"}
                        className="rounded-[4px] bg-primaryDarkGradient p-[4px] border border-transparent-primaryLight7 font-medium uppercase px-[8px] py-[4px] h-[22px] flex items-center justify-center"
                    >
                        My library
                    </Link>
                    <button
                        type="button"
                        className="rounded-[4px] bg-primaryDarkGradient p-[4px] border border-transparent-primaryLight7 font-medium uppercase h-[30px] w-[30px] flex items-center justify-center"
                    >
                        <UserIcon className="w-[24px] h-[24px]" />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
