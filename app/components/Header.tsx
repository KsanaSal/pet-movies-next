import Link from "next/link";
import LogoMovieIcon from "../assets/icons/LogoMovieIcon";

const Header = () => {
    return (
        <header className="flex max-w-screen h-[230px] bg-headerPatternMob md:bg-headerPatternTab lg:bg-headerPatternDes bg-no-repeat bg-cover bg-center px-[16px] md:px-[32px] lg:px-[40px] text-primaryLight">
            <div>
                <Link
                    href={"/"}
                    className="flex items-center gap-[8px] text-primaryLight"
                >
                    <div className="flex items-center justify-center w-[30px h-[30px] rounded-[4px] bg-primaryDarkGradient p-[4px] border border-transparent-primaryLight7">
                        <LogoMovieIcon className="w-[24px] h-[24px]" />
                    </div>

                    <h1 className="hidden md:flex text-[30px] font-medium">
                        Filmoteka
                    </h1>
                </Link>
            </div>
        </header>
    );
};

export default Header;
