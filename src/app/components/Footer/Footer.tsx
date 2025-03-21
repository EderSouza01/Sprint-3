import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="div-left">
                <Image
                    src="/img/Grupo_CCR_-_Logo.svg-removebg-preview.png"
                    alt="CCR Logo"
                    width={100}
                    height={50}
                />
                <span>Instituto CCR</span>
            </div>
            <div className="div-center">
                <Image
                    src="/img/image-removebg-preview.png"
                    alt="CCR Logo"
                    width={100}
                    height={50}
                />
            </div>
            <div className="div-right">
                <div className="icon-gmail">
                    <Image
                        src="/img/gmail.png"
                        alt="Gmail Icon"
                        width={24}
                        height={24}
                    />
                </div>
                <div className="email">
                    <h3>Edersouzasilva49@gmail.com</h3>
                    <h3>gabrielgoncalves17700@gmail.com</h3>
                    <h3>leorocha2005br@gmail.com</h3>
                </div>
            </div>
        </footer>
    );
}