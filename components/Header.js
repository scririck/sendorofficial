import {useContext} from 'react';
import { Context } from '/lib/Context';
import Select from 'react-select'; 
import {useRouter} from 'next/router';
import Link from 'next/link';
import useIsMounted from '../lib/hooks/useIsMounted';
import Image from 'next/image';

export default function Header({data, showTitle, href, withDeleteIcon}){
    
    const isMounted = useIsMounted();
    
    const router = useRouter();

    const {
        t, webLang, setWebLang, darkTheme, setDarkTheme
    } = useContext(Context);

    const menuVoices = [
        {name: t("home"), href: '/'},
        {name: t("case studies"), href: '/case-studies'},
        {name: t("testimonials"), href: '/testimonials'},
        {name: t("team"), href: '/team'},
    ];

    const languagesOptions = [
        {value: "it", label: <img className="lang-flag" alt="IT" src="/img/flags/it.svg"/>},
        {value: "en", label: <img className="lang-flag" alt="EN" src="/img/flags/en.svg"/>},
    ];

    return isMounted && (
        <header>
            <div className="logo-container">
                <Link className="logo" href="/"><img src="/img/logo.png" /></Link>
            </div>
            <nav>
                {menuVoices.map((voice, i) => router.pathname !== voice.href && (
                    <Link key={`menu-voice-${i}`} className="menu-voice" href={voice.href}>{voice.name}</Link>
                ))}
            </nav>
            <div className="language-selector" onClick={()=>{setWebLang(webLang === "it" ? "en" : "it")}}>
                <span>{webLang === "it" ? "en" : "it"}</span>
            </div>
            <div onClick={()=>{setDarkTheme(!darkTheme)}}>THEME</div>
        </header>
    )
}